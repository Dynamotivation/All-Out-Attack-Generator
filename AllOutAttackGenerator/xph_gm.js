function jsExecute(param){eval(param)}function jsAddCss(e){var t=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style")
a.type="text/css",a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e)),t.appendChild(a)}function jsAddJs(e){var t=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script")
a.type="text/javascript",a.innerHTML=e,t.appendChild(a)}function jsAddLibrary(e){var t=e.split(".").pop()
if("css"===t){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("link")
n.type="text/css",n.rel="stylesheet",n.href=e,a.appendChild(n)}else if("js"===t){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("script")
n.src=e,a.appendChild(n)}else console.log("Error: jsAddLibrary only accepts a file with the .css or .js extension.")}
