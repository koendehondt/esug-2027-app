import UIKit
import Capacitor

// Subclasses Capacitor's bridge view controller purely to turn on iOS's
// native edge-swipe-to-go-back gesture on the WKWebView. This works because
// the Ember app uses real history.pushState navigation (Router's
// `location = 'history'`), so the webview builds up a genuine
// back/forward list for the system gesture to walk through.
//
// `capacitorDidLoad()` is Capacitor's documented extension point for this:
// by the time it fires, `webView` and `bridge` are guaranteed to already be
// set (see CAPBridgeViewController.loadView() in the Capacitor source),
// which is earlier and more reliable than doing this in `viewDidLoad()`.
class MainViewController: CAPBridgeViewController {
    private var splashOverlay: UIView?
    private var loadingObservation: NSKeyValueObservation?

    override func capacitorDidLoad() {
        webView?.allowsBackForwardNavigationGestures = true
        showSplashOverlay()
    }

    // Continues the launch screen (LaunchScreen.storyboard: the SplashLogo
    // balloon, 340x340 points, centred on #f5f7fa) on top of the web view until
    // the first page has loaded. iOS only shows the launch screen while the
    // app process starts, which is much shorter than the first page load,
    // and the web view's own background would otherwise cover everything.
    private func showSplashOverlay() {
        guard let webView = webView else { return }

        let overlay = UIView()
        overlay.backgroundColor = UIColor(red: 245 / 255, green: 247 / 255, blue: 250 / 255, alpha: 1)
        overlay.isUserInteractionEnabled = false
        overlay.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(overlay)
        NSLayoutConstraint.activate([
            overlay.topAnchor.constraint(equalTo: view.topAnchor),
            overlay.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            overlay.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            overlay.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])

        if let image = UIImage(named: "SplashLogo") {
            let logo = UIImageView(image: image)
            logo.contentMode = .scaleAspectFit
            logo.translatesAutoresizingMaskIntoConstraints = false
            overlay.addSubview(logo)
            NSLayoutConstraint.activate([
                logo.widthAnchor.constraint(equalToConstant: 340),
                logo.heightAnchor.constraint(equalToConstant: 340),
                logo.centerXAnchor.constraint(equalTo: overlay.centerXAnchor),
                logo.centerYAnchor.constraint(equalTo: overlay.centerYAnchor)
            ])
        }
        splashOverlay = overlay

        // isLoading turns false when the first page (and its images) has
        // loaded; by then Ember has rendered it. The timer is a safety net in
        // case that change is never observed.
        loadingObservation = webView.observe(\.isLoading, options: [.new]) { [weak self] webView, _ in
            guard !webView.isLoading else { return }
            DispatchQueue.main.async { self?.hideSplashOverlay() }
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 5) { [weak self] in
            self?.hideSplashOverlay()
        }
    }

    private func hideSplashOverlay() {
        loadingObservation = nil
        guard let overlay = splashOverlay else { return }
        splashOverlay = nil
        UIView.animate(withDuration: 0.25, animations: {
            overlay.alpha = 0
        }, completion: { _ in
            overlay.removeFromSuperview()
        })
    }
}
