function getInfo() {
    let obj = {

    }
    /**
     * 这个函数是用来获取当前页面的所有祖先页面的域名，并将它们存储在一个数组中。如果无法获取祖先页面的域名，则返回-1。
     */
    x = function() {
        var e = [];
        try {
            for (var b = 0; b < window.location.ancestorOrigins.length; b++)
                e.push(E(window.location.ancestorOrigins[b]))
        } catch (d) {
            return -1
        }
        return e
    }();
    obj.locationAncestorOrigins = x;
    /**
     * 这个函数是用来获取Chrome浏览器的性能指标数据的。具体来说，它会检查浏览器是否为Chrome浏览器，并且是否存在chrome.csi函数。如果是，它将调用该函数获取性能指标数据，并将其存储在一个数组中返回。
     * 这些指标数据包括页面加载的开始时间、页面加载完成的时间、页面总共加载的时间以及传输时间。这些指标数据可以用于分析和优化网站性能。
     */
    x = function() {
        if (!window.chrome || !window.chrome.csi)
            return "";
        var e = window.chrome.csi(),
            b = [];
        b.push(e.startE);
        b.push(e.onLoadT);
        b.push(e.pageT);
        b.push(e.tran);
        return b
    }();
    obj.chromeCSi = x;
    /**
         * 这个函数是用来获取Chrome浏览器加载网页的性能数据的。它会判断当前浏览器是否为Chrome浏览器，并且是否支持loadTimes()方法。如果支持，就会获取一系列的性能数据
         * - commitLoadTime: 提交加载时间
- connectionInfo: 连接信息
- finishDocumentLoadTime: 完成文档加载时间
- finishLoadTime: 完成加载时间
- firstPaintAfterLoadTime: 加载后首次绘制时间
- firstPaintTime: 首次绘制时间
- navigationType: 导航类型 
    1. "typed" - 用户直接在地址栏输入网址或使用书签等方式访问页面。
    2. "auto_bookmark" - 用户通过浏览器的书签栏访问页面。
    3. "auto_subframe" - 页面是通过其他页面的 iframe 或框架加载的。
    4. "manual_subframe" - 用户手动点击链接或执行 JavaScript 代码加载的子框架。
    5. "generated" - 页面是通过 JavaScript 代码或浏览器插件生成的。
    6. "reload" - 用户通过刷新页面或重新加载页面来访问页面。
- npnNegotiatedProtocol: NPN协议
- requestTime: 请求时间
- startLoadTime: 开始加载时间
- wasAlternateProtocolAvailable: 是否使用备用协议
- wasFetchedViaSpdy: 是否使用SPDY协议
- wasNpnNegotiated: 是否使用NPN协议

         */
    x = function() {
        if (!window.chrome || !window.chrome.loadTimes)
            return "";
        var e = window.chrome.loadTimes(),
            b = [];
        b.push(e.commitLoadTime);
        b.push(e.connectionInfo);
        b.push(e.finishDocumentLoadTime);
        b.push(e.finishLoadTime);
        b.push(e.firstPaintAfterLoadTime);
        b.push(e.firstPaintTime);
        b.push(e.navigationType);
        b.push(e.npnNegotiatedProtocol);
        b.push(e.requestTime);
        b.push(e.startLoadTime);
        b.push(e.wasAlternateProtocolAvailable);
        b.push(e.wasFetchedViaSpdy);
        b.push(e.wasNpnNegotiated);
        return b
    }();
    obj.chromeLoad = x;
    /**
     * 这个函数定义了一个变量x，它的值是一个立即执行函数的返回值。这个函数首先检查全局变量F的属性lite是否存在，如果存在则返回-2。
     * 接着，它调用一个函数K()，并记录下调用前后的时间差，最后返回时间差的值（保留两位小数）。如果在调用K()时发生异常，则返回-1。函数的目的可能是用于性能测试或计时。
     */
    x = function() {
        try {

            var e = K();
            // 控制台输出10000个空格
            console.log("        ".repeat(1E4));
            return Math.round(100 * (K() - e)) / 100
        } catch (b) {
            return -1
        }
    }();
    obj.performanceTesting = x;
    /**
     * 这个函数的目的是为了获取当前代码执行的堆栈信息。返回值代表了堆栈信息字符串，其中包含了当前函数的调用栈、文件名、行号等信息，可以用于调试和错误追踪。
     */
    x = function() {
        try {
            null[0]()
        } catch (b) {
            var e = b
        }
        return e.stack
    }();
    obj.eStack = x;
    /**
         * 这个函数主要是用于判断当前页面是否被自动化测试工具所控制。它通过检查一些特定的全局变量、方法、属性和元素来判断当前页面是否被以下自动化测试工具所控制：

- Electron 的 ipcRenderer
- PhantomJS 或 CasperJS
- Phantomas
- Node.js 的 Buffer
- Zombie.js 的 emit 和 spawn
- Selenium WebDriver 的相关属性和方法
- Chrome Extension 的 domAutomation 和 domAutomationController
- Selenium IDE Recorder
- Selenium 的脚本函数
- 其他一些特定的全局变量和元素

重点判断了当前页面是否被自动化测试工具所控制
 1：存在"_phantom"或"callPhantom"属性
- 2：存在"__phantomas"属性
- 3：存在"Buffer"属性
- 4：存在"emit"属性
- 5：存在"spawn"属性
- 6：存在"webdriver"属性，且其值为true
- 7：存在"domAutomation"属性
- 8：存在document.documentElement的"webdriver"属性
- 9：存在"_Selenium_IDE_Recorder"属性
- 10：存在document的"__webdriver_script_fn"属性
- 11：存在特定的属性（"_phantom"、"__nightmare"、"_selenium"、"callPhantom"、"callSelenium"、"_Selenium_IDE_Recorder"、"__stopAllTimers"）
- 12：存在特定的属性（"__webdriver_evaluate"、"__selenium_evaluate"、"__webdriver_script_function"、"__webdriver_script_func"、"__webdriver_script_fn"、"__fxdriver_evaluate"、"__driver_unwrapped"、"__webdriver_unwrapped"、"__driver_evaluate"、"__selenium_unwrapped"、"__fxdriver_unwrapped"）
- 13：存在特定的属性（以"$[a-z]dc_"开头的属性，且其值有"cache_"属性）
- 14：存在特定的字符串（"Sequentum"）在window.external.toString()中
- 15：存在document.documentElement的"selenium"属性
- 16：存在document.documentElement的"driver"属性
- 17：document.documentElement的"selenium"属性不为null
- 18：document.documentElement的"webdriver"属性不为null
- 19：document.documentElement的"driver"属性不为null
- 20：存在ipcRenderer属性
- 21：存在domAutomationController属性
- 22：存在_WEBDRIVER_ELEM_CACHE属性
         */
    x = function() {
        try {
            if ("undefined" !== typeof ipcRenderer)
                return 20;
            if ("_phantom" in window || "callPhantom" in window)
                return 1;
            if ("__phantomas" in window)
                return 2;
            if ("Buffer" in window)
                return 3;
            if ("emit" in window)
                return 4;
            if ("spawn" in window)
                return 5;
            if ("webdriver" in window.clientInformation && window.clientInformation.webdriver || "webdriver" in window && window.webdriver || "webdriver" in window.navigator && window.navigator.webdriver)
                return 6;
            if ("domAutomation" in window)
                return 7;
            if ("domAutomationController" in window)
                return 21;
            if ("_WEBDRIVER_ELEM_CACHE" in window)
                return 22;
            try {
                if (window.document.documentElement.getAttribute("webdriver"))
                    return 8
            } catch (l) {}
            if ("_Selenium_IDE_Recorder" in window)
                return 9;
            if ("__webdriver_script_fn" in document)
                return 10;
            try {
                var e = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                    b = "_phantom __nightmare _selenium callPhantom callSelenium _Selenium_IDE_Recorder __stopAllTimers".split(" "),
                    d;
                for (d in b)
                    if (window[b[d]])
                        return 11;
                for (var g in e)
                    if (window.document[e[g]])
                        return 12;
                for (var h in window.document)
                    if (h.match(/\$[a-z]dc_/) && window.document[h].cache_)
                        return 13
            } catch (l) {}
            return window.external && window.external.toString() && -1 != window.external.toString().indexOf("Sequentum") ? 14 : window.document.documentElement.getAttribute("selenium") ? 15 : window.document.documentElement.getAttribute("driver") ? 16 : null !== document.documentElement.getAttribute("selenium") ? 17 : null !== document.documentElement.getAttribute("webdriver") ? 18 : null !== document.documentElement.getAttribute("driver") ? 19 : 0
        } catch (l) {
            return -1
        }
    }();
    obj.AutomatedTestingTools = x;
    /**
     * 这个函数尝试检查浏览器是否支持Web SQL数据库和本地存储，并返回一个值，表示是否支持这些功能。如果浏览器支持这些功能，则返回0，否则返回1。
     */
    x = function() {
        try {
            window.openDatabase(null, null, null, null)
        } catch (e) {
            return 1
        }
        try {
            window.localStorage.setItem("test", "1"),
                window.localStorage.removeItem("test")
        } catch (e) {
            return 1
        }
        return 0
    }();
    obj.isSqlOrLocal = x;
    //      /**
    //  * 这个函数将浏览器的客户端信息、文档信息、导航器信息和文档元素样式信息拼接成一个字符串，并对该字符串进行哈希处理，最终返回一个哈希值。该哈希值用于识别浏览器的唯一标识符
    //  */
    //      x = function() {
    //         function e(b, d) {
    //             try {
    //                 var g = "", h;
    //                 for (h in b)
    //                     g += h,
    //                     d && null != b[h] && null != b[h].toString && (g += b[h].toString());
    //                 return g
    //             } catch (l) {
    //                 return ""
    //             }
    //         }
    //         return fa(e(window.clientInformation, !1) + e(document, !1) + e(navigator, !1) + e(document.documentElement.style, !1))
    //     }();
    /**
         * 这个函数的作用是检测浏览器支持的 JavaScript 版本，并返回一个表示支持版本的数字。具体来说，它创建了一系列带有不同 JavaScript 版本的脚本元素，并在每个脚本中设置了一个全局变量 `window.adscore_jsv`，
         * 其值为当前脚本版本号。然后它从 `window.adscore_jsv` 中提取支持的最高版本号，并将其除以 10，最终返回一个表示支持版本的数字。

返回的参数代表浏览器支持的 JavaScript 版本，例如返回值为 1.5 表示浏览器支持 JavaScript 1.5 版本。
         */
    x = function() {
        try {
            var e = document.getElementsByTagName("body")[0] ? document.getElementsByTagName("body")[0] : document.getElementsByTagName("script")[0];
            window.adscore_jsv = 0;
            for (var b = 11; 25 >= b; b++) {
                var d = document.createElement("script");
                d.setAttribute("language", "javascript" + (b / 10).toString());
                d.text = "if (window.adscore_jsv<" + b + ") window.adscore_jsv=" + b + ";";
                e.appendChild(d);
                e.removeChild(d)
            }
        } catch (g) {
            return ""
        }
        e = window.adscore_jsv / 10;
        try {
            delete window.adscore_jsv
        } catch (g) {}
        return e
    }();
    obj.jsVersion = x;
    /**
     * 这个函数用于检测浏览器是否支持字体，以判断是否使用了机器人或代理。它创建了一个隐藏的div元素和一个span元素，将span元素添加到div元素中，并将div元素添加到html元素中。然后，它遍历一些常用的字体，将span元素的字体设置为当前字体，获取span元素的宽度和高度，并将它们作为字符串添加到一个数组中。
     * 最后，它从html元素中移除了div元素，并返回一个包含字符串的数组，每个字符串表示一个字体的宽度和高度，用逗号分隔。如果函数执行失败，它会返回-1。
     */
    x = function() {
        try {
            if (!document.getElementsByTagName("html")[0])
                return "";
            var e = document.getElementsByTagName("html")[0],
                b = document.createElement("div"),
                d = document.createElement("span");
            b.setAttribute("style", "font-size:128px;position:absolute;left:-9999px;top:-9999px;margin:0;padding:0;border:0;vertical-align: baseline;display:block;");
            d.innerText = "mmmMMMmmmlllmmmLLL!@#$% www.Adscore.com bot and proxy detection service ^*()\u00c6\u2019mmmiiimmmIIImmmwwwmmmWWW";
            b.appendChild(d);
            e.appendChild(b);
            for (var g = "Noto Sans Noto Sans ;Apple Symbols;Noto Sans Myanmar;Noto Sans Modi;Noto Sans Runic;Noto Sans Duployan;Noto Sans Caucasian Albanian;Euphemia UCAS;Euphemia UCAS Italic;Mistral;BiauKai".split(";"), h = [], l = 0; l < g.length; l++)
                d.style.fontFamily = g[l],
                h.push(d.offsetWidth + "," + d.offsetHeight);
            b.removeChild(d);
            e.removeChild(b);
            return h
        } catch (v) {
            return -1
        }
    }();
    obj.fontSizeWh = x;
    /**
         * 这个函数返回一个包含设备的各种属性和特征的数组，包括设备的最小宽度和高度、指针类型、悬停类型、色域、动态范围和显示模式等。
         * 该函数的目的是获取设备的属性和特征，以便根据这些属性和特征来进行适当的响应式设计和开发
         * 
该函数的返回项分别代表以下内容：

1. 设备最小宽度（以厘米为单位）
2. 设备最小高度（以厘米为单位）
3. 设备最小宽度（以像素为单位）
4. 设备最小高度（以像素为单位）
5. 指针类型（0为未知，1为粗糙，2为精细）
6. 悬停类型（0为未知，1为无悬停，2为有悬停）
7. 颜色空间（0为未知，1为rec2020，2为p3，3为srgb）
8. 动态范围（0为未知，1为高，2为标准）
9. 显示模式（0为未知，1为全屏，2为独立应用，3为最小化界面，4为窗口控件覆盖，5为浏览器）
         */
    x = function() {
        try {
            function e(d, g = "px", h = 1E4, l = 2E3) {
                for (; 1 < l;)
                    window.matchMedia("(" + d + ": " + (h + 1) + g + ")").matches ? (h += l,
                        l = Math.floor(l / 2)) : h -= l;
                return h
            }

            function b(d, g) {
                for (var h = 0; h < g.length; h++)
                    if (window.matchMedia("(" + d + ": " + g[h] + ")").matches)
                        return h + 1;
                return 0
            }
            return [e("min-device-width", "cm", 50, 10), e("min-device-height", "cm", 50, 10), e("min-device-width"), e("min-device-height"), b("pointer", ["coarse", "fine"]), b("hover", ["none", "hover"]), b("color-gamut", ["rec2020", "p3", "srgb"]), b("dynamic-range", ["high", "standard"]), b("display-mode", ["fullscreen", "standalone", "minimal-ui", "window-controls-overlay", "browser"])]
        } catch (e) {
            return ["", "", -1, -1, -1, -1]
        }
    }();
    obj.matchMediaObj = x;
    /**
         * 这个函数返回一个数组，数组中包含了当前浏览器支持的所有 MIME 类型及其描述。

该函数的目的是获取当前浏览器支持的 MIME 类型及其描述，并将其存储在一个数组中，以便后续使用
navigator.mimeTypes 是一个浏览器对象，它包含了浏览器支持的 MIME 类型的列表。MIME 类型是一种标准化的方式来表示文件的类型和格式，它通常用于在 Web 上传输数据和文件。
通过 navigator.mimeTypes，开发者可以检测浏览器是否支持某种特定的 MIME 类型，以便在 Web 应用程序中选择合适的数据传输方式。
         */
    x = function() {
        for (var e = [], b = 0; b < navigator.mimeTypes.length; b++)
            e.push([navigator.mimeTypes[b].type, navigator.mimeTypes[b].description]);
        return e
    }();
    obj.navigatorMimeTypes = x;

    /**
         * 这个函数返回一个数组，数组中包含了浏览器和客户端信息不一致的项。这个函数可能用于检测浏览器的兼容性或者识别浏览器的类型和版本

该函数的目的是比较浏览器的navigator对象和客户端的clientInformation对象，如果两者不一致，则将不一致的项存储在数组中返回。如果出现任何错误，则返回-2。
如果两者完全一致，则返回1。如果浏览器不支持clientInformation，则返回-1
         */
    x = function() {
        try {
            if (!window.clientInformation) {

                return -1;
            }
            var e = [],
                b;
            for (b in window.clientInformation)
                if ("object" != typeof navigator[b] && navigator[b] != window.clientInformation[b]) {
                    var d = [];
                    d.push(b);
                    d.push(navigator[b]);
                    d.push(window.clientInformation[b]);
                    e.push(d)
                }
            return 0 == e.length ? 1 : e
        } catch (g) {
            return -2
        }
    }();
    obj.clientInformation = x;
    /**
         * 这个函数获取当前页面或当前脚本的性能数据，并返回一个包含各种性能指标的数组。具体包括：

- 当前页面或脚本的 URL
- 下一跳协议
- 解码后的响应体大小
- 编码后的响应体大小
- 响应类型
- 传输大小
- 开始时间
- 连接结束时间
- 连接开始时间
- 域名解析结束时间
- 域名解析开始时间
- 持续时间
- 请求开始时间
- 响应结束时间
- 响应开始时间
- 安全连接开始时间

如果获取性能数据时出现异常，则返回一个空数组。
         */
    x = function() {
        try {
            var e = document.location.href;
            document.currentScript && "" != document.currentScript.src && (e = document.currentScript.src);
            var b = window.performance.getEntriesByName(e);
            if (0 == b.length)
                return "               ".split(" ");
            b = b[0];
            var d = [];
            d.push(e);
            d.push(b.nextHopProtocol);
            d.push(b.decodedBodySize);
            d.push(b.encodedBodySize);
            d.push(b.type);
            d.push(b.transferSize);
            d.push(b.startTime);
            d.push(b.connectEnd);
            d.push(b.connectStart);
            d.push(b.domainLookupEnd);
            d.push(b.domainLookupStart);
            d.push(b.duration);
            d.push(b.requestStart);
            d.push(b.responseEnd);
            d.push(b.responseStart);
            d.push(b.secureConnectionStart);
            return d
        } catch (g) {
            return "               ".split(" ")
        }
    }();

    obj.performanceData = x;
    /**
     * 这个函数是用来获取浏览器插件信息的。它遍历了当前浏览器所有的插件，将每个插件的名称、文件名和描述信息存储在一个二维数组中，最后返回这个二维数组。
     */
    x = function() {
        for (var e = [], b = 0; b < navigator.plugins.length; b++) {
            var d = [];
            d.push(navigator.plugins[b].name);
            d.push(navigator.plugins[b].filename);
            d.push(navigator.plugins[b].description);
            e.push(d)
        }
        return e
    }();
    obj.plugins = x;
    /**
     * 这个函数用于收集浏览器环境中的全局变量及其对应的值，并将其存储在一个数组中。返回的是一个数组，其中包含了收集到的全局变量及其对应的值。目的是用于分析浏览器环境中的变量和值，可能用于调试或其他目的。
     * 这个函数的返回值是一个数组，其中包含了三个对象的属性和值。这三个对象分别是window、document和navigator。函数通过遍历这三个对象的属性，将属性名和属性值存储在数组中。
     * 如果属性名以"_"或"$cd"开头，或者属性名长度为28，则将其存储在数组中。如果属性值的长度超过100个字符，
     * 则将其替换为"!l"。如果无法获取属性值，则将其替换为"!e"。如果函数执行过程中出现异常，则返回-1。如果F.lite属性存在，则返回-2。
     * 以"_"或"$cd"开头的属性名通常是由网站的分析工具或者其他第三方工具添加的，而长度为28的属性名通常是由网站的分析工具添加的用于跟踪用户的cookie
     */
    x = function() {
        var e = [];
        try {
            function b(d, g, h) {
                if (F.lite)
                    return -2;
                g = Object.getOwnPropertyNames(g);
                for (var l = 0; l < g.length; l++) {
                    try {
                        var v = g[l].toString()
                    } catch (A) {
                        continue
                    }
                    var y = "";
                    try {
                        y = "window" == h ? window[v].toString() : window[h][v].toString(),
                            100 < y.length && (y = "!l")
                    } catch (A) {
                        y = "!e"
                    }
                    (v.startsWith("_") || v.startsWith("$cd") || 28 == v.length) && d.push([h + "." + v, y])
                }
            }
            b(e, window, "window");
            b(e, window.document, "document");
            b(e, window.navigator, "navigator")
        } catch (b) {
            return -1
        }
        return e
    }();
    obj.AnalysisToolsObj = x;
    /**
         * 这个函数的目的是检测浏览器是否支持某些特定的属性和方法，并返回一个数字作为结果。返回的数字代表以下情况：

- 如果返回1，表示浏览器支持PluginArray对象但不支持navigator.plugins.__proto__属性。
- 如果返回2，表示浏览器支持Plugin对象但不支持navigator.plugins[0].__proto__属性。
- 如果返回3，表示浏览器支持Navigator对象但不支持navigator.__proto__属性。
- 如果返回4，表示浏览器支持window.clientInformation对象但不支持window.clientInformation.__proto__属性。
- 如果返回5，表示浏览器支持MimeTypeArray对象但不支持navigator.mimeTypes.__proto__属性。
- 如果返回6，表示浏览器支持Screen对象但不支持screen.__proto__属性。
- 如果返回0，表示浏览器支持所有属性和方法。
- 如果返回-1，表示在检测过程中出现了错误。

总之，这个函数的目的是检测浏览器是否支持某些特定的属性和方法，以便在代码中进行相应的处理。
         */
    try {
        x = PluginArray.prototype !== navigator.plugins.__proto__ ? 1 : 0 < navigator.plugins.length && Plugin.prototype !== navigator.plugins[0].__proto__ ? 2 : Navigator.prototype !== navigator.__proto__ ? 3 : window.clientInformation && Navigator.prototype !== window.clientInformation.__proto__ ? 4 : MimeTypeArray.prototype !== navigator.mimeTypes.__proto__ ? 5 : Screen.prototype !== screen.__proto__ ? 6 : 0
    } catch (e) {
        x = -1
    }
    obj.detectionBrowser = x;
    obj.typeOfGCrWeb = typeof __gCrWeb;
    obj.typeNavigatorServiceWorker = typeof navigator.serviceWorker;
    obj.documentHidden = document.hidden;
    obj.documentVisibilityState = document.visibilityState;
    obj.isTop = !(top == window);
    obj.topFramesLength = top.frames.length;
    obj.windowHistoryLength = window.history.length;
    obj.IsFullScreen = !!document.fullscreen || !!document.mozFullscreen || !!document.webkitIsFullScreen || !!document.fullScreenElement;
    obj.windowNavigatorStandalone = window.navigator.standalone;
    obj.documentReferrer = document.referrer;
    obj.documentInnerWh = document.innerWidth + '-' + document.innerHeight;
    obj.windowOuterWh = window.outerWidth + '-' + window.outerHeight;
    obj.windowInnerWh = window.innerWidth + '-' + window.innerHeight;
    obj.documentClientWh = document.documentElement.clientWidth + '-' + document.documentElement.clientHeight;
    obj.screenXY = window.screenX + '-' + window.screenY;
    obj.screenXY = window.screenX + '-' + window.screenY;
    obj.MouseEvent_WEBKIT_FORCE_AT_MOUSE_DOWN = MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN;
    obj.screen_orientation_type = screen.orientation.type;
    obj.screen = screen;
    // // - navigator.userAgent：浏览器的用户代理字符串，包含浏览器名称、版本、操作系统等信息。
    // n("navigator.userAgent");
    // // - navigator.appVersion：浏览器的版本信息，包括浏览器名称、版本、操作系统等信息。
    // n("navigator.appVersion");
    // // - navigator.appCodeName：浏览器的代码名称，通常是“Mozilla”。
    // n("navigator.appCodeName");
    // // - navigator.appMinorVersion：浏览器的次要版本号。
    // n("navigator.appMinorVersion");
    // // - navigator.product：浏览器的产品名称，通常是“Gecko”。
    // n("navigator.product");
    // // - navigator.productSub：浏览器的产品子版本号。
    // n("navigator.productSub");
    // // - navigator.vendor：浏览器的厂商名称。
    // n("navigator.vendor");
    // // - navigator.vendorSub：浏览器的厂商子版本号。
    // n("navigator.vendorSub");
    // // - navigator.buildID：浏览器的构建标识符。
    // n("navigator.buildID");
    // // - navigator.platform：浏览器所在的操作系统平台。
    // n("navigator.platform");
    // // - navigator.cpuClass：浏览器所在的CPU类别。
    // n("navigator.cpuClass");
    // // - navigator.oscpu：浏览器所在的操作系统及其版本号。
    // n("navigator.oscpu");
    // // 表示当前设备的 CPU 核心数
    // n("navigator.hardwareConcurrency");
    // // 表示当前设备支持的最大触摸点数
    // n("navigator.maxTouchPoints");
    // // 表示当前设备在 Microsoft Edge 浏览器中支持的最大触摸点数
    // n("navigator.msMaxTouchPoints");
    obj.navigator_userAgent = navigator.userAgent;
    obj.navigator_appVersion = navigator.appVersion;
    obj.navigator_appCodeName = navigator.appCodeName;
    obj.navigator_appMinorVersion = navigator.appMinorVersion;
    obj.navigator_product = navigator.product;
    obj.navigator_productSub = navigator.productSub;
    obj.navigator_vendor = navigator.vendor;
    obj.navigator_vendorSub = navigator.vendorSub;
    obj.navigator_buildID = navigator.buildID;
    obj.navigator_platform = navigator.platform;
    obj.navigator_cpuClass = navigator.cpuClass;
    obj.navigator_oscpu = navigator.oscpu;
    obj.navigator_hardwareConcurrency = navigator.hardwareConcurrency;
    obj.navigator_maxTouchPoints = navigator.maxTouchPoints;
    obj.navigator_msMaxTouchPoints = navigator.msMaxTouchPoints;
    //   // 表示当前浏览器的界面语言
    //   n("navigator.language");
    //   n("navigator.languages.toString()");
    //   n("navigator.browserLanguage");
    //   // 表示当前浏览器用户的首选语言
    //   n("navigator.userLanguage");
    //   // 表示当前操作系统的默认语言
    //   n("navigator.systemLanguage");
    //   // 表示设备是否连接到互联网
    //   n("navigator.onLine");
    //   // 表示设备的内存容量。
    //   n("navigator.deviceMemory");
    //   // 表示用户是否启用了“不跟踪”（Do Not Track）选项
    //   n("navigator.doNotTrack");
    //   // 表示用户是否启用了IE浏览器的“不跟踪”选项
    //   n("navigator.msDoNotTrack");
    //   // 表示浏览器是否启用了cookie
    //   n("navigator.cookieEnabled");
    //   // 表示设备电池的剩余电量，范围从0到1
    //   n("navigator.battery.level");
    //   // 表示设备电池是否正在充电
    //   n("navigator.battery.charging");
    obj.navigator_language = navigator.language;
    obj.navigator_languages_toString = navigator.languages.toString();
    obj.navigator_browserLanguage = navigator.browserLanguage;
    obj.navigator_userLanguage = navigator.userLanguage;
    obj.navigator_systemLanguage = navigator.systemLanguage;
    obj.navigator_onLine = navigator.onLine;
    obj.navigator_deviceMemory = navigator.deviceMemory;
    obj.navigator_doNotTrack = navigator.doNotTrack;
    obj.navigator_msDoNotTrack = navigator.msDoNotTrack;
    obj.navigator_cookieEnabled = navigator.cookieEnabled;
    if (navigator.battery) {
        obj.navigator_battery_level = navigator.battery.level;
        obj.navigator_battery_charging = navigator.battery.charging;
    }

    obj.performance_navigation_type = performance.navigation.type;
    obj.performance_navigation_redirectCount = performance.navigation.redirectCount;
    obj.isWindowOpener = window.opener == null;
    obj.window_opener = window.opener;
    if (window.opener) {
        obj.window_opener_location_href = window.opener.location.href;
        obj.window_opener_screenX = window.opener.screenX || window.opener.screenLeft;
        obj.window_opener_screenY = window.opener.screenY || window.opener.screenTop;
        obj.window_opener_innerWidth = window.opener.innerWidth;
        obj.window_opener_innerHeight = window.opener.innerHeight;
        obj.window_opener_outerWidth = window.opener.outerWidth;
        obj.window_opener_outerHeight = window.opener.outerHeight;
        obj.window_opener_offscreenBuffering = window.opener.offscreenBuffering;
    }

    obj.newDate = new Date();
    // //  (new Date).getTimezoneOffset() - 返回当前设备所在时区与UTC时间的分钟差值
    obj.getTimezoneOffset = (new Date).getTimezoneOffset();
    if (navigator.connection) {
        // // 返回当前设备的网络连接类型，如wifi、2g、3g、4g等
        // n("navigator.connection.type");
        // // 返回当前设备的有效网络连接类型，即当前网络的实际带宽状况，如slow-2g、2g、3g、4g等
        // n("navigator.connection.effectiveType");
        // // 返回当前设备所在网络连接类型的最大带宽值，单位为Mbps。
        // n("navigator.connection.downlinkMax");
        // // 返回当前设备所在网络连接类型的实际带宽值，单位为Mbps
        // n("navigator.connection.downlink");
        // // 返回当前设备所在网络连接类型的往返延迟时间，单位为ms
        // n("navigator.connection.rtt");
        // // 返回当前设备是否开启了数据节省模式，如果开启则返回true，否则返回false。
        // n("navigator.connection.saveData");
        obj.navigator_connection_type = navigator.connection.type;
        obj.navigator_connection_effectiveType = navigator.connection.effectiveType;
        obj.navigator_connection_downlinkMax = navigator.connection.downlinkMax;
        obj.navigator_connection_downlink = navigator.connection.downlink;
        obj.navigator_connection_rtt = navigator.connection.rtt;
        obj.navigator_connection_saveData = navigator.connection.saveData;
    }
    obj.window_ScriptEngineMajorVersion = n("window.ScriptEngineMajorVersion();");
    obj.window_ScriptEngineMinorVersion = n("window.ScriptEngineMinorVersion();");

    // 重定向结束时间，即最后一个重定向完成的时间
    obj.performance_timing_redirectEnd = n("performance.timing.redirectEnd");
    // ：开始请求文档的时间，即浏览器准备好使用 HTTP 请求获取文档的时间。
    obj.performance_timing_fetchStart = n("performance.timing.fetchStart");
    // 开始进行 DNS 查询的时间，即浏览器开始查询 DNS 服务器以解析域名的时间。
    obj.performance_timing_domainLookupStart = n("performance.timing.domainLookupStart");
    // 完成 DNS 查询的时间，即浏览器成功解析域名的时间。
    obj.performance_timing_domainLookupEnd = n("performance.timing.domainLookupEnd");
    // 开始建立连接的时间，即浏览器开始建立与服务器的连接的时间。
    obj.performance_timing_connectStart = n("performance.timing.connectStart");
    // 完成建立连接的时间，即浏览器成功建立与服务器的连接的时间。
    obj.performance_timing_connectEnd = n("performance.timing.connectEnd");
    // 开始建立安全连接的时间，即浏览器开始建立 SSL/TLS 安全连接的时间。
    obj.performance_timing_secureConnectionStart = n("performance.timing.secureConnectionStart");
    // 开始发送请求的时间，即浏览器开始向服务器发送请求的时间。
    obj.performance_timing_requestStart = n("performance.timing.requestStart");
    // 开始接收响应的时间，即浏览器开始接收来自服务器的响应的时间。
    obj.performance_timing_responseStart = n("performance.timing.responseStart");
    // 完成接收响应的时间，即浏览器成功接收来自服务器的响应的时间。
    obj.performance_timing_responseEnd = n("performance.timing.responseEnd");
    // 用于检查浏览器是否支持ondevicelight事件，返回字符串类型的"function"表示支持，或者"undefined"表示不支持
    obj.typeof_window_ondevicelight = n("typeof window.ondevicelight");
    // 用于检查浏览器是否支持ontouchstart事件，返回字符串类型的"function"表示支持，或者"undefined"表示不支持
    obj.typeof_document_ontouchstart = n("typeof document.ontouchstart");
    // 用于检查浏览器是否支持硬件并发，返回数字类型的表示支持的核心数，或者"undefined"表示不支持。
    obj.typeof_navigator_hardwareConcurrency = n("typeof navigator.hardwareConcurrency");
    obj.window = n("window");
    obj.navigator = n("navigator");
    //代表浏览器的详细信息，如浏览器渲染引擎、语言、硬件信息等
    obj.window_clientInformation = n("window.clientInformation");
    // 代表浏览器安装的插件信息
    obj.navigator_plugins = n("navigator.plugins");
    // 用于执行 JavaScript 代码字符串
    obj.eval = n("eval");
    //于创建动画效果的方法
    obj.animate = n("HTMLElement.prototype.animate");
    // 代表用户的屏幕信息，如分辨率、颜色深度等
    obj.screen = n("screen");
    // 用于打开新的浏览器窗口或标签页
    obj.window_open = n("window.open");
    // 代表 Brave 浏览器的信息
    obj.window_brave = n("window.brave");
    obj.window_close = n("window.close");
    // 用于安装浏览器插件的方法
    obj.window_InstallTrigger_install = n("window.InstallTrigger.install");
    // 代表当前页面是否被隐藏。
    obj.document_webkitHidden = n("document.webkitHidden");
    obj.window_console = n("window.console.log");
    obj.document_appendChild = n("document.appendChild");
    obj.document_head_appendChild = n("document.head.appendChild");
    obj.document_body_appendChild = n("document.body.appendChild");
    obj.window_mozInnerScreenY = n("window.mozInnerScreenY");
    obj.window_mozInnerScreenX = n("window.mozInnerScreenX");
    // 用于监听元素与视口的交叉状态
    obj.IntersectionObserver = n("IntersectionObserver");
    obj.window_alert = n("window.alert");
    // 代表当前浏览器环境是否是安全的
    obj.window_isSecureContext = n("window.isSecureContext");
    // 用于判断当前页面是否被隐藏
    obj.typeof_visibilityState = n("typeof document.visibilityState");
    // 用于将画布内容转换为数据 URL
    obj.HTMLCanvasElement_prototype_toDataURL = n("HTMLCanvasElement.prototype.toDataURL");


    // 返回 `undefined` 或者一个 Google 相关的对象，取决于当前页面是否加载了 Google 相关的资源
    obj.isGoogle = n("window.google");
    // 返回 `undefined` 或者一个 WebRTC 相关的对象，取决于当前浏览器是否支持 WebRTC
    obj.RTCPeerConnection = n("window.RTCPeerConnection");
    obj.mozRTCPeerConnection = n("window.mozRTCPeerConnection");
    obj.webkitRTCPeerConnection = n("window.webkitRTCPeerConnection");
    // 返回当前设备所在时区的名称例如 "Asia/Shanghai"。
    obj.resolvedOptions_timeZone = n("Intl.DateTimeFormat().resolvedOptions().timeZone");
    // 返回当前浏览器的语言代码，例如 "en-US"。
    obj.resolvedOptions_locale = n("Intl.DateTimeFormat().resolvedOptions().locale");
    // 返回一个布尔值，表示当前浏览器是否支持内置 PDF 阅读器
    obj.pdfViewerEnabled = n("navigator.pdfViewerEnabled");
    // 返回当前操作系统的架构，例如 "x86_64"。
    obj.os_architecture = n('window.external.getHostEnvironmentValue("os-architecture");');
    // 返回当前操作系统的版本号，例如 "10.0.19042"。
    obj.os_build = n('window.external.getHostEnvironmentValue("os-build");');
    // 返回当前操作系统的模式，例如 "desktop" 或 "tablet"。
    obj.os_mode = n('window.external.getHostEnvironmentValue("os-mode");');
    // 返回当前操作系统的 SKU（Stock Keeping Unit），例如 "Pro" 或 "Enterprise".
    obj.os_sku = n('window.external.getHostEnvironmentValue("os-sku");');
    //返回当前页面的标题文本
    obj.title_innerText = n('document.getElementsByTagName("title")[0].innerText');
    // window.opener.innerWidth


    /**
     * 这段代码使用了 try-catch 语句来检测当前环境是否支持 TouchEvent，如果支持，则将变量 x 的值设置为 1，否则将其设置为 0。
     * 这个函数没有返回值，它的目的是检测当前环境是否支持 TouchEvent，以便在后续代码中根据环境的不同采取不同的操作。
     * TouchEvent是用于处理触摸屏幕的事件的API。它允许开发人员在移动设备上创建交互式应用程序和网站，以便用户可以使用手指或手笔进行操作。
     */
    try {
        document.createEvent("TouchEvent");
        x = 1;
    } catch (e) {
        x = 0
    }


    obj.isTouchEvent = x;
    /**
         * 这个函数用于获取用户的设备信息，返回值为一个数组，包含三个元素：

1. 第一个元素表示用户是否使用移动设备，如果是移动设备则为1，否则为0；
2. 第二个元素表示用户的操作系统平台；
3. 第三个元素为一个数组，包含用户设备的品牌和版本信息。如果无法获取设备信息，则返回值为[-2, -2, -2]，如果用户设备不支持navigator.userAgentData，则返回值为[-1, -1, -1]。
         */
    // userAgentData
    x = function() {
        try {
            if (!navigator.userAgentData)
                return [-1, -1, -1];
            var e = navigator.userAgentData,
                b = [],
                d;
            for (d in e.brands) {
                var g = [];
                g.push(e.brands[d].brand);
                g.push(e.brands[d].version);
                b.push(g)
            }
            return [e.mobile ? 1 : 0, e.platform, b]
        } catch (h) {
            return [-2, -2, -2]
        }
    }();
    obj.isUserAgentData = x;
    // 这个函数会返回文档根元素（即<html>标签）的矩形区域的左、上、右、下、x和y坐标值。其中，E是一个将数字转换为字符串的函数。
    x = function() {
        var e = document.documentElement.getBoundingClientRect(),
            b = [];
        b.push(E(e.left));
        b.push(E(e.top));
        b.push(E(e.right));
        b.push(E(e.bottom));
        b.push(E(e.x));
        b.push(E(e.y));
        return b
    }();
    obj.document_body_xy = x;
    /**
     * 这个函数是用来获取 WebGL 相关信息的，包括浏览器版本、着色语言版本、厂商、渲染器、以及未经过掩码处理的渲染器和厂商信息。
     * 如果浏览器支持 WEBGL_debug_renderer_info 扩展，则还会返回渲染器性能测试结果。函数返回一个数组，包含以上信息。如果出现异常，则返回空字符串。
     */
    x = function() {
        try {
            if (0 == Ga)
                return "";
            var e = Ga,
                b = [],
                d = e.getExtension("WEBGL_debug_renderer_info");
            b.push(E(e.getParameter(e.VERSION)));
            b.push(E(e.getParameter(e.SHADING_LANGUAGE_VERSION)));
            b.push(E(e.getParameter(e.VENDOR)));
            b.push(E(e.getParameter(e.RENDERER)));
            if (d) {
                b.push(E(e.getParameter(d.UNMASKED_RENDERER_WEBGL)));
                b.push(E(e.getParameter(d.UNMASKED_VENDOR_WEBGL)));
                for (var g = performance.now(), h = 0; 5 > performance.now() - g;)
                    e.getParameter(d.UNMASKED_RENDERER_WEBGL),
                    e.getParameter(d.UNMASKED_RENDERER_WEBGL),
                    e.getParameter(d.UNMASKED_RENDERER_WEBGL),
                    e.getParameter(d.UNMASKED_RENDERER_WEBGL),
                    e.getParameter(d.UNMASKED_RENDERER_WEBGL),
                    e.getParameter(d.UNMASKED_RENDERER_WEBGL),
                    e.getParameter(d.UNMASKED_RENDERER_WEBGL),
                    e.getParameter(d.UNMASKED_RENDERER_WEBGL),
                    e.getParameter(d.UNMASKED_RENDERER_WEBGL),
                    e.getParameter(d.UNMASKED_RENDERER_WEBGL),
                    h += 10;
                g = performance.now() - g;
                b.push(Math.round(h / g))
            } else
                b.push(""),
                b.push(""),
                b.push("");
            return b
        } catch (l) {
            return ""
        }
    }();
    obj.WEBGL_debug_renderer_info = x;
    /**
     * 这个函数是用来生成浏览器指纹的。它会返回一个包含三个元素的数组，分别是浏览器指纹的三个部分。具体来说，第一个元素是一个8位字符串，第二个和第三个元素是两个经过处理的canvas图像的base64编码字符串。
     * 这个函数并不是用来判断是否为机器人的，它是用来生成一个包含字体信息的数组。这个数组可以用于防止字体指纹攻击，因为不同的操作系统和浏览器可能会渲染相同的字体不同，从而产生不同的字体指纹。
     * 生成的数组可以用于比较用户在不同设备上的字体信息是否一致，从而判断是否为同一个用户。
     */
    x = function() {
        try {
            // if (F.lite)
            //     return "";
            K();
            // 字体名称
            var e = "HP Simplified;Gill Sans;Centaur;Gentium Book Basic;Urdu Typesetting;EucrosiaUPC;Swis721 Blk BT;Century Schoolbook;Arabic Transparent;Segoe UI Semilight;Vani;Adobe Hebrew;Book Antiqua;Dotum;Copperplate Gothic Light;American Typewriter;Corsiva Hebrew;Gloucester MT Extra Condensed;Lucida Sans Typewriter;Nueva Std Cond;Cooper Black;Calibri Light;DejaVu Serif Condensed;Myriad Pro Cond;Estrangelo Edessa;".split(";"),
                b = document.createElement("canvas");
            b.width = 200;
            b.height = 200;
            var d = b.getContext("2d", {
                desynchronized: !0
            });
            d.beginPath();
            d.rect(0, 0, 200, 200);
            d.fillStyle = "black";
            d.fill();
            var g = b.toDataURL();
            d.beginPath();
            d.rect(0, 0, 200, 200);
            d.fillStyle = "white";
            d.fill();
            var h = b.toDataURL(),
                l = d.createLinearGradient(0, 0, 200, 0);
            l.addColorStop(0, "blue");
            l.addColorStop(1, "white");
            d.fillStyle = l;
            d.fillRect(0, 0, 200, 200);
            d.rotate(1 * Math.PI / 180);
            d.font = "14px 'Arial'";
            d.textBaseline = "alphabetic";
            d.fillStyle = "#f60";
            d.fillRect(0, 15, 200, 15);
            d.beginPath();
            d.moveTo(0, 0);
            d.quadraticCurveTo(50, 150, 180, 180);
            d.bezierCurveTo(190, -40, 100, 50, 100, 50);
            d.lineTo(30, 10);
            d.lineWidth = 1;
            d.strokeStyle = "#222222";
            d.stroke();
            d.fillStyle = "#069";
            d.fillText("mmiillII,)#!>\u26c4\u26c7\u12b9\u102a\u07f7\u058e\u17d8", 2, 15);
            d.fillStyle = "rgba(102,204,0,0.7)";
            d.fillText("mmiillII,)#!>\u26c4\u26c7\u12b9\u102a\u07f7\u058e\u17d8", 4, 17);
            l = b.toDataURL();
            l = b.toDataURL();
            K();
            K();
            for (var v = 0, y = Math.min(25, e.length); v < y; v++) {
                d.font = "10px '" + e[v] + "'";
                var A = v % 255;
                var D = Math.floor(v / e.length * 255);
                var I = v % 8;
                d.fillStyle = "rgba(" + A + ", " + D + ", " + I + ", 0.5)";
                d.fillText(e[v], v % 8 * 25, 8 + v % 192)
            }
            var N = b.toDataURL();
            K();
            l = fa(l.substr(l.length - 100));
            N = fa(N.substr(N.length - 100));
            var Y = fa(g.substr(g.length - 100) + h.substr(h.length - 100)).substr(0, 8);
            e = [];
            e.push(Y);
            e.push(l);
            e.push(N);
            return e
        } catch (Q) {
            return ""
        }
    }();
    obj.specialSizeWh = x;
    /**
         * 该函数返回一个包含两个字符串的数组，第一个字符串是经过处理的 canvas 图像数据的 base64 编码，第二个字符串是由多个浏览器参数拼接而成的字符串。

这些参数包括浏览器支持的扩展、线宽和点大小范围、颜色位数、是否开启抗锯齿等等。
这个函数是用来获取浏览器的 WebGL 特性和信息的。它会创建一个 WebGL 上下文，然后获取各种 WebGL 参数和特性，最后将它们转化成一个字符串并返回。
返回的参数可以用来判断用户的浏览器是否支持 WebGL，以及浏览器的性能和能力等信息
         */
    x = function() {
        try {

            var e = "";

            function I(N) {
                b.clearColor(0, 0, 0, 1);
                b.enable(b.DEPTH_TEST);
                b.depthFunc(b.LEQUAL);
                b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT);
                return "[" + N[0] + ", " + N[1] + "]"
            }
            var b = Ga;
            if (!b)
                return null;
            var d = [],
                g = b.createBuffer();
            b.bindBuffer(b.ARRAY_BUFFER, g);
            var h = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
            b.bufferData(b.ARRAY_BUFFER, h, b.STATIC_DRAW);
            g.itemSize = 3;
            g.numItems = 3;
            var l = b.createProgram(),
                v = b.createShader(b.VERTEX_SHADER);
            b.shaderSource(v, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
            b.compileShader(v);
            var y = b.createShader(b.FRAGMENT_SHADER);
            b.shaderSource(y, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
            b.compileShader(y);
            b.attachShader(l, v);
            b.attachShader(l, y);
            b.linkProgram(l);
            b.useProgram(l);
            l.vertexPosAttrib = b.getAttribLocation(l, "attrVertex");
            l.offsetUniform = b.getUniformLocation(l, "uniformOffset");
            b.enableVertexAttribArray(l.vertexPosArray);
            b.vertexAttribPointer(l.vertexPosAttrib, g.itemSize, b.FLOAT, !1, 0, 0);
            b.uniform2f(l.offsetUniform, 1, 1);
            b.drawArrays(b.TRIANGLE_STRIP, 0, g.numItems);
            null != b.canvas && (e = fa(b.canvas.toDataURL()));
            d.push(b.getSupportedExtensions().join(";"));
            d.push(I(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE)));
            d.push(I(b.getParameter(b.ALIASED_POINT_SIZE_RANGE)));
            d.push(b.getParameter(b.ALPHA_BITS));
            d.push(b.getContextAttributes().antialias ? "yes" : "no");
            d.push(b.getParameter(b.BLUE_BITS));
            d.push(b.getParameter(b.DEPTH_BITS));
            d.push(b.getParameter(b.GREEN_BITS));
            d.push(function(N) {
                var Y, Q = N.getExtension("EXT_texture_filter_anisotropic") || N.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || N.getExtension("MOZ_EXT_texture_filter_anisotropic");
                return Q ? (Y = N.getParameter(Q.MAX_TEXTURE_MAX_ANISOTROPY_EXT),
                    0 === Y && (Y = 2),
                    Y) : null
            }(b));
            d.push(b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
            d.push(b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE));
            d.push(b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS));
            d.push(b.getParameter(b.MAX_RENDERBUFFER_SIZE));
            d.push(b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS));
            d.push(b.getParameter(b.MAX_TEXTURE_SIZE));
            d.push(b.getParameter(b.MAX_VARYING_VECTORS));
            d.push(b.getParameter(b.MAX_VERTEX_ATTRIBS));
            d.push(b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
            d.push(b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS));
            d.push(I(b.getParameter(b.MAX_VIEWPORT_DIMS)));
            d.push(b.getParameter(b.RED_BITS));
            d.push(b.getParameter(b.RENDERER));
            d.push(b.getParameter(b.SHADING_LANGUAGE_VERSION));
            d.push(b.getParameter(b.STENCIL_BITS));
            d.push(b.getParameter(b.VENDOR));
            d.push(b.getParameter(b.VERSION));
            if (b.getShaderPrecisionFormat)
                for (g = ["FLOAT", "INT"],
                    h = ["VERTEX", "FRAGMENT"],
                    l = ["HIGH", "MEDIUM", "LOW"],
                    v = 0; 1 >= v; v++)
                    for (y = 0; 1 >= y; y++)
                        for (var A = 0; 2 >= A; A++) {
                            var D = b.getShaderPrecisionFormat(b[h[y] + "_SHADER"], b[l[A] + "_" + g[v]]);
                            d.push(D.precision);
                            d.push(D.rangeMin);
                            d.push(D.rangeMax)
                        }
            D = [];
            D.push(e);
            D.push(fa(d.join(",")));
            return D
        } catch (I) {
            return ["", ""]
        }
    }();
    obj.webGl_obj = x;
    x = function() {
        var e = window.external,
            b = [];
        try {
            for (var d in e)
                b.push(d);
            var g = b
        } catch (h) {
            g = ""
        }
        return g
    }();
    obj.external = x;
    console.log('返回测试数据', obj)
    // 页面加载完成后执行
    window.onload = function() {
        // 获取textarea元素
        var editorElement = document.getElementById('jsonObj');
        
        editorElement.innerHTML = syntaxHighlight(obj);
   
        
      
      
    };

}
var tb = ['video/mp4; codecs="avc1.42E01E"', "Portable Document Format", 'video/mp4; codecs="avc1.42c00d"', "function appendChild() { [native code] }", "function RTCPeerConnection() { [native code] }", "internal-pdf-viewer", "function appendChild() {\n    [native code]\n}", "window.SecurityPolicyViolationEvent", 'video/mp4; codecs="ec-3"', "function SVGFESpecularLightingElement() { [native code] }", "[object Object]", "function ReadableByteStreamController() { [native code] }", "5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36", "org.w3.clearkey", "function SecurityPolicyViolationEvent() { [native code] }", "function IntersectionObserver() { [native code] }", "function FileSystemWritableFileStream() { [native code] }", "window.SVGFESpecularLightingElement", "window.PerformanceObserverEntryList", "function PerformanceObserverEntryList() { [native code] }", "[object Navigator]", "function SpeechRecognitionEvent() { [native code] }", "window.ReadableByteStreamController", "function SVGFESpecularLightingElement() {\n    [native code]\n}", "QpUJAAAAAAAAGu98Hdz1l_lcSZ2rY60Ajjk9U1c", "WebGL 2.0 (OpenGL ES 3.0 Chromium)", "function eval() { [native code] }", "[object PluginArray]", "WebGL GLSL ES 3.00 (OpenGL ES GLSL ES 3.0 Chromium)", "function SpeechRecognitionErrorEvent() { [native code] }", "function SpeechRecognitionAlternative() {\n    [native code]\n}", "function IntersectionObserver() {\n    [native code]\n}", "function UserMessageHandlersNamespace() {\n    [native code]\n}", "function hasFocus() { [native code] }", "com.widevine.alpha", "function SecurityPolicyViolationEvent() {\n    [native code]\n}", "function animate() { [native code] }", "2ac5f361abddfe8cab168a8a50f2a592", "window.FileSystemWritableFileStream", "function toDataURL() {\n    [native code]\n}", "cade6a68bffb2358acd5d63a141ec064", "[object Screen]", "com.apple.fps.2_0", "function alert() { [native code] }", "function open() { [native code] }", "function RTCPeerConnection() {\n    [native code]\n}", "function toDataURL() { [native code] }", "function eval() {\n    [native code]\n}", "com.apple.speech.synthesis.voice.Bells", "function log() { [native code] }"];
function syntaxHighlight(json) {
    if (typeof json != 'string') {
        json = JSON.stringify(json, undefined, 4);
    }
    json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}
