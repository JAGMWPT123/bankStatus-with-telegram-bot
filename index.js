const request = require('request-promise');
const cheerio = require('cheerio');
const TelegramBot = require('node-telegram-bot-api');
//const htmlparser2 = require('htmlparser2');
require('dotenv').config()

const url = 'https://greenpay.app/status/'
var bot = new TelegramBot(process.env.token,{polling:true})

bot.onText(/\/state (.+)/,(msg,match)=>{
    var chatid = msg.chat.id;
    request(url,(error,res , body)=>{
        let $ =cheerio.load(body);
        let title = $('div[class="status-card success"]').text();
        if(!error && res.statusCode ==200){
            bot.sendMessage(chatid, 'Result:\n'+ title)
        }
    })
})


// var resp = (async ()=>{
//     const response = await request(url);
    
//     let $ =cheerio.load(response);
//     let title = $('div[class="status-card success"]').text();//html/body/div[3]/div[4]/div[1]
   
//    // title.split('تطبيق بنكك بنك الخرطوم')
//     console.log(title);
// });

// resp()




























{/* <div class="status-card success">
<div class="top">
<h4>
تطبيق بنكك بنك الخرطوم<

/h4>
</div>
<div class="body">
<ul>
<li><strong>✅</strong>نسخة الاندرويد</li>
<li><strong>✅</strong>نسخة الايفون</li>
<li><strong>✅</strong>التحويل بين الحسابات</li>
<li><strong>✅</strong> شحن الرصيد زين وفواتير</li>
<li><strong>✅</strong>شحن الرصيد سوداني</li>
<li><strong>✅</strong>شحن الرصيد ام تي ان</li>
<li><strong>✅</strong>شحن الكهرباء</li>
<li><strong>❌</strong>التحويل بين البنوك</li>
<li><strong>✅</strong>التحويلات من الخارج</li>
<li><strong>❌</strong>خدمات المشتركين</li>
<li><strong>✅</strong>تغيير الجهاز</li>
</ul>
</div>
</div> */}