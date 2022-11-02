/**
 * Cookie Notice JS
 * @author Alessandro Benoit
 */
;
(function () {

    "use strict";

    /**
     * Store current instance
     */
    var instance;

    /**
     * Defaults values
     * @type object
     */
    var defaults = {
        'message': 'This site uses cookies from Google to deliver its services, to personalise ads and to analyse traffic. Information about your use of this site is shared with Google. By using this site, you agree to its use of cookies.',
       
        'cookieNoticePosition': 'bottom',

        'learnMoreLinkEnabled': true,

        'learnMoreLinkHref': 'https://policies.google.com/privacy',

        'learnMoreLinkText': 'Learn more',

        'buttonText': 'Ok',

        'expiresIn': 30,
        'buttonBgColor': '#d35400',
        'buttonTextColor': '#fff',
        'noticeBgColor': '#000',
        'noticeTextColor': '#fff',
        'linkColor': '#009fdd'
    };

    /**
     * Initialize cookie notice on DOMContentLoaded
     * if not already initialized with alt params
     */
    document.addEventListener('DOMContentLoaded', function () {
        if (!instance) {
            new cookieNoticeJS();
        }
    });

    /**
     * Constructor
     */
    window.cookieNoticeJS = function () {

        // If an instance is already set stop here
        if (instance !== undefined) {
            return;
        }

        // Set current instance
        instance = this;

        // If cookies are not supported or notice cookie is already set
        if (!testCookie() || getNoticeCookie()) {
            return;
        }

        // Extend default params
        var params = extendDefaults(defaults, arguments[0] || {});

        // Get current locale for notice text
        var noticeText = params.message;

        // Create bottom bar containing notice.
        var noticeWrapper = createNoticeWrapper('black','bottom');
        document.body.appendChild(noticeWrapper);

        // Create notice
        var notice = createNotice(noticeText, params.noticeBgColor, params.noticeTextColor, params.cookieNoticePosition);

        var learnMoreLink;

        if (params.learnMoreLinkEnabled) {
            var learnMoreLinkText = params.learnMoreLinkText;

            learnMoreLink = createLearnMoreLink(learnMoreLinkText, params.learnMoreLinkHref, params.linkColor);
        }

        // Get current locale for button text
        var buttonText = params.buttonText;

        // Create dismiss button
        var dismissButton = createDismissButton(buttonText, params.buttonBgColor, params.buttonTextColor);

        // Dismiss button click event
        dismissButton.addEventListener('click', function (e) {
            e.preventDefault();
            setDismissNoticeCookie(parseInt(params.expiresIn + "", 10) * 60 * 1000 * 60 * 24);
            fadeElementOut(noticeWrapper);
        });

        
        var noticeDomElement = noticeWrapper.appendChild(notice);

        if (!!learnMoreLink) {
            noticeDomElement.appendChild(learnMoreLink);
        }

        noticeDomElement.appendChild(dismissButton);

        fadeElementIn(noticeWrapper);
    
    };

    /**
     * Test if cookies are enabled
     * @returns {boolean}
     */
    function testCookie() {
        document.cookie = 'cookieConsent=1';
        return document.cookie.indexOf('cookieConsent') != -1;
    }

    /**
     * Test if notice cookie is there
     * @returns {boolean}
     */
    function getNoticeCookie() {
        return document.cookie.indexOf('cookie_notice') != -1;
    }

    function createNoticeWrapper(bgColor, position) {
        
        var noticeWrapper = document.createElement('div'),
        noticeWrapperStyle = noticeWrapper.style;

        noticeWrapper.setAttribute('id', 'cookieNoticeWrapper');

        noticeWrapperStyle.position = 'fixed';

        if (position === 'top') {
            noticeWrapperStyle.top = '0';
        } else {
            noticeWrapperStyle.bottom = '0';
        }

        noticeWrapperStyle.left = '0';
        noticeWrapperStyle.right = '0';
        noticeWrapperStyle.background = bgColor;
        noticeWrapperStyle["z-index"] = '999';
        noticeWrapperStyle.width = "100%";
        noticeWrapperStyle.opacity = "0";
        return noticeWrapper;
    }


    /**
     * Create notice
     * @param message
     * @param bgColor
     * @param textColor
     * @param position
     * @returns {HTMLElement}
     */
    function createNotice(message, bgColor, textColor, position) {
        
        var notice = document.createElement('div'),
            noticeStyle = notice.style;

        notice.innerHTML = message + '&nbsp;';
        notice.setAttribute('id', 'cookieNotice');
        noticeStyle.background = bgColor;
        noticeStyle.color = textColor;
        noticeStyle.padding = '20px';
        noticeStyle["text-align"] = 'center';
        noticeStyle["font-size"] = "12px";
        noticeStyle["line-height"] = "28px";
        noticeStyle.fontFamily = 'Helvetica neue, Helvetica, sans-serif';
        noticeStyle.margin = "auto";
        noticeStyle["max-width"] = "600px";
        return notice;
    }

    /**
     * Create dismiss button
     * @param message
     * @param buttonColor
     * @param buttonTextColor
     * @returns {HTMLElement}
     */
    function createDismissButton(message, buttonColor, buttonTextColor) {

        var dismissButton = document.createElement('a'),
            dismissButtonStyle = dismissButton.style;

        // Dismiss button
        dismissButton.href = '#';
        dismissButton.innerHTML = message;

        dismissButton.className = 'confirm';

        // Dismiss button style
        dismissButtonStyle.background = buttonColor;
        dismissButtonStyle.color = buttonTextColor;
        dismissButtonStyle['text-decoration'] = 'none';
        dismissButtonStyle.display = 'block';
        dismissButtonStyle.padding = '0 15px';
        dismissButtonStyle.margin = 'auto';
        dismissButtonStyle.width = '30px';
        dismissButtonStyle["margin-top"] = '10px';

        return dismissButton;

    }

    /**
     * Create dismiss button
     * @param learnMoreLinkText
     * @param learnMoreLinkHref
     * @param linkColor
     * @returns {HTMLElement}
     */
    function createLearnMoreLink(learnMoreLinkText, learnMoreLinkHref, linkColor) {

        var learnMoreLink = document.createElement('a'),
            learnMoreLinkStyle = learnMoreLink.style;

        // Dismiss button
        learnMoreLink.href = learnMoreLinkHref;
        learnMoreLink.textContent = learnMoreLinkText;
        learnMoreLink.target = '_blank';
        learnMoreLink.className = 'learn-more';

        // Dismiss button style
        learnMoreLinkStyle.color = linkColor;
        learnMoreLinkStyle['text-decoration'] = 'none';
        learnMoreLinkStyle.display = 'inline';

        return learnMoreLink;

    }

    /**
     * Set sismiss notice cookie
     * @param expireIn
     */
    function setDismissNoticeCookie(expireIn) {
        var now = new Date(),
            cookieExpire = new Date();

        cookieExpire.setTime(now.getTime() + expireIn);
        document.cookie = "cookie_notice=1; expires=" + cookieExpire.toUTCString() + "; path=/;";
    }

    /**
     * Fade a given element out
     * @param element
     */
    function fadeElementOut(element) {
        element.style.opacity = 1;
        (function fade() {
            (element.style.opacity -= .1) < 0.01 ? element.parentNode.removeChild(element) : setTimeout(fade, 40)
        })();
    }

    function fadeElementIn(element) {
        var op = 0.1;  // initial opacity
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 10);
    }

    /**
     * Utility method to extend defaults with user options
     * @param source
     * @param properties
     * @returns {*}
     */
    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                if (typeof source[property] === 'object') {
                    source[property] = extendDefaults(source[property], properties[property]);
                } else {
                    source[property] = properties[property];
                }
            }
        }
        return source;
    }

    /* test-code */
    cookieNoticeJS.extendDefaults = extendDefaults;
    cookieNoticeJS.clearInstance = function () {
        instance = undefined;
    };
    /* end-test-code */

}());