function E(e) {
    return -1 < tb.indexOf(e) ? "#" + tb.indexOf(e) : 0 === e ? "0" : 1 === e ? "1" : !1 === e ? "0" : !0 === e ? "1" : e instanceof Array ? e : e && e.toString ? e.toString() : ""
}


function B(e) {
    return E(e);
}

function n(e) {
    try {
        e = eval(e)
    } catch (b) {
        e = ""
    }
    return B(E(e))
}

function K() {
    return "undefined" !== typeof performance && "undefined" !== typeof performance.now ? performance.now() : +new Date
}

function ka(a, b, c) {
    ka = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
    return ka.apply(null, arguments)
}

function la(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d)
    }
}

function ma(a, b, c) {
    a = a.split(".");
    c = c || n;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());)
        a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
}

function na(a) {
    return a
};
let oa = (new Date).getTime();

function pa(a) {
    n.setTimeout(() => {
        throw a;
    }, 0)
};

function qa(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
}

function ra(a, b) {
    let c = 0;
    a = qa(String(a)).split(".");
    b = qa(String(b)).split(".");
    const d = Math.max(a.length, b.length);
    for (let g = 0; 0 == c && g < d; g++) {
        var e = a[g] || "",
            f = b[g] || "";
        do {
            e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
            f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
            if (0 == e[0].length && 0 == f[0].length)
                break;
            c = sa(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || sa(0 == e[2].length, 0 == f[2].length) || sa(e[2], f[2]);
            e = e[3];
            f = f[3]
        } while (0 == c)
    }
    return c
}

function sa(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
};
ba = function(a, f) {
    Zb(a, 0 <= a.block_start ? a.block_start : -1, a.strstart - a.block_start, f);
    a.block_start = a.strstart;
    aa(a.strm)
}
var ta = '',
    ua = '';

function va() {
    var a = n.navigator;
    return a && (a = a.userAgent) ? a : ""
}
var wa;
const xa = n.navigator;
wa = xa ? xa.userAgentData || null : null;

function ya(a) {
    return ta ? wa ? wa.brands.some(({
        brand: b
    }) => b && -1 != b.indexOf(a)) : !1 : !1
}

function p(a) {
    return -1 != va().indexOf(a)
};

function za() {
    return ta ? !!wa && 0 < wa.brands.length : !1
}

function Aa() {
    return za() ? !1 : p("Trident") || p("MSIE")
}

function Ba() {
    return za() ? ya("Microsoft Edge") : p("Edg/")
}

function Ca() {
    !p("Safari") || Ea() || (za() ? 0 : p("Coast")) || (za() ? 0 : p("Opera")) || (za() ? 0 : p("Edge")) || Ba() || za() && ya("Opera")
}

function Ea() {
    return za() ? ya("Chromium") : (p("Chrome") || p("CriOS")) && !(za() ? 0 : p("Edge")) || p("Silk")
}

function Fa(a) {
    const b = {};
    a.forEach(c => {
        b[c[0]] = c[1]
    });
    return c => b[c.find(d => d in b)] || ""
}

function Ga() {
    var a = va();
    if (Aa()) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1])
            a = b[1];
        else {
            b = "";
            var c = /MSIE +([\d\.]+)/.exec(a);
            if (c && c[1])
                if (a = /Trident\/(\d.\d)/.exec(a),
                    "7.0" == c[1])
                    if (a && a[1])
                        switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        }
            else
                b = "7.0";
            else
                b = c[1];
            a = b
        }
        return a
    }
    c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
    b = [];
    let d;
    for (; d = c.exec(a);)
        b.push([d[1], d[2], d[3] || void 0]);
    a = Fa(b);
    return (za() ? 0 : p("Opera")) ? a(["Version", "Opera"]) : (za() ? 0 : p("Edge")) ? a(["Edge"]) : Ba() ? a(["Edg"]) : p("Silk") ? a(["Silk"]) : Ea() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
}

