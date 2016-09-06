function _g_(it /**/) { var out='<div class="collapsible-header collection-item active avatar"> <a href=\''+(it.feedBaseUrl + it.entryLink)+'\' id=\'entryId\'> <i class="material-icons small">label_outline</i> </a> <a href=\''+(it.authorUri)+'\' id="authorName" class="waves-effect waves-red btn-flat">'+(it.authorName)+'</a> <span id="categoryTerm" class="badge"> <a href=\''+(it.categoryLabel)+'\' class="waves-effect waves-red btn-flat">'+(it.categoryTerm)+'</a> </span> <div class="entryTitle title">'+(it.entryTitle)+'</div> </div> <div id="content_body" class="collapsible-body contains_table"> '+(it.contents_)+'</div>';return out; }

console.log("hello from the other side");
var da;
var p;
var feeds;
var feedId;
var feedSubtitle;
var daTerm;
var daLabel;
var daIcon;
var daLogo;

// var authorName;
// var authorUri;
// var categoryTerm;
// var categoryLabel;
// var entryId;
// var entryLink;
// var entryTitle;
// var contents_;
// window.baseurl = "sadasdss";

$(document).ready(function(){

	// $("#content_container").hide();

    $('#read').click(function(){
    	var bogieURL =  $('#rss_feed_url')[0].value || "http://www.reddit.com/user/alienth/.rss";

    	$.get('/read_feed',{q:bogieURL},(data) => {
    		if(data.err){
    			console.log(data.err);
    		}

    		da = data.data.feed;
    		daTerm = da.category[0].$.term;
    		daLabel = da.category[0].$.label;
    		feedId = da.id[0];

    		// only present in subreddits and comments
    		daIcon =  (typeof da['icon'] != 'undefined' ) ? da.icon[0] : '';
    		daLogo = (typeof da['logo'] != 'undefined' ) ? da.logo[0] : '';
    		feedSubtitle = (typeof da['subtitle'] != 'undefined' ) ? da.subtitle[0] : '';
            var ul  = $('#data_ul')[0];
    		feeds = da.entry;

    		console.log(da.entry[0]);
    		// var entry =  da.entry[0];
    		feeds.forEach((entry) => {
				// 'author','category','content','id','link','title','updated'
    			// console.log(entity);
				var details = {
					'authorName' : entry.author[0].name[0],
					'authorUri' : entry.author[0].uri[0],
					'categoryTerm' : entry.category[0].$.term,
					'categoryLabel' : entry.category[0].$.label,
					'entryId' : entry.id[0],
					'entryLink' : entry.link[0].$.href,
					'entryTitle' : entry.title[0],
                    'contents_' : entry.content[0]._,
                    'feedBaseUrl':'https://reddit.com'
				}
                var b = _g_(details);
                var ela = $('<li/>').html(b)[0];
                ul.appendChild(ela);
    		});
		$( "#content_container" ).show();
    	});
    });
});










