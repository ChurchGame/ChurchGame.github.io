async function handleHardReload(url) {
	await new Promise(r => setTimeout(r, 3000));
    await fetch(url, {
        headers: {
            Pragma: 'no-cache',
            Expires: '-1',
            'Cache-Control': 'no-cache',
        },
    });
    window.location.href = url;
    // This is to ensure reload with url's having '#'
    window.location.reload();
}

handleHardReload(window.location.href)