getInfo();
/**
 * 
 * 这个函数是用于将给定的参数转换为字符串，其中对于数组类型的参数直接返回，对于布尔类型的参数将其转换为 0 或 1 的字符串形式，对于字符串类型的参数直接返回其本身，
 * 对于数字类型的参数将其转换为对应的字符串形式，对于不符合以上类型的参数返回空字符串。
 */
function E(e) {
    return -1 < tb.indexOf(e) ? "#" + tb.indexOf(e) : 0 === e ? "0" : 1 === e ? "1" : !1 === e ? "0" : !0 === e ? "1" : e instanceof Array ? e : e && e.toString ? e.toString() : ""
}

function fa(e) {
    var b = e,
        d = b.length;
    e = [1732584193, -271733879, -1732584194, 271733878];
    var g;
    for (g = 64; g <= b.length; g += 64) {
        var h, l = b.substring(g - 64, g),
            v = [];
        for (h = 0; 64 > h; h += 4)
            v[h >> 2] = l.charCodeAt(h) + (l.charCodeAt(h + 1) << 8) + (l.charCodeAt(h + 2) << 16) + (l.charCodeAt(h + 3) << 24);
        bb(e, v)
    }
    b = b.substring(g - 64);
    h = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (g = 0; g < b.length; g++)
        h[g >> 2] |= b.charCodeAt(g) << (g % 4 << 3);
    h[g >> 2] |= 128 << (g % 4 << 3);
    if (55 < g)
        for (bb(e, h),
            g = 0; 16 > g; g++)
            h[g] = 0;
    h[14] = 8 * d;
    bb(e, h);
    for (b = 0; b < e.length; b++) {
        d = b;
        g = e[b];
        h = "";
        for (l = 0; 4 > l; l++)
            h += lb[g >> 8 * l + 4 & 15] + lb[g >> 8 * l & 15];
        e[d] = h
    }
    return e.join("")
}

