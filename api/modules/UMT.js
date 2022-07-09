const rp = require('request');
const cheerio = require('cheerio');
const Promise = require('bluebird');
const BASE_URL = process.env.BASE_URL || "https://mynemo.umt.edu.my";
let login_url = BASE_URL;

let url_list = {
    HomePage : `https://pelajar.mynemo.umt.edu.my/index.php`,
    academic : `https://pelajar.mynemo.umt.edu.my/index.php?module=akademik`,
    courseRegistered : `https://pelajar.mynemo.umt.edu.my/index.php?module=akademik&app=laporan`,
    overallResult : `https://pelajar.mynemo.umt.edu.my/exam/smp_x_all.php`
    
    // https://mynemo.umt.edu.my/portal_login_handle_live.php
}

function Session(type, username, password, sessionCookies) {
    this.username = username;
    this.password = password;
    this.cookieJar = rp.jar();
    let self = this;

    this.sessionCookies = sessionCookies;
    if (sessionCookies) {
        let cookieList = sessionCookies.split(';')
        cookieList.forEach(function(cookie){
            self.cookieJar.setCookie(rp.cookie(cookie), BASE_URL);
        });
    }

    this.request = rp.defaults ({
        followAllRedirects:true,
        headers:{
            'Connection': 'keep-alive',
            'Accept-Encoding': 'gzip, deflate',
            'Accept': '*/*',
            'User-Agent': 'requests'
        },
        jar:this.cookieJar
    });
    // this.urls = [];
    // if (subUrls) {
    //     this.urls = subUrls;
    // }
    // this.homeUrl = BASE_URL;
}

Session.prototype.login = Promise.coroutine(function *(username, password) {
    let self = this;
    if (!self.sessionCookies) {
        let request = self.request;
        let post = function(url, form) {
            return new Promise(function(resolve, reject){
                request.post({url:url, form:form}), function(err, response, body) {
                    console.log(err);
                    if (err) reject({error:500, message:"Internal server error"});
                    console.log(response);
                    if (!body) {
                        reject({message:"Internal server error"});
                    }
                    console.log(body);

                    let $ = cheerio.load(body,{lowerCaseTags:true});
                    
                    if ($('input[name ="It"]').val()) {
                        reject({error:401, message:"Incorrect Credentials"});
                    } else {
                        var user = $('')
                    }
                }
            })
        }
    }
})

