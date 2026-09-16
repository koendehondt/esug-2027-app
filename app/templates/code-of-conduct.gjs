import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Code of Conduct"}}

  <article class="page">
    <div class="page-hero">
      <img
        src="/images/tiles/code-of-conduct.jpg"
        alt=""
        class="page-hero-image"
      />
      <LinkTo @route="index" class="page-back" aria-label="Home">
        <span class="page-back-icon">
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          ><path d="M15 6l-6 6 6 6" /></svg>
        </span>
      </LinkTo>
    </div>
    <h1>Code of Conduct</h1>

    <p>
      ESUG is a global community of developers who share information, discuss
      ideas, and work together. Everybody who participates in our community in
      one way or another is required to conform to this Code of Conduct (CoC).
      This includes online communications, meetup and conference attendees,
      speakers, sponsors, founders, moderators, organisers, and volunteers.
    </p>

    <h2 class="page-section-heading">Why do we have a Code of Conduct?</h2>
    <p>Our goals with having this Code of Conduct are:</p>
    <ul>
      <li>Helping everyone feel safe and included. Many people are new to our
        community, and some may have had poor experiences in other communities.
        We want to set the expectation that harassment and other unpleasant
        behaviour are not acceptable. If people do have an unpleasant
        experience, they'll know that's neither the norm nor acceptable to us as
        a community.</li>
      <li>Helping to build trust that if an incident is reported, we will do a
        thorough investigation, and not blame the reporter. Even, for example,
        if the incident concerns someone in a position of power.</li>
      <li>Informing everyone of the expected behaviour. We are a diverse
        community, and having a Code of Conduct makes the expectations of
        everybody's behaviour explicit and transparent.</li>
      <li>Having a framework for report handling. The Code of Conduct is the
        basis for dealing with a report, assessing whether the CoC was violated,
        and what action should be taken.</li>
    </ul>
    <p>
      The Code of Conduct isn't an exhaustive list of things that you must do,
      or can't do. Rather, take it in the spirit in which it's intended. It's a
      guide to make it easier to enrich all of us and the communities in which
      we participate, and which we represent.
    </p>
    <p>
      If you believe someone is violating the Code of Conduct, please report it.
      Contact details are listed at the end of this page. When handling a
      report, we follow our Code of Conduct Response Guide.
    </p>

    <h2 class="page-section-heading">The principles</h2>
    <ul>
      <li><strong>Be friendly and patient.</strong></li>
      <li><strong>Be welcoming.</strong>
        We strive to be a community that welcomes and supports people of all
        backgrounds and identities. This includes, but is not limited to members
        of any race, ethnicity, culture, national origin, color, immigration
        status, social and economic class, educational level, sex, sexual
        orientation, gender identity and expression, age, size, family status,
        religion, and mental and physical ability.</li>
      <li><strong>Be considerate.</strong>
        Remember that we're a world-wide community, so you might not be
        communicating in someone else's primary language.</li>
      <li><strong>Be respectful.</strong>
        Not all of us will agree all the time, but disagreement is no excuse for
        poor behavior and poor manners. We might all experience some frustration
        now and then, but we cannot allow that frustration to turn into a
        personal attack. It's important to remember that a community where
        people feel uncomfortable or threatened is not a productive one. Members
        of the ESUG community should be respectful when dealing with other
        members as well as with people outside the community.</li>
      <li><strong>Be careful in the words that you choose.</strong>
        We are a community of professionals, and we conduct ourselves
        professionally. Be kind to others. Do not insult or put down other
        participants, individually or as a group. Harassment and other
        exclusionary behavior aren't acceptable. This includes, but is not
        limited to:
        <ul>
          <li>Violent threats or language directed against another person.</li>
          <li>Discriminatory jokes and language.</li>
          <li>Posting sexually explicit or violent material.</li>
          <li>Personal insults, especially those using discriminatory terms.</li>
          <li>Inappropriate physical contact or unwelcome sexual attention.</li>
          <li>Harassing photography or recording, including taking photos of
            someone who is wearing a no photo-lanyard.</li>
          <li>Sustained disruption of talks or other events.</li>
          <li>Deliberate misgendering.</li>
          <li>Deliberate "outing" of any private aspect of a person's identity
            without their consent except as necessary to protect vulnerable
            people from intentional abuse. This includes sharing personally
            identifying information ("doxing").</li>
          <li>Knowingly making harmful false claims about a person.</li>
          <li>Pushing a person to drink alcohol when they don't want to drink,
            or deceiving someone into drinking alcohol.</li>
          <li>Harassment of others in any form. In general, if someone asks you
            to stop, then stop.</li>
          <li>Advocating for, threatening to, or encouraging, any of the above
            behavior.</li>
        </ul>
      </li>
    </ul>
    <p>
      Some events may provide alcoholic drinks. However, participants are
      expected to drink responsibly. Alcohol use or other intoxication are never
      accepted as an excuse for CoC violations.
    </p>

    <h2 class="page-section-heading">Where does the Code of Conduct apply?</h2>
    <p>
      This Code of Conduct applies to all spaces managed by ESUG. This includes:
    </p>
    <ul>
      <li>Conferences, workshops, sprints, meetups, board meetings, and other
        community events, including social events, peripheral activities, and
        shared free time when in contact with other community members</li>
      <li>Presentation materials used in talks or sessions, publications, and
        all kinds of publicly shared contents</li>
      <li>Chat channels, mailing lists, forums, news threads, and other
        collective communication channels</li>
      <li>Clouds, repositories, and other sharing services</li>
      <li>Social media posts, tags, and mentions</li>
    </ul>
    <p>Any other forums created or used by the community for communication.</p>
    <p>
      The Code of Conduct does not exclusively apply to events on an official
      agenda. For example, if after a scheduled social event you go to a bar
      with a group of fellow participants, and someone harasses you there, we
      would still treat that as a CoC violation. Similarly, harassment in chat
      platform direct messages related to ESUG can still be covered under this
      Code of Conduct.
    </p>
    <p>
      In addition, violations of this code outside our spaces may affect a
      person's ability to participate in them.
    </p>

    <h2 class="page-section-heading">Sponsors, affiliates, and exhibitors</h2>
    <p>
      When you sponsor ESUG or related event, we welcome you as a member of our
      community, and we expect you to be respectful to the community you operate
      within.
    </p>
    <p>
      All exhibitors in the expo hall, sponsor or vendor booths, or similar
      activities are also subject to the Code of Conduct. In particular,
      exhibitors should not use sexualized images, activities, or other
      material. Booth staff (including volunteers) must not use sexualized
      clothing/uniforms/costumes, or otherwise create a sexualized environment.
    </p>
    <p>
      In addition, sponsors and affiliates of conferences, meetups, and online
      activities should not employ aggressive recruiting techniques, invasive
      marketing behavior, or similar actions towards community members. In case
      of violations, sponsors might be sanctioned and expelled from the event or
      activity with no return of the sponsorship contribution.
    </p>

    <h2 class="page-section-heading">What can happen if the CoC is violated?</h2>
    <p>
      In case of a Code of Conduct violation, some of the most common actions
      organisers may take are:
    </p>
    <ul>
      <li>No action (if the board/committee determines no violation occurred).</li>
      <li>A private or public reprimand.</li>
      <li>Requiring that a public apology is made.</li>
      <li>Requiring that a participant stops their behavior.</li>
      <li>Requiring that a participant prevents further contact with certain
        other participants.</li>
      <li>Not publishing the video of a conference talk.</li>
      <li>Cancelling a conference talk.</li>
      <li>Cancelling contracts related to the event organization.</li>
      <li>Removing a participant from the conference, meetup or online space,
        without refund.</li>
    </ul>
    <p>
      The action taken is at the discretion of the Code of Conduct committee.
      Participants are expected to comply immediately, and further action may be
      taken in case a participant does not comply. A record will be kept of all
      incidents.
    </p>

    <h2 class="page-section-heading">What to do in case of violations</h2>
    <p>
      If a Code of Conduct incident happens that affects you, or if you witness
      it affecting someone else, please contact ESUG board immediately at
      <a href="mailto:board@esug.org" class="talk-link">board@esug.org</a>.
    </p>

    <h2 class="page-section-heading">Guidelines for reporting incidents</h2>
    <p>
      Please do not feel like you may be a burden to us by reporting incidents.
      Even if you happen to report multiple incidents. We rather consider
      reports an opportunity for us to act: by knowing about an incident, we can
      act on it, and often prevent it from continuing or repeating. But if we
      don't know, we can't take action.
    </p>
    <p>
      If you are not sure whether the situation was a Code of Conduct violation,
      or whether the CoC applied to that particular space, we encourage you to
      still report it. We would much rather have additional reports where we
      decide to take no action, rather than miss a report of an actual
      violation. We do not look negatively on you if we find the incident is not
      a violation. And knowing about incidents that are not violations, or
      happen outside our spaces, can also help us to improve the Code of Conduct
      or the processes surrounding it.
    </p>
    <p>In your report please include, when possible:</p>
    <ul>
      <li>Your contact info (so we can get in touch with you).</li>
      <li>Names or descriptions of anyone who was involved or who witnessed the
        incident.</li>
      <li>When and where the incident occurred. Please be as specific as
        possible.</li>
      <li>Your account of what occurred. If there is a written record (e.g.
        Discord, Slack messages) please include screenshots, or otherwise a
        link.</li>
      <li>Any extra context you believe existed for the incident.</li>
      <li>If you believe this incident is ongoing.</li>
      <li>Any other information you believe we should have.</li>
    </ul>
    <p>
      If you don't communicate all of this information at the time, please still
      make the report and include as much information as you have.
    </p>
    <p>
      If you feel unsafe reporting in person, you may choose someone to
      represent you. In this case, we'd need their contact information, but we'd
      ask you to make clear that this person represents you.
    </p>
    <p>
      When handling a report, we follow our Code of Conduct Response Guide.
    </p>
    <p>
      All reports will be kept confidential. In some cases, a public statement
      might be required (for example in a CoC transparency report following
      conferences), but these reports are anonymized and do not include any
      personally identifying information.
    </p>

    <h2 class="page-section-heading">Reports about a Code of Conduct response
      committee member</h2>
    <p>
      If your report concerns a member of the Code of Conduct committee, you can
      report the issue to any other response team member or any other organiser.
    </p>
    <p>
      If your report concerns a member of the Core Operations, which receives
      emails to conduct@writethedocs.org, you can report the issue individually
      to any of the other organisers.
    </p>

    <h2 class="page-section-heading">Credits</h2>
    <p>
      This Code of Conduct was originally based on the one of Write the Docs. It
      was originally based on the DjangoCon Europe 2018 Code of Conduct and the
      Django Project Code of Conduct, which in turn credits the original text of
      the Speak Up! project, inspired in its turn by the Fedora Project, as well
      as the Python Mentorship Project and many others. Some inspiration was
      also taken from the FreeBSD Code of Conduct.
    </p>
  </article>

  {{outlet}}
</template>
