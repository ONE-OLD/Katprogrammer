function downloadApp(appName) {
    // Replace the URL with the actual download link for your app
    const downloadLinks = {
        'app1': 'https://code.visualstudio.com/download',
        'app2': 'https://sourceforge.net/projects/orwelldevcpp/',
        'app3': 'https://developer.android.com/studio',
        'app4': 'https://developer.apple.com/xcode/',
        'app5': 'https://sourceforge.net/projects/codeblocks/',
        'app6': 'https://wampserver.aviatechno.net/',
        'app7': 'https://www.apachefriends.org/download.html',
        'app8': 'https://www.sublimetext.com/download',
        'app9': 'https://www.python.org/downloads/',
        'app10': 'https://dev.mysql.com/downloads/installer/'
    };

    const link = downloadLinks[appName];
    if (link) {
        window.location.href = link;
    } else {
        alert('Download link not available.');
    }
}
