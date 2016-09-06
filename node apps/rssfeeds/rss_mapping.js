[
	{
		'type' : "user",
		'test': 'http://www.reddit.com/user/alienth/.rss',
		"feilds": ['category','entry','id','link','title','updated'],
		'entriy_feilds':['author','category','content','id','link','title','updated']
	},
	{
		'type' : "front_page",
		'test': 'http://www.reddit.com/.rss',
		"feilds": ['category','entry','id','link','title','updated'],
		'entriy_feilds':['author','category','content','id','link','title','updated']
	},
	{
		'type' : "multireddit",
		'test': 'http://www.reddit.com/r/news+wtf.rss',	// (note that the slash is optional).
		"feilds": ['category','entry','id','link','title','updated'],
		'entriy_feilds':['author','category','content','id','link','title','updated']
	},
	{
		'type' : "domain",
		'test': 'http://www.reddit.com/domain/microsoft.com/.rss'
		"feilds": ['category','entry','id','link','title','updated'],
		'entriy_feilds':['author','category','content','id','link','title','updated']
	},
	{
		'type' : "subreddit",
		'test': 'http://www.reddit.com/r/news/.rss',
		"feilds": ['category','entry','id','link','title','updated','icon','logo','subtitle'],
		'entriy_feilds':['author','category','content','id','link','title','updated']
	},
	{
		'type' : "comment_on_post",
		'test': 'http://www.reddit.com/r/technology/comments/1uc9ro/wearing_a_mind_controlled_exoskeleton_a_paralyzed/.rss'
		"feilds": ['category','entry','id','link','title','updated','icon','logo','subtitle'],
		'entriy_feilds':['author','category','content','id','link','title','updated']
	}
];