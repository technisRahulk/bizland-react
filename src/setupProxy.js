const proxy=require('http-proxy-middleware')

module.exports=function(app){
    app.use(
        proxy("https://contact-serverless.vercel.app/api/form",{
            target:"https://contact-serverless.vercel.app/",
            changeOrigin:true
        })
    )
}