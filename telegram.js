


var mysql= require('mysql');
var telegram = require('node-telegram-bot-api');



const myteltoken = '6760652027:AAHWamIAZIM0s3ITzb-uTOsVVfGm6n3uacM';
const bot = new telegram(myteltoken, {polling: true});

   
  bot.on('message', (msg) => {
    const chatId = msg.chat.id;


    const message = msg.text;
    const username = msg.chat.username;
    const full_name = msg.chat.first_name + msg.chat.last_name;

    console.log(message);
    res1='سلام من ربات آزمایشی هستم، چطور میتوانم کمکتان بکنم؟ ❤️';

    if (message=='سلام' || message=='چطوری'){
        res1='سلام، حالت چطوره؟ 🌹';

    }

    if (message=='خوبی؟' || message=='چطوری؟'){
      res1='من خوبم، حالت خودت چطوره؟ 🌹';

  }
    

    if (message.search('سلام')>-1 || message.search('چطوری')>-1){
        res1='سلام، حال خودت چطوره؟ 🌹';

    }


    if (message.search('قیمت')>-1 && (message.search('asus')>-1 || message.search('ایسوس')>-1 )){
        res1='قیمت این مدل از لپ تاپ ایسوس ما 42.000.000 تومان هست❤️';

    }


    if (message=='بای' || message=='خداحافظ'){
        res1='ممنون که از خدمات ما استفاده کردید، به امید دیدار مجدد 😍';
        
    }



    // var img = 'http://aiolearn.com/nima.jpg'
    // bot.sendPhoto(chatId,img);
   
    bot.sendMessage(chatId, res1);
  });



return;



var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'telegram'
})


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");


    // اضافه کردن به دیتابیس

    // var sql = "INSERT INTO user1 (username,password) values ('test3','test4')";

    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("1 record inserted");
    // });


    // خواندن از دیتا بیس

    // var sql = "select * from user1;";

    // con.query(sql, function (err, result , fields) {
    //   if (err) throw err;
    //   console.log(result[0].username);
    // });

    

    // به روز رسانی دیتا بیس

    var sql = "update user1 set password='12345' where username='test1'";

    con.query(sql, function (err, result , fields) {
      if (err) throw err;
      console.log(result);
    });




  });