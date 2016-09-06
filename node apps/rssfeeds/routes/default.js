var express = require('express');
var router = express.Router();
var feed = require("../feedReadModified");
var request = require('request');
var parseString = require('xml2js').parseString;
var superagent = require('superagent');


router.get('/', function(req, res) {
    res.render('index');
});



router.get('/read_feed', (req, res) => {
    let feed_url = req.query.q;
    request(feed_url,function(err, respo, body) {
        if (err) return res.send({err:err});

        if(respo.statusCode != 200) res.send({err: "server responded with statusCode " + respo.statusCode})

        parseString(body, (err, result) => {
            res.json({data:result});
        });
    });
});

// http.get(feed_url, function(resGet) {
//     resGet.pipe(new FeedParser({}))
//         .on('error', function(error) {
//         res.send({data:error.message});
//         })
//         .on('meta', function(meta) {
//             responseObject.title = meta.title;
//             responseObject.link = meta.link;
//         })
//         .on('readable', function() {
//                 var stream = this,
//                     item,
//                     validUrl = '';

//                 while ((item = stream.read())) {
//                     console.log(item);
//                     responseObject.items.push(item);
//                 }
//             });
//         })
//     .on('end', function() {
//         console.log("end");
//         console.log(responseObject);
//         res.send({data:responseObject});
//     });


// router.get('/notifications', function(req, res) {
//     if (typeof req.session.lastAccess !== 'undefined')
//         cutoff = req.session.lastAccess;
//     req.session.lastAccess = Date.now();

//     if (typeof req.session.subscription === 'undefined') {
//         return res.end('You are not subscribed to anything');
//     } else {
//         // console.log(req.session.subscription);
//         // return res.end('Subscribed for ' + req.session.subscription);
//         // return res.json({ message: req.session.__lastAccess });
//         Item.find({date: {$gt: cutoff}, name: { $in: req.session.subscription} }).
//         limit(10).
//         sort('-date').
//         exec(function(err, items) {
//             if (err)
//                 res.send(err);
//             return res.json({ items: items });
//         });
//     }
// });

// router.route('/subscribe')
//     // create a new subscription
//     .post(function(req, res) {
//         subscription = req.body.title;
//         if (typeof req.session.subscription === 'undefined') {
//             req.session.subscription = [subscription];
//             eventEmitter.emit('subscription added',  {item: subscription});
//             return res.json({ message: 'subscription added for ' + req.session.subscription });
//         } else {
//             if (req.session.subscription.indexOf(subscription) > -1)
//                 return res.json({ message: 'Already subscribed to ' + subscription });

//             req.session.subscription.push(subscription);
//             console.log(req.session.subscription);
//             return res.json({ message: 'subscription added for ' + req.session.subscription });
//         }
//     })
//     // get all the items
//     .get(function(req, res) {
//         if (typeof req.session.subscription === 'undefined') {
//             return res.json({ message: 'You are not subscribed to anything' });
//         } else {
//             return res.json({subscriptions : req.session.subscription });
//         }
//     });

// router.route('/subscribe/:item_id')
//     .get(function(req, res) {
//         if (typeof req.session.subscription === 'undefined') {
//             return res.json({ message: 'You are not subscribed to anything' });
//         } else {
//             if (req.session.subscription.indexOf(req.params.item_id) > -1)
//                 return res.json({ status: true });
//             else
//                 return res.json({ status: false });
//         }
//     })
//     .put(function(req, res) {
//         subscription = req.params.item_id;
//         if (typeof req.session.subscription === 'undefined') {
//             req.session.subscription = [subscription];
//             eventEmitter.emit('subscription added',  {item: subscription});
//             return res.json({ message: 'subscription added for ' + req.params.item_id });

//         } else {
//             if (req.session.subscription.indexOf(req.params.item_id) == -1){
//                 req.session.subscription.push(subscription);
//                 console.log(req.session.subscription);
//                 eventEmitter.emit('subscription added',  {item: subscription});
//                 return res.json({ message: 'subscription added for ' + req.params.item_id });
//             } else {
//                 return res.json({ message: 'Already Subscribed to ' + req.params.item_id });
//             }
//         }
//     })
//     .delete(function(req, res) {
//         subscription = req.params.item_id;
//         if (typeof req.session.subscription === 'undefined') {
//             return res.json({ message: 'You are not subscribed to anything' });
//         } else {
//             var index = req.session.subscription.indexOf(req.params.item_id);
//             if (index == -1){
//                 return res.json({ message: 'Not Subscribed to ' + req.params.item_id });
//             } else {
//                 // remove all occurances of this item_id
//                 _.pull(req.session.subscription,req.params.item_id);
//                 eventEmitter.emit('subscription removed',  {item: req.params.item_id});
//                 res.json({ message: 'Successfully deleted subscription for ' + req.params.item_id});
//             }
//         }

//     });


// router.route('/subscribe_all')
//     .get(function(req, res) {
//         Item.find(function(err, items) {
//             if (err)
//                 res.send(err);
//             var all_items = items.map(function(item) {return item.name});
//             req.session.subscription = all_items;
//             eventEmitter.emit('subscribe all',  {items: all_items});
//             return res.json({ message: 'Subscribed all' });
//         });
//     })
//     .delete(function(req, res) {
//         if (typeof req.session.subscription !== 'undefined') {
//             delete req.session.subscription;
//         };
//         eventEmitter.emit('unsubscribe all');
//         return res.json({ message: 'Unsubscribed all' });
//     });


module.exports = router;