function bb(e, b) {
    var d = e[0],
        g = e[1],
        h = e[2],
        l = e[3];
    d = V(d, g, h, l, b[0], 7, -680876936);
    l = V(l, d, g, h, b[1], 12, -389564586);
    h = V(h, l, d, g, b[2], 17, 606105819);
    g = V(g, h, l, d, b[3], 22, -1044525330);
    d = V(d, g, h, l, b[4], 7, -176418897);
    l = V(l, d, g, h, b[5], 12, 1200080426);
    h = V(h, l, d, g, b[6], 17, -1473231341);
    g = V(g, h, l, d, b[7], 22, -45705983);
    d = V(d, g, h, l, b[8], 7, 1770035416);
    l = V(l, d, g, h, b[9], 12, -1958414417);
    h = V(h, l, d, g, b[10], 17, -42063);
    g = V(g, h, l, d, b[11], 22, -1990404162);
    d = V(d, g, h, l, b[12], 7, 1804603682);
    l = V(l, d, g, h, b[13], 12, -40341101);
    h = V(h, l, d, g, b[14], 17, -1502002290);
    g = V(g, h, l, d, b[15], 22, 1236535329);
    d = W(d, g, h, l, b[1], 5, -165796510);
    l = W(l, d, g, h, b[6], 9, -1069501632);
    h = W(h, l, d, g, b[11], 14, 643717713);
    g = W(g, h, l, d, b[0], 20, -373897302);
    d = W(d, g, h, l, b[5], 5, -701558691);
    l = W(l, d, g, h, b[10], 9, 38016083);
    h = W(h, l, d, g, b[15], 14, -660478335);
    g = W(g, h, l, d, b[4], 20, -405537848);
    d = W(d, g, h, l, b[9], 5, 568446438);
    l = W(l, d, g, h, b[14], 9, -1019803690);
    h = W(h, l, d, g, b[3], 14, -187363961);
    g = W(g, h, l, d, b[8], 20, 1163531501);
    d = W(d, g, h, l, b[13], 5, -1444681467);
    l = W(l, d, g, h, b[2], 9, -51403784);
    h = W(h, l, d, g, b[7], 14, 1735328473);
    g = W(g, h, l, d, b[12], 20, -1926607734);
    d = P(g ^ h ^ l, d, g, b[5], 4, -378558);
    l = P(d ^ g ^ h, l, d, b[8], 11, -2022574463);
    h = P(l ^ d ^ g, h, l, b[11], 16, 1839030562);
    g = P(h ^ l ^ d, g, h, b[14], 23, -35309556);
    d = P(g ^ h ^ l, d, g, b[1], 4, -1530992060);
    l = P(d ^ g ^ h, l, d, b[4], 11, 1272893353);
    h = P(l ^ d ^ g, h, l, b[7], 16, -155497632);
    g = P(h ^ l ^ d, g, h, b[10], 23, -1094730640);
    d = P(g ^ h ^ l, d, g, b[13], 4, 681279174);
    l = P(d ^ g ^ h, l, d, b[0], 11, -358537222);
    h = P(l ^ d ^ g, h, l, b[3], 16, -722521979);
    g = P(h ^ l ^ d, g, h, b[6], 23, 76029189);
    d = P(g ^ h ^ l, d, g, b[9], 4, -640364487);
    l = P(d ^ g ^ h, l, d, b[12], 11, -421815835);
    h = P(l ^ d ^ g, h, l, b[15], 16, 530742520);
    g = P(h ^ l ^ d, g, h, b[2], 23, -995338651);
    d = X(d, g, h, l, b[0], 6, -198630844);
    l = X(l, d, g, h, b[7], 10, 1126891415);
    h = X(h, l, d, g, b[14], 15, -1416354905);
    g = X(g, h, l, d, b[5], 21, -57434055);
    d = X(d, g, h, l, b[12], 6, 1700485571);
    l = X(l, d, g, h, b[3], 10, -1894986606);
    h = X(h, l, d, g, b[10], 15, -1051523);
    g = X(g, h, l, d, b[1], 21, -2054922799);
    d = X(d, g, h, l, b[8], 6, 1873313359);
    l = X(l, d, g, h, b[15], 10, -30611744);
    h = X(h, l, d, g, b[6], 15, -1560198380);
    g = X(g, h, l, d, b[13], 21, 1309151649);
    d = X(d, g, h, l, b[4], 6, -145523070);
    l = X(l, d, g, h, b[11], 10, -1120210379);
    h = X(h, l, d, g, b[2], 15, 718787259);
    g = X(g, h, l, d, b[9], 21, -343485551);
    e[0] = d + e[0] & 4294967295;
    e[1] = g + e[1] & 4294967295;
    e[2] = h + e[2] & 4294967295;
    e[3] = l + e[3] & 4294967295
}