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
    override func capacitorDidLoad() {
        webView?.allowsBackForwardNavigationGestures = true
    }
}
