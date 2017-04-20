export default ({ appString }) => {
    return `<DOCTYPE html>
        <html>
        <head></head>
        <body>
            <div id='mount'>${appString}</div>
            <script src='assets/bundle.js'>
            </script>
        </body>
        </html>
    `;
}



