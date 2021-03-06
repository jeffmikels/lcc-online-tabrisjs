
module.exports = function(){
	var data = {};
	
	data.urls = {
		'news': 'http://lafayettecc.org/news/category/news/?json=true',
		'series': 'http://lafayettecc.org/news/series/?json=true',
		'messages': 'http://lafayettecc.org/news/messages/?json=true'
	}
	
	// grab arbitrary json source
	data.grab = function(url)
	{
		var that = this;
	    var xhr = new tabris.XMLHttpRequest();
	    xhr.onreadystatechange = function() {
			if (xhr.readyState === xhr.DONE) {
				var result = xhr.responseText;
				that.result = result;
				that.parsed = JSON.parse(result) || {};
			}
	    };
	    xhr.open("GET", url);
	    xhr.send();
	}
	
	data.update = function()
	{
		//default urls
		urls = 
	}
	
	
	
	data.sample = sample;
	return data;
}

var sample = {
    "blog_desc": "a contemporary church in Lafayette, Indiana helping people find full life in Christ",
    "blog_rss": "http://lafayettecc.org/news/feed/",
    "blog_title": "Lafayette Community Church",
    "blog_url": "http://lafayettecc.org/news",
    "posts": [
        {
            "alt_excerpt": "Since last Fall, we have been talking about the need for us to finally get into a building of our own. We have discussed the need to have a building with more space, we have discussed the fact that it's cheaper to own than to rent, and we have gone through an extensive process of&hellip;",
            "author": "Pastor Jeff",
            "categories": [
                "News"
            ],
            "content": "\r\nSince last Fall, we have been talking about the need for us to finally get into a building of our own. We have discussed the need to have a building with more space, we have discussed the fact that it's cheaper to own than to rent, and we have gone through an extensive process of studying God's word together and asking people to make personal financial commitments all in the hope that God would open a door of opportunity for us.\r\n\r\nI'm beginning to think he has done just that.\r\n\r\nIn just the past three weeks,\u00a0we have become aware of the building\u00a0at 2301 Concord Road and the potential that building has to become our new home.\r\n\r\nNow, to take a step back, I need to tell you that when we finished the pledge drive portion of our capital campaign, it was difficult for me to fight back the feelings of disappointment. We had a goal to raise $550,000 in our pledge drive, but the actual pledges we have raised as of today are $135,001.\r\n\r\nThat's a far cry from the $550,000 we were trying to raise, but I had posted something to our FAQ that is really relevant today...\r\n<blockquote>\r\n<h2>What if we don't raise enough money?</h2>\r\nStrangely, Pastor Jeff is\u00a0not worried about this. He\u2019s\u00a0fully convinced that God is going to provide for us the amount of money He thinks we should have at this point in time.However, if we don\u2019t get enough commitments to reach our goal, that must mean that God\u2019s plan for us is different from what we had been thinking. If we don\u2019t reach our goal, we will take that as a sign from God of the following things:\r\n<ol>\r\n\t<li><strong>It must not be time for us to consider building</strong> a building on the southside.</li>\r\n\t<li>It must be time for us to reconsider how we can maximize the space we are in <strong>or look again for alternate meeting space</strong>.</li>\r\n\t<li>Perhaps God wants us to simply save up the money as we keep our eyes open for <strong>the opportunity he will bring our way</strong>.</li>\r\n</ol>\r\n</blockquote>\r\nIn light of our actual campaign totals, we put our dreams of financing new construction on the back burner, started looking again for a meeting space, started new negotiations with our landlord, and kept our eyes open for other opportunities.\r\n\r\nWell, we believe God led Pastor Billy to find a listing on a local real estate website for the building at 2301 Concord, and you should know some of these amazing statistics:\r\n<ul>\r\n\t<li><strong>This building is 10,700 square feet.</strong> When we started the process last Summer of praying for and looking for a new location for us, our target building size was 10,000 square feet!</li>\r\n\t<li><strong>This building has a listed purchase price of $500,000.</strong> That's the amount we thought we needed so that we could finance a $3M building, but when we didn't reach that target, our financial coach encouraged us to just trust that God would provide the $500,000 somehow over the next three years.</li>\r\n\t<li><strong>The owner has agreed to sell it to us for $400,000!</strong> That's a 20% discount right off the bat meaning that\u00a0we can finance the building with only $25,000 as a downpayment.</li>\r\n\t<li><b>Based on these numbers and our relationship with the Cornerstone Fund, we believe we will be able to fully fund the purchase and the renovation of this property with money we already have on hand!</b></li>\r\n\t<li><strong>Finally, after taking possession of this property, we expect to save $2000 per month compared to our current rent!</strong></li>\r\n</ul>\r\nAmazingly enough, all the numbers seem to be lining up just perfectly to make us believe that God has put this opportunity in front of us.\r\n<h2>Some Photos</h2>\r\nClick a photo to see a larger version.\r\n\r\n[gallery link=\"none\" ids=\"4497,4501,4503,4502,4514,4508,4506,4507,4511,4510,4505\"]\r\n<h2>There's just one problem...</h2>\r\nHowever, in spite of all these awesome things, there is one major concern: location. Of course, they say that location is the most important consideration in all real estate, and from <em><strong>one perspective</strong></em> this location is amazing. The building is visible from the mall, and it is near the Toys R Us.\r\n\r\nHowever, from <strong>another perspective</strong>, there's a problem. The building is also right next to an adult gift store and a strip club.\r\n\r\n<img class=\"alignnone wp-image-4498 size-full\" src=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__11.59.43.jpg\" alt=\"2015-06-13__11.59.43\" width=\"1920\" height=\"1280\" />\r\n\r\nJen and I have always been confused at the juxtaposition of these two \"adult\" businesses right next to the Toys R Us, and the thought of putting our church right next to them too, is a little strange and upsetting at first.\r\n\r\nHonestly, the thought of moving our church home next door to these businesses has caused a great deal of concern in my heart and in the hearts of other key leaders in our church.\r\n\r\nOf course, the entire reason we exist as a church is to try to help people discover life in Christ rather than in all the poor substitutes this world offers us. In that light, it may be a perfect act of grace on our part to move right next to a business that is filled with potentially misguided and needy people each night.\r\n\r\nHowever, we will need to take our steps carefully if we are to walk the line of blessing our neighbors, promoting holiness, and protecting ourselves from the influences and dangers that might be associated with asking people to bring their families to this location every week.\r\n<h2>Please Pray</h2>\r\nIn light of all this, I and the leaders of LCC are asking you to pray with us and for us as we attempt to make this decision. There are so many signs that are pointing us to believe that this is the opportunity from God we have been waiting for. But there is the very real challenge of figuring out what ministry might look like for us in that part of the city. Ministry feels \"safer\" on the far south side of Lafayette, but this move has the potential to benefit us financially and also propel us forward in our mission to bring the love of Christ to people who don't know how much they are loved.\r\n\r\nThere are many questions that still need to be answered, so we ask that you pray for us as we attempt to answer them.\r\n\r\n<div class=\"embed-container\"><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/nNGfQWJ5l1c\" frameborder=\"0\" allowfullscreen></iframe></div>\r\n",
            "date": "June 14, 2015",
            "enclosures": [],
            "excerpt": "Since last Fall, we have been talking about the need for us to finally get into a building of our own. We have discussed the need to have a building with more space, we have discussed the fact that it&#8217;s cheaper to own than to rent, and we have gone through an extensive process of [&hellip;]",
            "filtered": "<p>Since last Fall, we have been talking about the need for us to finally get into a building of our own. We have discussed the need to have a building with more space, we have discussed the fact that it&#8217;s cheaper to own than to rent, and we have gone through an extensive process of studying God&#8217;s word together and asking people to make personal financial commitments all in the hope that God would open a door of opportunity for us.</p>\n\n<p>I&#8217;m beginning to think he has done just that.</p>\n\n<p>In just the past three weeks,\u00a0we have become aware of the building\u00a0at 2301 Concord Road and the potential that building has to become our new home.</p>\n\n<p>Now, to take a step back, I need to tell you that when we finished the pledge drive portion of our capital campaign, it was difficult for me to fight back the feelings of disappointment. We had a goal to raise $550,000 in our pledge drive, but the actual pledges we have raised as of today are $135,001.</p>\n\n<p>That&#8217;s a far cry from the $550,000 we were trying to raise, but I had posted something to our FAQ that is really relevant today&#8230;</p>\n\n<blockquote>\n<h2>What if we don&#8217;t raise enough money?</h2>\nStrangely, Pastor Jeff is\u00a0not worried about this. He\u2019s\u00a0fully convinced that God is going to provide for us the amount of money He thinks we should have at this point in time.However, if we don\u2019t get enough commitments to reach our goal, that must mean that God\u2019s plan for us is different from what we had been thinking. If we don\u2019t reach our goal, we will take that as a sign from God of the following things:\n<ol>\n    <li><strong>It must not be time for us to consider building</strong> a building on the southside.</li>\n    <li>It must be time for us to reconsider how we can maximize the space we are in <strong>or look again for alternate meeting space</strong>.</li>\n    <li>Perhaps God wants us to simply save up the money as we keep our eyes open for <strong>the opportunity he will bring our way</strong>.</li>\n</ol>\n</blockquote>\n\n<p>In light of our actual campaign totals, we put our dreams of financing new construction on the back burner, started looking again for a meeting space, started new negotiations with our landlord, and kept our eyes open for other opportunities.</p>\n\n<p>Well, we believe God led Pastor Billy to find a listing on a local real estate website for the building at 2301 Concord, and you should know some of these amazing statistics:</p>\n\n<ul>\n    <li><strong>This building is 10,700 square feet.</strong> When we started the process last Summer of praying for and looking for a new location for us, our target building size was 10,000 square feet!</li>\n    <li><strong>This building has a listed purchase price of $500,000.</strong> That&#8217;s the amount we thought we needed so that we could finance a $3M building, but when we didn&#8217;t reach that target, our financial coach encouraged us to just trust that God would provide the $500,000 somehow over the next three years.</li>\n    <li><strong>The owner has agreed to sell it to us for $400,000!</strong> That&#8217;s a 20% discount right off the bat meaning that\u00a0we can finance the building with only $25,000 as a downpayment.</li>\n    <li><b>Based on these numbers and our relationship with the Cornerstone Fund, we believe we will be able to fully fund the purchase and the renovation of this property with money we already have on hand!</b></li>\n    <li><strong>Finally, after taking possession of this property, we expect to save $2000 per month compared to our current rent!</strong></li>\n</ul>\n\n<p>Amazingly enough, all the numbers seem to be lining up just perfectly to make us believe that God has put this opportunity in front of us.</p>\n\n<h2>Some Photos</h2>\n\n<p>Click a photo to see a larger version.</p>\n\n\n\t\t<style type='text/css'>\n\t\t\t#gallery-2 {\n\t\t\t\tmargin: auto;\n\t\t\t}\n\t\t\t#gallery-2 .gallery-item {\n\t\t\t\tfloat: left;\n\t\t\t\tmargin-top: 10px;\n\t\t\t\ttext-align: center;\n\t\t\t\twidth: 33%;\n\t\t\t}\n\t\t\t#gallery-2 img {\n\t\t\t\tborder: 2px solid #cfcfcf;\n\t\t\t}\n\t\t\t#gallery-2 .gallery-caption {\n\t\t\t\tmargin-left: 0;\n\t\t\t}\n\t\t\t/* see gallery_shortcode() in wp-includes/media.php */\n\t\t</style>\n\t\t<div data-carousel-extra='{\"blog_id\":1,\"permalink\":\"http:\\/\\/lafayettecc.org\\/news\\/the-open-door-weve-been-praying-for\\/\",\"likes_blog_id\":false}' id='gallery-2' class='gallery galleryid-4495 gallery-columns-3 gallery-size-thumbnail'><dl class='gallery-item'>\n\t\t\t<dt class='gallery-icon landscape'>\n\t\t\t\t<img width=\"150\" height=\"112\" src=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__11.59.17-150x112.jpg\" class=\"attachment-thumbnail\" alt=\"2015-06-13__11.59.17\" data-attachment-id=\"4497\" data-orig-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__11.59.17.jpg\" data-orig-size=\"1920,1280\" data-comments-opened=\"1\" data-image-meta=\"{&quot;aperture&quot;:&quot;5&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;Canon EOS DIGITAL REBEL XTi&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;1434196757&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;50&quot;,&quot;iso&quot;:&quot;400&quot;,&quot;shutter_speed&quot;:&quot;0.0025&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;1&quot;}\" data-image-title=\"2015-06-13__11.59.17\" data-image-description=\"\" data-medium-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__11.59.17-600x400.jpg\" data-large-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__11.59.17-1620x1080.jpg\" />\n\t\t\t</dt></dl><dl class='gallery-item'>\n\t\t\t<dt class='gallery-icon landscape'>\n\t\t\t\t<img width=\"150\" height=\"112\" src=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.00.35-150x112.jpg\" class=\"attachment-thumbnail\" alt=\"2015-06-13__12.00.35\" data-attachment-id=\"4501\" data-orig-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.00.35.jpg\" data-orig-size=\"1920,1280\" data-comments-opened=\"1\" data-image-meta=\"{&quot;aperture&quot;:&quot;5.6&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;Canon EOS DIGITAL REBEL XTi&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;1434196835&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;50&quot;,&quot;iso&quot;:&quot;400&quot;,&quot;shutter_speed&quot;:&quot;0.002&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;1&quot;}\" data-image-title=\"2015-06-13__12.00.35\" data-image-description=\"\" data-medium-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.00.35-600x400.jpg\" data-large-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.00.35-1620x1080.jpg\" />\n\t\t\t</dt></dl><dl class='gallery-item'>\n\t\t\t<dt class='gallery-icon landscape'>\n\t\t\t\t<img width=\"150\" height=\"112\" src=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.00.44-150x112.jpg\" class=\"attachment-thumbnail\" alt=\"2015-06-13__12.00.44\" data-attachment-id=\"4503\" data-orig-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.00.44.jpg\" data-orig-size=\"1920,1280\" data-comments-opened=\"1\" data-image-meta=\"{&quot;aperture&quot;:&quot;6.3&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;Canon EOS DIGITAL REBEL XTi&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;1434196844&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;50&quot;,&quot;iso&quot;:&quot;400&quot;,&quot;shutter_speed&quot;:&quot;0.002&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;1&quot;}\" data-image-title=\"2015-06-13__12.00.44\" data-image-description=\"\" data-medium-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.00.44-600x400.jpg\" data-large-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.00.44-1620x1080.jpg\" />\n\t\t\t</dt></dl><br style=\"clear: both\" /><dl class='gallery-item'>\n\t\t\t<dt class='gallery-icon landscape'>\n\t\t\t\t<img width=\"150\" height=\"112\" src=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.00.42-150x112.jpg\" class=\"attachment-thumbnail\" alt=\"2015-06-13__12.00.42\" data-attachment-id=\"4502\" data-orig-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.00.42.jpg\" data-orig-size=\"1920,1280\" data-comments-opened=\"1\" data-image-meta=\"{&quot;aperture&quot;:&quot;8&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;Canon EOS DIGITAL REBEL XTi&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;1434196842&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;50&quot;,&quot;iso&quot;:&quot;250&quot;,&quot;shutter_speed&quot;:&quot;0.002&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;1&quot;}\" data-image-title=\"2015-06-13__12.00.42\" data-image-description=\"\" data-medium-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.00.42-600x400.jpg\" data-large-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.00.42-1620x1080.jpg\" />\n\t\t\t</dt></dl><dl class='gallery-item'>\n\t\t\t<dt class='gallery-icon landscape'>\n\t\t\t\t<img width=\"150\" height=\"112\" src=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__11.59.47-150x112.jpg\" class=\"attachment-thumbnail\" alt=\"2015-06-13__11.59.47\" data-attachment-id=\"4514\" data-orig-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__11.59.47.jpg\" data-orig-size=\"1920,1280\" data-comments-opened=\"1\" data-image-meta=\"{&quot;aperture&quot;:&quot;8&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;Canon EOS DIGITAL REBEL XTi&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;1434196787&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;50&quot;,&quot;iso&quot;:&quot;250&quot;,&quot;shutter_speed&quot;:&quot;0.002&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;1&quot;}\" data-image-title=\"2015-06-13__11.59.47\" data-image-description=\"\" data-medium-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__11.59.47-600x400.jpg\" data-large-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__11.59.47-1620x1080.jpg\" />\n\t\t\t</dt></dl><dl class='gallery-item'>\n\t\t\t<dt class='gallery-icon landscape'>\n\t\t\t\t<img width=\"150\" height=\"112\" src=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.52.58-150x112.jpg\" class=\"attachment-thumbnail\" alt=\"2015-06-13__12.52.58\" data-attachment-id=\"4508\" data-orig-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.52.58.jpg\" data-orig-size=\"1920,1440\" data-comments-opened=\"1\" data-image-meta=\"{&quot;aperture&quot;:&quot;2&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;1039348800&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;3.79&quot;,&quot;iso&quot;:&quot;300&quot;,&quot;shutter_speed&quot;:&quot;0.03030303030303&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}\" data-image-title=\"2015-06-13__12.52.58\" data-image-description=\"\" data-medium-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.52.58-600x450.jpg\" data-large-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.52.58-1440x1080.jpg\" />\n\t\t\t</dt></dl><br style=\"clear: both\" /><dl class='gallery-item'>\n\t\t\t<dt class='gallery-icon landscape'>\n\t\t\t\t<img width=\"150\" height=\"112\" src=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.33.48-150x112.jpg\" class=\"attachment-thumbnail\" alt=\"2015-06-13__12.33.48\" data-attachment-id=\"4506\" data-orig-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.33.48.jpg\" data-orig-size=\"1920,1280\" data-comments-opened=\"1\" data-image-meta=\"{&quot;aperture&quot;:&quot;4&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;Canon EOS DIGITAL REBEL XTi&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;1434198828&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;50&quot;,&quot;iso&quot;:&quot;400&quot;,&quot;shutter_speed&quot;:&quot;0.016666666666667&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;1&quot;}\" data-image-title=\"2015-06-13__12.33.48\" data-image-description=\"\" data-medium-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.33.48-600x400.jpg\" data-large-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.33.48-1620x1080.jpg\" />\n\t\t\t</dt></dl><dl class='gallery-item'>\n\t\t\t<dt class='gallery-icon landscape'>\n\t\t\t\t<img width=\"150\" height=\"112\" src=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.52.45-150x112.jpg\" class=\"attachment-thumbnail\" alt=\"2015-06-13__12.52.45\" data-attachment-id=\"4507\" data-orig-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.52.45.jpg\" data-orig-size=\"1920,1440\" data-comments-opened=\"1\" data-image-meta=\"{&quot;aperture&quot;:&quot;2&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;1039348800&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;3.79&quot;,&quot;iso&quot;:&quot;400&quot;,&quot;shutter_speed&quot;:&quot;0.02&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}\" data-image-title=\"2015-06-13__12.52.45\" data-image-description=\"\" data-medium-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.52.45-600x450.jpg\" data-large-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.52.45-1440x1080.jpg\" />\n\t\t\t</dt></dl><dl class='gallery-item'>\n\t\t\t<dt class='gallery-icon landscape'>\n\t\t\t\t<img width=\"150\" height=\"112\" src=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.54.04-150x112.jpg\" class=\"attachment-thumbnail\" alt=\"2015-06-13__12.54.04\" data-attachment-id=\"4511\" data-orig-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.54.04.jpg\" data-orig-size=\"1920,1440\" data-comments-opened=\"1\" data-image-meta=\"{&quot;aperture&quot;:&quot;2&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;1039348800&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;3.79&quot;,&quot;iso&quot;:&quot;300&quot;,&quot;shutter_speed&quot;:&quot;0.03030303030303&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}\" data-image-title=\"2015-06-13__12.54.04\" data-image-description=\"\" data-medium-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.54.04-600x450.jpg\" data-large-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.54.04-1440x1080.jpg\" />\n\t\t\t</dt></dl><br style=\"clear: both\" /><dl class='gallery-item'>\n\t\t\t<dt class='gallery-icon landscape'>\n\t\t\t\t<img width=\"150\" height=\"112\" src=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.53.33-150x112.jpg\" class=\"attachment-thumbnail\" alt=\"2015-06-13__12.53.33\" data-attachment-id=\"4510\" data-orig-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.53.33.jpg\" data-orig-size=\"1920,1440\" data-comments-opened=\"1\" data-image-meta=\"{&quot;aperture&quot;:&quot;2&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;1039348800&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;3.79&quot;,&quot;iso&quot;:&quot;300&quot;,&quot;shutter_speed&quot;:&quot;0.02&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}\" data-image-title=\"2015-06-13__12.53.33\" data-image-description=\"\" data-medium-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.53.33-600x450.jpg\" data-large-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.53.33-1440x1080.jpg\" />\n\t\t\t</dt></dl><dl class='gallery-item'>\n\t\t\t<dt class='gallery-icon landscape'>\n\t\t\t\t<img width=\"150\" height=\"112\" src=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.02.45-150x112.jpg\" class=\"attachment-thumbnail\" alt=\"2015-06-13__12.02.45\" data-attachment-id=\"4505\" data-orig-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.02.45.jpg\" data-orig-size=\"1920,1280\" data-comments-opened=\"1\" data-image-meta=\"{&quot;aperture&quot;:&quot;4&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;Canon EOS DIGITAL REBEL XTi&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;1434196965&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;50&quot;,&quot;iso&quot;:&quot;400&quot;,&quot;shutter_speed&quot;:&quot;0.016666666666667&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;1&quot;}\" data-image-title=\"2015-06-13__12.02.45\" data-image-description=\"\" data-medium-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.02.45-600x400.jpg\" data-large-file=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.02.45-1620x1080.jpg\" />\n\t\t\t</dt></dl>\n\t\t\t<br style='clear: both' />\n\t\t</div>\n\n\n<h2>There&#8217;s just one problem&#8230;</h2>\n\n<p>However, in spite of all these awesome things, there is one major concern: location. Of course, they say that location is the most important consideration in all real estate, and from <em><strong>one perspective</strong></em> this location is amazing. The building is visible from the mall, and it is near the Toys R Us.</p>\n\n<p>However, from <strong>another perspective</strong>, there&#8217;s a problem. The building is also right next to an adult gift store and a strip club.</p>\n\n<p><img class=\"alignnone wp-image-4498 size-full\" src=\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__11.59.43.jpg\" alt=\"2015-06-13__11.59.43\" width=\"1920\" height=\"1280\" /></p>\n\n<p>Jen and I have always been confused at the juxtaposition of these two &#8220;adult&#8221; businesses right next to the Toys R Us, and the thought of putting our church right next to them too, is a little strange and upsetting at first.</p>\n\n<p>Honestly, the thought of moving our church home next door to these businesses has caused a great deal of concern in my heart and in the hearts of other key leaders in our church.</p>\n\n<p>Of course, the entire reason we exist as a church is to try to help people discover life in Christ rather than in all the poor substitutes this world offers us. In that light, it may be a perfect act of grace on our part to move right next to a business that is filled with potentially misguided and needy people each night.</p>\n\n<p>However, we will need to take our steps carefully if we are to walk the line of blessing our neighbors, promoting holiness, and protecting ourselves from the influences and dangers that might be associated with asking people to bring their families to this location every week.</p>\n\n<h2>Please Pray</h2>\n\n<p>In light of all this, I and the leaders of LCC are asking you to pray with us and for us as we attempt to make this decision. There are so many signs that are pointing us to believe that this is the opportunity from God we have been waiting for. But there is the very real challenge of figuring out what ministry might look like for us in that part of the city. Ministry feels &#8220;safer&#8221; on the far south side of Lafayette, but this move has the potential to benefit us financially and also propel us forward in our mission to bring the love of Christ to people who don&#8217;t know how much they are loved.</p>\n\n<p>There are many questions that still need to be answered, so we ask that you pray for us as we attempt to answer them.</p>\n\n<div class=\"embed-container\"><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/nNGfQWJ5l1c\" frameborder=\"0\" allowfullscreen></iframe></div>\n",
            "id": 4495,
            "image": [
                "http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.00.35.jpg",
                1920,
                1280,
                false
            ],
            "media": {
                "4497": {
                    "ID": 4497,
                    "comment_count": "0",
                    "comment_status": "open",
                    "filter": "raw",
                    "guid": "http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__11.59.17.jpg",
                    "menu_order": 0,
                    "ping_status": "open",
                    "pinged": "",
                    "post_author": "2",
                    "post_category": "0",
                    "post_content": "",
                    "post_content_filtered": "",
                    "post_date": "2015-06-14 00:00:54",
                    "post_date_gmt": "2015-06-14 04:00:54",
                    "post_excerpt": "",
                    "post_mime_type": "image/jpeg",
                    "post_modified": "2015-06-14 00:00:54",
                    "post_modified_gmt": "2015-06-14 04:00:54",
                    "post_name": "2015-06-13__11-59-17",
                    "post_parent": 4495,
                    "post_password": "",
                    "post_status": "inherit",
                    "post_title": "2015-06-13__11.59.17",
                    "post_type": "attachment",
                    "to_ping": ""
                },
                "4498": {
                    "ID": 4498,
                    "comment_count": "0",
                    "comment_status": "open",
                    "filter": "raw",
                    "guid": "http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__11.59.43.jpg",
                    "menu_order": 0,
                    "ping_status": "open",
                    "pinged": "",
                    "post_author": "2",
                    "post_category": "0",
                    "post_content": "",
                    "post_content_filtered": "",
                    "post_date": "2015-06-14 00:01:00",
                    "post_date_gmt": "2015-06-14 04:01:00",
                    "post_excerpt": "",
                    "post_mime_type": "image/jpeg",
                    "post_modified": "2015-06-14 00:01:00",
                    "post_modified_gmt": "2015-06-14 04:01:00",
                    "post_name": "2015-06-13__11-59-43",
                    "post_parent": 4495,
                    "post_password": "",
                    "post_status": "inherit",
                    "post_title": "2015-06-13__11.59.43",
                    "post_type": "attachment",
                    "to_ping": ""
                },
                "4500": {
                    "ID": 4500,
                    "comment_count": "0",
                    "comment_status": "open",
                    "filter": "raw",
                    "guid": "http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.00.28.jpg",
                    "menu_order": 0,
                    "ping_status": "open",
                    "pinged": "",
                    "post_author": "2",
                    "post_category": "0",
                    "post_content": "",
                    "post_content_filtered": "",
                    "post_date": "2015-06-14 00:01:12",
                    "post_date_gmt": "2015-06-14 04:01:12",
                    "post_excerpt": "",
                    "post_mime_type": "image/jpeg",
                    "post_modified": "2015-06-14 00:01:12",
                    "post_modified_gmt": "2015-06-14 04:01:12",
                    "post_name": "2015-06-13__12-00-28",
                    "post_parent": 4495,
                    "post_password": "",
                    "post_status": "inherit",
                    "post_title": "2015-06-13__12.00.28",
                    "post_type": "attachment",
                    "to_ping": ""
                },
                "4501": {
                    "ID": 4501,
                    "comment_count": "0",
                    "comment_status": "open",
                    "filter": "raw",
                    "guid": "http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.00.35.jpg",
                    "menu_order": 0,
                    "ping_status": "open",
                    "pinged": "",
                    "post_author": "2",
                    "post_category": "0",
                    "post_content": "",
                    "post_content_filtered": "",
                    "post_date": "2015-06-14 00:01:18",
                    "post_date_gmt": "2015-06-14 04:01:18",
                    "post_excerpt": "",
                    "post_mime_type": "image/jpeg",
                    "post_modified": "2015-06-14 00:01:18",
                    "post_modified_gmt": "2015-06-14 04:01:18",
                    "post_name": "2015-06-13__12-00-35",
                    "post_parent": 4495,
                    "post_password": "",
                    "post_status": "inherit",
                    "post_title": "2015-06-13__12.00.35",
                    "post_type": "attachment",
                    "to_ping": ""
                },
                "4502": {
                    "ID": 4502,
                    "comment_count": "0",
                    "comment_status": "open",
                    "filter": "raw",
                    "guid": "http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.00.42.jpg",
                    "menu_order": 0,
                    "ping_status": "open",
                    "pinged": "",
                    "post_author": "2",
                    "post_category": "0",
                    "post_content": "",
                    "post_content_filtered": "",
                    "post_date": "2015-06-14 00:01:25",
                    "post_date_gmt": "2015-06-14 04:01:25",
                    "post_excerpt": "",
                    "post_mime_type": "image/jpeg",
                    "post_modified": "2015-06-14 00:01:25",
                    "post_modified_gmt": "2015-06-14 04:01:25",
                    "post_name": "2015-06-13__12-00-42",
                    "post_parent": 4495,
                    "post_password": "",
                    "post_status": "inherit",
                    "post_title": "2015-06-13__12.00.42",
                    "post_type": "attachment",
                    "to_ping": ""
                },
                "4503": {
                    "ID": 4503,
                    "comment_count": "0",
                    "comment_status": "open",
                    "filter": "raw",
                    "guid": "http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.00.44.jpg",
                    "menu_order": 0,
                    "ping_status": "open",
                    "pinged": "",
                    "post_author": "2",
                    "post_category": "0",
                    "post_content": "",
                    "post_content_filtered": "",
                    "post_date": "2015-06-14 00:01:34",
                    "post_date_gmt": "2015-06-14 04:01:34",
                    "post_excerpt": "",
                    "post_mime_type": "image/jpeg",
                    "post_modified": "2015-06-14 00:01:34",
                    "post_modified_gmt": "2015-06-14 04:01:34",
                    "post_name": "2015-06-13__12-00-44",
                    "post_parent": 4495,
                    "post_password": "",
                    "post_status": "inherit",
                    "post_title": "2015-06-13__12.00.44",
                    "post_type": "attachment",
                    "to_ping": ""
                },
                "4504": {
                    "ID": 4504,
                    "comment_count": "0",
                    "comment_status": "open",
                    "filter": "raw",
                    "guid": "http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.01.39.jpg",
                    "menu_order": 0,
                    "ping_status": "open",
                    "pinged": "",
                    "post_author": "2",
                    "post_category": "0",
                    "post_content": "",
                    "post_content_filtered": "",
                    "post_date": "2015-06-14 00:01:43",
                    "post_date_gmt": "2015-06-14 04:01:43",
                    "post_excerpt": "",
                    "post_mime_type": "image/jpeg",
                    "post_modified": "2015-06-14 00:01:43",
                    "post_modified_gmt": "2015-06-14 04:01:43",
                    "post_name": "2015-06-13__12-01-39",
                    "post_parent": 4495,
                    "post_password": "",
                    "post_status": "inherit",
                    "post_title": "2015-06-13__12.01.39",
                    "post_type": "attachment",
                    "to_ping": ""
                },
                "4505": {
                    "ID": 4505,
                    "comment_count": "0",
                    "comment_status": "open",
                    "filter": "raw",
                    "guid": "http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.02.45.jpg",
                    "menu_order": 0,
                    "ping_status": "open",
                    "pinged": "",
                    "post_author": "2",
                    "post_category": "0",
                    "post_content": "",
                    "post_content_filtered": "",
                    "post_date": "2015-06-14 00:01:48",
                    "post_date_gmt": "2015-06-14 04:01:48",
                    "post_excerpt": "",
                    "post_mime_type": "image/jpeg",
                    "post_modified": "2015-06-14 00:01:48",
                    "post_modified_gmt": "2015-06-14 04:01:48",
                    "post_name": "2015-06-13__12-02-45",
                    "post_parent": 4495,
                    "post_password": "",
                    "post_status": "inherit",
                    "post_title": "2015-06-13__12.02.45",
                    "post_type": "attachment",
                    "to_ping": ""
                },
                "4506": {
                    "ID": 4506,
                    "comment_count": "0",
                    "comment_status": "open",
                    "filter": "raw",
                    "guid": "http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.33.48.jpg",
                    "menu_order": 0,
                    "ping_status": "open",
                    "pinged": "",
                    "post_author": "2",
                    "post_category": "0",
                    "post_content": "",
                    "post_content_filtered": "",
                    "post_date": "2015-06-14 00:01:54",
                    "post_date_gmt": "2015-06-14 04:01:54",
                    "post_excerpt": "",
                    "post_mime_type": "image/jpeg",
                    "post_modified": "2015-06-14 00:01:54",
                    "post_modified_gmt": "2015-06-14 04:01:54",
                    "post_name": "2015-06-13__12-33-48",
                    "post_parent": 4495,
                    "post_password": "",
                    "post_status": "inherit",
                    "post_title": "2015-06-13__12.33.48",
                    "post_type": "attachment",
                    "to_ping": ""
                },
                "4507": {
                    "ID": 4507,
                    "comment_count": "0",
                    "comment_status": "open",
                    "filter": "raw",
                    "guid": "http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.52.45.jpg",
                    "menu_order": 0,
                    "ping_status": "open",
                    "pinged": "",
                    "post_author": "2",
                    "post_category": "0",
                    "post_content": "",
                    "post_content_filtered": "",
                    "post_date": "2015-06-14 00:02:01",
                    "post_date_gmt": "2015-06-14 04:02:01",
                    "post_excerpt": "",
                    "post_mime_type": "image/jpeg",
                    "post_modified": "2015-06-14 00:02:01",
                    "post_modified_gmt": "2015-06-14 04:02:01",
                    "post_name": "2015-06-13__12-52-45",
                    "post_parent": 4495,
                    "post_password": "",
                    "post_status": "inherit",
                    "post_title": "2015-06-13__12.52.45",
                    "post_type": "attachment",
                    "to_ping": ""
                },
                "4508": {
                    "ID": 4508,
                    "comment_count": "0",
                    "comment_status": "open",
                    "filter": "raw",
                    "guid": "http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.52.58.jpg",
                    "menu_order": 0,
                    "ping_status": "open",
                    "pinged": "",
                    "post_author": "2",
                    "post_category": "0",
                    "post_content": "",
                    "post_content_filtered": "",
                    "post_date": "2015-06-14 00:02:07",
                    "post_date_gmt": "2015-06-14 04:02:07",
                    "post_excerpt": "",
                    "post_mime_type": "image/jpeg",
                    "post_modified": "2015-06-14 00:02:07",
                    "post_modified_gmt": "2015-06-14 04:02:07",
                    "post_name": "2015-06-13__12-52-58",
                    "post_parent": 4495,
                    "post_password": "",
                    "post_status": "inherit",
                    "post_title": "2015-06-13__12.52.58",
                    "post_type": "attachment",
                    "to_ping": ""
                },
                "4509": {
                    "ID": 4509,
                    "comment_count": "0",
                    "comment_status": "open",
                    "filter": "raw",
                    "guid": "http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.53.09.jpg",
                    "menu_order": 0,
                    "ping_status": "open",
                    "pinged": "",
                    "post_author": "2",
                    "post_category": "0",
                    "post_content": "",
                    "post_content_filtered": "",
                    "post_date": "2015-06-14 00:02:13",
                    "post_date_gmt": "2015-06-14 04:02:13",
                    "post_excerpt": "",
                    "post_mime_type": "image/jpeg",
                    "post_modified": "2015-06-14 00:02:13",
                    "post_modified_gmt": "2015-06-14 04:02:13",
                    "post_name": "2015-06-13__12-53-09",
                    "post_parent": 4495,
                    "post_password": "",
                    "post_status": "inherit",
                    "post_title": "2015-06-13__12.53.09",
                    "post_type": "attachment",
                    "to_ping": ""
                },
                "4510": {
                    "ID": 4510,
                    "comment_count": "0",
                    "comment_status": "open",
                    "filter": "raw",
                    "guid": "http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.53.33.jpg",
                    "menu_order": 0,
                    "ping_status": "open",
                    "pinged": "",
                    "post_author": "2",
                    "post_category": "0",
                    "post_content": "",
                    "post_content_filtered": "",
                    "post_date": "2015-06-14 00:02:19",
                    "post_date_gmt": "2015-06-14 04:02:19",
                    "post_excerpt": "",
                    "post_mime_type": "image/jpeg",
                    "post_modified": "2015-06-14 00:02:19",
                    "post_modified_gmt": "2015-06-14 04:02:19",
                    "post_name": "2015-06-13__12-53-33",
                    "post_parent": 4495,
                    "post_password": "",
                    "post_status": "inherit",
                    "post_title": "2015-06-13__12.53.33",
                    "post_type": "attachment",
                    "to_ping": ""
                },
                "4511": {
                    "ID": 4511,
                    "comment_count": "0",
                    "comment_status": "open",
                    "filter": "raw",
                    "guid": "http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.54.04.jpg",
                    "menu_order": 0,
                    "ping_status": "open",
                    "pinged": "",
                    "post_author": "2",
                    "post_category": "0",
                    "post_content": "",
                    "post_content_filtered": "",
                    "post_date": "2015-06-14 00:02:26",
                    "post_date_gmt": "2015-06-14 04:02:26",
                    "post_excerpt": "",
                    "post_mime_type": "image/jpeg",
                    "post_modified": "2015-06-14 00:02:26",
                    "post_modified_gmt": "2015-06-14 04:02:26",
                    "post_name": "2015-06-13__12-54-04",
                    "post_parent": 4495,
                    "post_password": "",
                    "post_status": "inherit",
                    "post_title": "2015-06-13__12.54.04",
                    "post_type": "attachment",
                    "to_ping": ""
                },
                "4512": {
                    "ID": 4512,
                    "comment_count": "0",
                    "comment_status": "open",
                    "filter": "raw",
                    "guid": "http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.57.54.jpg",
                    "menu_order": 0,
                    "ping_status": "open",
                    "pinged": "",
                    "post_author": "2",
                    "post_category": "0",
                    "post_content": "",
                    "post_content_filtered": "",
                    "post_date": "2015-06-14 00:02:31",
                    "post_date_gmt": "2015-06-14 04:02:31",
                    "post_excerpt": "",
                    "post_mime_type": "image/jpeg",
                    "post_modified": "2015-06-14 00:02:31",
                    "post_modified_gmt": "2015-06-14 04:02:31",
                    "post_name": "2015-06-13__12-57-54",
                    "post_parent": 4495,
                    "post_password": "",
                    "post_status": "inherit",
                    "post_title": "2015-06-13__12.57.54",
                    "post_type": "attachment",
                    "to_ping": ""
                },
                "4513": {
                    "ID": 4513,
                    "comment_count": "0",
                    "comment_status": "open",
                    "filter": "raw",
                    "guid": "http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.58.24.jpg",
                    "menu_order": 0,
                    "ping_status": "open",
                    "pinged": "",
                    "post_author": "2",
                    "post_category": "0",
                    "post_content": "",
                    "post_content_filtered": "",
                    "post_date": "2015-06-14 00:02:36",
                    "post_date_gmt": "2015-06-14 04:02:36",
                    "post_excerpt": "",
                    "post_mime_type": "image/jpeg",
                    "post_modified": "2015-06-14 00:02:36",
                    "post_modified_gmt": "2015-06-14 04:02:36",
                    "post_name": "2015-06-13__12-58-24",
                    "post_parent": 4495,
                    "post_password": "",
                    "post_status": "inherit",
                    "post_title": "2015-06-13__12.58.24",
                    "post_type": "attachment",
                    "to_ping": ""
                },
                "4514": {
                    "ID": 4514,
                    "comment_count": "0",
                    "comment_status": "open",
                    "filter": "raw",
                    "guid": "http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__11.59.47.jpg",
                    "menu_order": 0,
                    "ping_status": "open",
                    "pinged": "",
                    "post_author": "2",
                    "post_category": "0",
                    "post_content": "",
                    "post_content_filtered": "",
                    "post_date": "2015-06-14 00:03:10",
                    "post_date_gmt": "2015-06-14 04:03:10",
                    "post_excerpt": "",
                    "post_mime_type": "image/jpeg",
                    "post_modified": "2015-06-14 00:03:10",
                    "post_modified_gmt": "2015-06-14 04:03:10",
                    "post_name": "2015-06-13__11-59-47",
                    "post_parent": 4495,
                    "post_password": "",
                    "post_status": "inherit",
                    "post_title": "2015-06-13__11.59.47",
                    "post_type": "attachment",
                    "to_ping": ""
                }
            },
            "meta": {
                "_edit_last": [
                    "2"
                ],
                "_edit_lock": [
                    "1434390977:2"
                ],
                "_encloseme": [
                    "1",
                    "1",
                    "1"
                ],
                "_pingme": [
                    "1",
                    "1",
                    "1"
                ],
                "_social_aggregated_ids": [
                    "a:2:{s:7:\"twitter\";a:2:{i:0;s:18:\"610196241658585088\";i:1;s:18:\"610625367343239168\";}s:8:\"facebook\";a:16:{i:0;s:17:\"10207273114005672\";i:1;s:16:\"1006249729393925\";i:2;s:17:\"10204900701857273\";i:3;s:17:\"10206953588100816\";i:4;s:35:\"10152784379721455_10152784492646455\";i:5;s:35:\"10152784379721455_10152784500876455\";i:6;s:17:\"10206827064740981\";i:7;s:17:\"10207429584804358\";i:8;s:35:\"10152784379721455_10152784826951455\";i:9;s:15:\"430266197144636\";i:10;s:17:\"10204367825461673\";i:11;s:17:\"10153477799065407\";i:12;s:17:\"10152970298186033\";i:13;s:16:\"1467001046925805\";i:14;s:35:\"10152784379721455_10152788119901455\";i:15;s:17:\"10205624714394465\";}}"
                ],
                "_social_aggregation_log": [
                    "a:17:{i:1434318777;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"610196241658585088\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"44951434318780\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:2;}}}}}i:1434320624;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"610196241658585088\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"44951434320626\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:2;}}}}}i:1434324220;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"610196241658585088\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:3:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784492646455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784500876455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:2;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"44951434324223\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1434328744;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"610196241658585088\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:3:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784492646455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784500876455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:2;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"44951434328747\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:1;}}}}}i:1434336085;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"610196241658585088\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:3:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784492646455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784500876455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:2;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"44951434336088\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:1;}}}}}i:1434351436;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"610196241658585088\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:4:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784492646455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784500876455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:2;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784826951455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:3;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"44951434351439\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:2;}}}}}i:1434380964;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"610196241658585088\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:4:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784492646455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784500876455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:2;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784826951455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:3;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"44951434380966\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:2;}}}}}i:1434392644;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"610196241658585088\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:4:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784492646455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784500876455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:2;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784826951455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:3;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"44951434392647\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1434396245;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"610196241658585088\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:4:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784492646455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784500876455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:2;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784826951455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:3;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"44951434396247\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1434398963;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"610196241658585088\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:4:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784492646455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784500876455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:2;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784826951455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:3;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"44951434398966\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1434403444;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"610196241658585088\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:4:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784492646455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784500876455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:2;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784826951455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:3;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"44951434403447\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1434410646;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"610196241658585088\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:4:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784492646455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784500876455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:2;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784826951455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:3;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"44951434410648\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:1;}}}}}i:1434425044;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"610625367343239168\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:8:\"username\";s:13:\"ConvergeMidAm\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"610196241658585088\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:4:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784492646455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784500876455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:2;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784826951455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:3;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"44951434425047\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1434455195;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"610625367343239168\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:13:\"ConvergeMidAm\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"610196241658585088\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:4:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784492646455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784500876455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:2;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784826951455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:3;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"44951434455199\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1434499045;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"610625367343239168\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:13:\"ConvergeMidAm\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"610196241658585088\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:4:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784492646455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784500876455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:2;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784826951455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:3;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"44951434499050\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1434586198;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"610625367343239168\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:13:\"ConvergeMidAm\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"610196241658585088\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:5:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784492646455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784500876455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:2;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784826951455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:3;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152788119901455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:4;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"44951434586203\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:1;}}}}}i:1434759430;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"610625367343239168\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:13:\"ConvergeMidAm\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"610196241658585088\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:5:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784492646455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784500876455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:2;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152784826951455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:3;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152784379721455_10152788119901455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152784379721455\";}}i:4;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"44951434759435\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}}"
                ],
                "_social_broadcast_content": [
                    "a:2:{s:7:\"twitter\";a:2:{i:26746377;s:83:\"New Post: The Open Door We've Been Praying For? http://lafayettecc.org/news/?p=4495\";i:8194552;s:83:\"New Post: The Open Door We've Been Praying For? http://lafayettecc.org/news/?p=4495\";}s:8:\"facebook\";a:2:{i:588864215;s:47:\"New Post: The Open Door We've Been Praying For?\";s:11:\"81344486454\";s:47:\"New Post: The Open Door We've Been Praying For?\";}}"
                ],
                "_social_broadcast_meta": [
                    "a:2:{s:7:\"twitter\";a:2:{i:26746377;a:0:{}i:8194552;a:0:{}}s:8:\"facebook\";a:2:{i:588864215;a:4:{s:4:\"link\";s:35:\"http://lafayettecc.org/news/?p=4495\";s:5:\"title\";s:43:\"The Open Door We&#8217;ve Been Praying For?\";s:11:\"description\";s:0:\"\";s:7:\"picture\";s:79:\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.00.35.jpg\";}s:11:\"81344486454\";a:4:{s:4:\"link\";s:35:\"http://lafayettecc.org/news/?p=4495\";s:5:\"title\";s:43:\"The Open Door We&#8217;ve Been Praying For?\";s:11:\"description\";s:0:\"\";s:7:\"picture\";s:79:\"http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.00.35.jpg\";}}}"
                ],
                "_social_broadcasted_ids": [
                    "a:2:{s:7:\"twitter\";a:2:{i:26746377;a:1:{s:18:\"610196214169014273\";a:3:{s:7:\"message\";s:3380:\"eyJjcmVhdGVkX2F0IjoiU3VuIEp1biAxNCAyMToyNDo0OSArMDAwMCAyMDE1IiwiaWQiOiI2MTAxOTYyMTQxNjkwMTQyNzMiLCJpZF9zdHIiOiI2MTAxOTYyMTQxNjkwMTQyNzMiLCJ0ZXh0IjoiTmV3IFBvc3Q6IFRoZSBPcGVuIERvb3IgV2UndmUgQmVlbiBQcmF5aW5nIEZvcj8gaHR0cDpcL1wvdC5jb1wvSG1CMndnZG10MyIsInNvdXJjZSI6IjxhIGhyZWY9XCJodHRwczpcL1wvc29wcmVzdG8ubWFpbGNoaW1wLmNvbVwiIHJlbD1cIm5vZm9sbG93XCI+U29jaWFsIFByb3h5IGJ5IE1haWxjaGltcDxcL2E+IiwidHJ1bmNhdGVkIjpmYWxzZSwiaW5fcmVwbHlfdG9fc3RhdHVzX2lkIjpudWxsLCJpbl9yZXBseV90b19zdGF0dXNfaWRfc3RyIjpudWxsLCJpbl9yZXBseV90b191c2VyX2lkIjpudWxsLCJpbl9yZXBseV90b191c2VyX2lkX3N0ciI6bnVsbCwiaW5fcmVwbHlfdG9fc2NyZWVuX25hbWUiOm51bGwsInVzZXIiOnsiaWQiOiIyNjc0NjM3NyIsImlkX3N0ciI6IjI2NzQ2Mzc3IiwibmFtZSI6IkxhZmF5ZXR0ZSBDb21tdW5pdHkiLCJzY3JlZW5fbmFtZSI6ImxhZmF5ZXR0ZWNjIiwibG9jYXRpb24iOiJMYWZheWV0dGUsIEluZGlhbmEiLCJkZXNjcmlwdGlvbiI6IkxhZmF5ZXR0ZSBDb21tdW5pdHkgQ2h1cmNoIGlzIGEgeW91bmcgY2h1cmNoIGhlbHBpbmcgcGVvcGxlIHRha2UgdGhlaXIgbmV4dCBzdGVwcyBvZiBmYWl0aC4iLCJ1cmwiOiJodHRwOlwvXC90LmNvXC9xTTFtWGdLalA5IiwiZW50aXRpZXMiOnsidXJsIjp7InVybHMiOlt7InVybCI6Imh0dHA6XC9cL3QuY29cL3FNMW1YZ0tqUDkiLCJleHBhbmRlZF91cmwiOiJodHRwOlwvXC9sYWZheWV0dGVjYy5vcmciLCJkaXNwbGF5X3VybCI6ImxhZmF5ZXR0ZWNjLm9yZyIsImluZGljZXMiOlswLDIyXX1dfSwiZGVzY3JpcHRpb24iOnsidXJscyI6W119fSwicHJvdGVjdGVkIjpmYWxzZSwiZm9sbG93ZXJzX2NvdW50Ijo5OSwiZnJpZW5kc19jb3VudCI6NywibGlzdGVkX2NvdW50Ijo1LCJjcmVhdGVkX2F0IjoiVGh1IE1hciAyNiAxMzoxNzo0MiArMDAwMCAyMDA5IiwiZmF2b3VyaXRlc19jb3VudCI6NSwidXRjX29mZnNldCI6LTE0NDAwLCJ0aW1lX3pvbmUiOiJJbmRpYW5hIChFYXN0KSIsImdlb19lbmFibGVkIjpmYWxzZSwidmVyaWZpZWQiOmZhbHNlLCJzdGF0dXNlc19jb3VudCI6MTE1NywibGFuZyI6ImVuIiwiY29udHJpYnV0b3JzX2VuYWJsZWQiOmZhbHNlLCJpc190cmFuc2xhdG9yIjpmYWxzZSwiaXNfdHJhbnNsYXRpb25fZW5hYmxlZCI6ZmFsc2UsInByb2ZpbGVfYmFja2dyb3VuZF9jb2xvciI6IjAwMDAwMCIsInByb2ZpbGVfYmFja2dyb3VuZF9pbWFnZV91cmwiOiJodHRwOlwvXC9hYnMudHdpbWcuY29tXC9pbWFnZXNcL3RoZW1lc1wvdGhlbWU1XC9iZy5naWYiLCJwcm9maWxlX2JhY2tncm91bmRfaW1hZ2VfdXJsX2h0dHBzIjoiaHR0cHM6XC9cL2Ficy50d2ltZy5jb21cL2ltYWdlc1wvdGhlbWVzXC90aGVtZTVcL2JnLmdpZiIsInByb2ZpbGVfYmFja2dyb3VuZF90aWxlIjpmYWxzZSwicHJvZmlsZV9pbWFnZV91cmwiOiJodHRwOlwvXC9wYnMudHdpbWcuY29tXC9wcm9maWxlX2ltYWdlc1wvNTIwMjMxNjk1MzYyOTY1NTA0XC9wOGVVOWRkVl9ub3JtYWwuanBlZyIsInByb2ZpbGVfaW1hZ2VfdXJsX2h0dHBzIjoiaHR0cHM6XC9cL3Bicy50d2ltZy5jb21cL3Byb2ZpbGVfaW1hZ2VzXC81MjAyMzE2OTUzNjI5NjU1MDRcL3A4ZVU5ZGRWX25vcm1hbC5qcGVnIiwicHJvZmlsZV9iYW5uZXJfdXJsIjoiaHR0cHM6XC9cL3Bicy50d2ltZy5jb21cL3Byb2ZpbGVfYmFubmVyc1wvMjY3NDYzNzdcLzE0MTI4Njc5OTgiLCJwcm9maWxlX2xpbmtfY29sb3IiOiJGQTc0M0UiLCJwcm9maWxlX3NpZGViYXJfYm9yZGVyX2NvbG9yIjoiMDAwMDAwIiwicHJvZmlsZV9zaWRlYmFyX2ZpbGxfY29sb3IiOiIwMDAwMDAiLCJwcm9maWxlX3RleHRfY29sb3IiOiIwMDAwMDAiLCJwcm9maWxlX3VzZV9iYWNrZ3JvdW5kX2ltYWdlIjpmYWxzZSwiZGVmYXVsdF9wcm9maWxlIjpmYWxzZSwiZGVmYXVsdF9wcm9maWxlX2ltYWdlIjpmYWxzZSwiZm9sbG93aW5nIjpmYWxzZSwiZm9sbG93X3JlcXVlc3Rfc2VudCI6ZmFsc2UsIm5vdGlmaWNhdGlvbnMiOmZhbHNlfSwiZ2VvIjpudWxsLCJjb29yZGluYXRlcyI6bnVsbCwicGxhY2UiOm51bGwsImNvbnRyaWJ1dG9ycyI6bnVsbCwiaXNfcXVvdGVfc3RhdHVzIjpmYWxzZSwicmV0d2VldF9jb3VudCI6MCwiZmF2b3JpdGVfY291bnQiOjAsImVudGl0aWVzIjp7Imhhc2h0YWdzIjpbXSwic3ltYm9scyI6W10sInVzZXJfbWVudGlvbnMiOltdLCJ1cmxzIjpbeyJ1cmwiOiJodHRwOlwvXC90LmNvXC9IbUIyd2dkbXQzIiwiZXhwYW5kZWRfdXJsIjoiaHR0cDpcL1wvbGFmYXlldHRlY2Mub3JnXC9uZXdzXC8/cD00NDk1IiwiZGlzcGxheV91cmwiOiJsYWZheWV0dGVjYy5vcmdcL25ld3NcLz9wPTQ0OTUiLCJpbmRpY2VzIjpbNDgsNzBdfV19LCJmYXZvcml0ZWQiOmZhbHNlLCJyZXR3ZWV0ZWQiOmZhbHNlLCJwb3NzaWJseV9zZW5zaXRpdmUiOmZhbHNlLCJsYW5nIjoiZW4ifQ==\";s:4:\"urls\";a:2:{i:0;s:64:\"http://lafayettecc.org/news/the-open-door-weve-been-praying-for/\";i:1;s:35:\"http://lafayettecc.org/news/?p=4495\";}s:7:\"account\";O:8:\"stdClass\":1:{s:4:\"user\";O:8:\"stdClass\":39:{s:2:\"id\";s:8:\"26746377\";s:6:\"id_str\";s:8:\"26746377\";s:4:\"name\";s:19:\"Lafayette Community\";s:11:\"screen_name\";s:11:\"lafayettecc\";s:8:\"location\";s:18:\"Lafayette, Indiana\";s:11:\"description\";s:89:\"Lafayette Community Church is a new church helping people take their next steps of faith.\";s:3:\"url\";s:22:\"http://t.co/qM1mXgKjP9\";s:8:\"entities\";a:1:{s:3:\"url\";a:1:{s:4:\"urls\";a:1:{i:0;a:4:{s:3:\"url\";s:22:\"http://t.co/qM1mXgKjP9\";s:12:\"expanded_url\";s:22:\"http://lafayettecc.org\";s:11:\"display_url\";s:15:\"lafayettecc.org\";s:7:\"indices\";a:2:{i:0;s:1:\"0\";i:1;s:2:\"22\";}}}}}s:9:\"protected\";s:1:\"0\";s:15:\"followers_count\";s:2:\"65\";s:13:\"friends_count\";s:1:\"7\";s:12:\"listed_count\";s:1:\"4\";s:10:\"created_at\";s:30:\"Thu Mar 26 13:17:42 +0000 2009\";s:16:\"favourites_count\";s:1:\"0\";s:10:\"utc_offset\";s:6:\"-14400\";s:9:\"time_zone\";s:14:\"Indiana (East)\";s:11:\"geo_enabled\";s:1:\"0\";s:8:\"verified\";s:1:\"0\";s:14:\"statuses_count\";s:3:\"640\";s:4:\"lang\";s:2:\"en\";s:6:\"status\";a:13:{s:10:\"created_at\";s:30:\"Tue Oct 01 21:47:57 +0000 2013\";s:2:\"id\";s:18:\"385159174922842112\";s:6:\"id_str\";s:18:\"385159174922842112\";s:4:\"text\";s:138:\"Lifegroups for the week are starting tonight! If you need help finding one, contact Pastor Jeff or Pastor Billy.... http://t.co/5x3vgvl3Ez\";s:6:\"source\";s:8:\"Facebook\";s:9:\"truncated\";s:1:\"0\";s:13:\"retweet_count\";s:1:\"0\";s:14:\"favorite_count\";s:1:\"0\";s:8:\"entities\";a:1:{s:4:\"urls\";a:1:{i:0;a:4:{s:3:\"url\";s:22:\"http://t.co/5x3vgvl3Ez\";s:12:\"expanded_url\";s:22:\"http://fb.me/2X0j4VqpU\";s:11:\"display_url\";s:15:\"fb.me/2X0j4VqpU\";s:7:\"indices\";a:2:{i:0;s:3:\"116\";i:1;s:3:\"138\";}}}}s:9:\"favorited\";s:1:\"0\";s:9:\"retweeted\";s:1:\"0\";s:18:\"possibly_sensitive\";s:1:\"0\";s:4:\"lang\";s:2:\"en\";}s:20:\"contributors_enabled\";s:1:\"0\";s:13:\"is_translator\";s:1:\"0\";s:24:\"profile_background_color\";s:6:\"352726\";s:28:\"profile_background_image_url\";s:48:\"http://abs.twimg.com/images/themes/theme5/bg.gif\";s:34:\"profile_background_image_url_https\";s:49:\"https://abs.twimg.com/images/themes/theme5/bg.gif\";s:23:\"profile_background_tile\";s:1:\"0\";s:17:\"profile_image_url\";s:67:\"http://a0.twimg.com/profile_images/110688601/cross_thumb_normal.jpg\";s:23:\"profile_image_url_https\";s:69:\"https://si0.twimg.com/profile_images/110688601/cross_thumb_normal.jpg\";s:18:\"profile_link_color\";s:6:\"D02B55\";s:28:\"profile_sidebar_border_color\";s:6:\"829D5E\";s:26:\"profile_sidebar_fill_color\";s:6:\"99CC33\";s:18:\"profile_text_color\";s:6:\"3E4415\";s:28:\"profile_use_background_image\";s:1:\"1\";s:15:\"default_profile\";s:1:\"0\";s:21:\"default_profile_image\";s:1:\"0\";s:9:\"following\";s:1:\"0\";s:19:\"follow_request_sent\";s:1:\"0\";s:13:\"notifications\";s:1:\"0\";}}}}i:8194552;a:1:{s:18:\"610196216849149952\";a:3:{s:7:\"message\";s:3396:\"eyJjcmVhdGVkX2F0IjoiU3VuIEp1biAxNCAyMToyNDo0OSArMDAwMCAyMDE1IiwiaWQiOiI2MTAxOTYyMTY4NDkxNDk5NTIiLCJpZF9zdHIiOiI2MTAxOTYyMTY4NDkxNDk5NTIiLCJ0ZXh0IjoiTmV3IFBvc3Q6IFRoZSBPcGVuIERvb3IgV2UndmUgQmVlbiBQcmF5aW5nIEZvcj8gaHR0cDpcL1wvdC5jb1wvOU1YdlNxVWttYiIsInNvdXJjZSI6IjxhIGhyZWY9XCJodHRwczpcL1wvc29wcmVzdG8ubWFpbGNoaW1wLmNvbVwiIHJlbD1cIm5vZm9sbG93XCI+U29jaWFsIFByb3h5IGJ5IE1haWxjaGltcDxcL2E+IiwidHJ1bmNhdGVkIjpmYWxzZSwiaW5fcmVwbHlfdG9fc3RhdHVzX2lkIjpudWxsLCJpbl9yZXBseV90b19zdGF0dXNfaWRfc3RyIjpudWxsLCJpbl9yZXBseV90b191c2VyX2lkIjpudWxsLCJpbl9yZXBseV90b191c2VyX2lkX3N0ciI6bnVsbCwiaW5fcmVwbHlfdG9fc2NyZWVuX25hbWUiOm51bGwsInVzZXIiOnsiaWQiOiI4MTk0NTUyIiwiaWRfc3RyIjoiODE5NDU1MiIsIm5hbWUiOiJKZWZmIE1pa2VscyIsInNjcmVlbl9uYW1lIjoiamVmZm1pa2VscyIsImxvY2F0aW9uIjoiTGFmYXlldHRlLCBJTiwgVVNBIiwiZGVzY3JpcHRpb24iOiJlbnRyZXByZW5ldXIgcGFzdG9yLCBwYXNzaW9uYXRlIGFib3V0IGhlbHBpbmcgcGVvcGxlIHdhbGsgdGhyb3VnaCBjaGFuZ2UuIiwidXJsIjoiaHR0cDpcL1wvdC5jb1wvb3ROellwWHdoRCIsImVudGl0aWVzIjp7InVybCI6eyJ1cmxzIjpbeyJ1cmwiOiJodHRwOlwvXC90LmNvXC9vdE56WXBYd2hEIiwiZXhwYW5kZWRfdXJsIjoiaHR0cDpcL1wvamVmZm1pa2Vscy5pbmZvIiwiZGlzcGxheV91cmwiOiJqZWZmbWlrZWxzLmluZm8iLCJpbmRpY2VzIjpbMCwyMl19XX0sImRlc2NyaXB0aW9uIjp7InVybHMiOltdfX0sInByb3RlY3RlZCI6ZmFsc2UsImZvbGxvd2Vyc19jb3VudCI6MjA1LCJmcmllbmRzX2NvdW50IjoxMTMsImxpc3RlZF9jb3VudCI6MTUsImNyZWF0ZWRfYXQiOiJXZWQgQXVnIDE1IDAyOjE2OjA1ICswMDAwIDIwMDciLCJmYXZvdXJpdGVzX2NvdW50IjoyOCwidXRjX29mZnNldCI6LTE4MDAwLCJ0aW1lX3pvbmUiOiJRdWl0byIsImdlb19lbmFibGVkIjpmYWxzZSwidmVyaWZpZWQiOmZhbHNlLCJzdGF0dXNlc19jb3VudCI6MTA1MiwibGFuZyI6ImVuIiwiY29udHJpYnV0b3JzX2VuYWJsZWQiOmZhbHNlLCJpc190cmFuc2xhdG9yIjpmYWxzZSwiaXNfdHJhbnNsYXRpb25fZW5hYmxlZCI6ZmFsc2UsInByb2ZpbGVfYmFja2dyb3VuZF9jb2xvciI6IjFBMUIxRiIsInByb2ZpbGVfYmFja2dyb3VuZF9pbWFnZV91cmwiOiJodHRwOlwvXC9wYnMudHdpbWcuY29tXC9wcm9maWxlX2JhY2tncm91bmRfaW1hZ2VzXC8yMjY3MDk4NTlcLzA3Mi5fSnVzdF9KZXN1c18tX2JhY2tncm91bmQucG5nIiwicHJvZmlsZV9iYWNrZ3JvdW5kX2ltYWdlX3VybF9odHRwcyI6Imh0dHBzOlwvXC9wYnMudHdpbWcuY29tXC9wcm9maWxlX2JhY2tncm91bmRfaW1hZ2VzXC8yMjY3MDk4NTlcLzA3Mi5fSnVzdF9KZXN1c18tX2JhY2tncm91bmQucG5nIiwicHJvZmlsZV9iYWNrZ3JvdW5kX3RpbGUiOnRydWUsInByb2ZpbGVfaW1hZ2VfdXJsIjoiaHR0cDpcL1wvcGJzLnR3aW1nLmNvbVwvcHJvZmlsZV9pbWFnZXNcLzE4MzYxODcyXC9qZWZmX25vcm1hbC5qcGciLCJwcm9maWxlX2ltYWdlX3VybF9odHRwcyI6Imh0dHBzOlwvXC9wYnMudHdpbWcuY29tXC9wcm9maWxlX2ltYWdlc1wvMTgzNjE4NzJcL2plZmZfbm9ybWFsLmpwZyIsInByb2ZpbGVfYmFubmVyX3VybCI6Imh0dHBzOlwvXC9wYnMudHdpbWcuY29tXC9wcm9maWxlX2Jhbm5lcnNcLzgxOTQ1NTJcLzEzOTkwMDQxNjQiLCJwcm9maWxlX2xpbmtfY29sb3IiOiIwMDc4NkUiLCJwcm9maWxlX3NpZGViYXJfYm9yZGVyX2NvbG9yIjoiMTgxQTFFIiwicHJvZmlsZV9zaWRlYmFyX2ZpbGxfY29sb3IiOiIyNTI0MjkiLCJwcm9maWxlX3RleHRfY29sb3IiOiI5OTk5OTkiLCJwcm9maWxlX3VzZV9iYWNrZ3JvdW5kX2ltYWdlIjp0cnVlLCJkZWZhdWx0X3Byb2ZpbGUiOmZhbHNlLCJkZWZhdWx0X3Byb2ZpbGVfaW1hZ2UiOmZhbHNlLCJmb2xsb3dpbmciOmZhbHNlLCJmb2xsb3dfcmVxdWVzdF9zZW50IjpmYWxzZSwibm90aWZpY2F0aW9ucyI6ZmFsc2V9LCJnZW8iOm51bGwsImNvb3JkaW5hdGVzIjpudWxsLCJwbGFjZSI6bnVsbCwiY29udHJpYnV0b3JzIjpudWxsLCJpc19xdW90ZV9zdGF0dXMiOmZhbHNlLCJyZXR3ZWV0X2NvdW50IjowLCJmYXZvcml0ZV9jb3VudCI6MCwiZW50aXRpZXMiOnsiaGFzaHRhZ3MiOltdLCJzeW1ib2xzIjpbXSwidXNlcl9tZW50aW9ucyI6W10sInVybHMiOlt7InVybCI6Imh0dHA6XC9cL3QuY29cLzlNWHZTcVVrbWIiLCJleHBhbmRlZF91cmwiOiJodHRwOlwvXC9sYWZheWV0dGVjYy5vcmdcL25ld3NcLz9wPTQ0OTUiLCJkaXNwbGF5X3VybCI6ImxhZmF5ZXR0ZWNjLm9yZ1wvbmV3c1wvP3A9NDQ5NSIsImluZGljZXMiOls0OCw3MF19XX0sImZhdm9yaXRlZCI6ZmFsc2UsInJldHdlZXRlZCI6ZmFsc2UsInBvc3NpYmx5X3NlbnNpdGl2ZSI6ZmFsc2UsImxhbmciOiJlbiJ9\";s:4:\"urls\";a:2:{i:0;s:64:\"http://lafayettecc.org/news/the-open-door-weve-been-praying-for/\";i:1;s:35:\"http://lafayettecc.org/news/?p=4495\";}s:7:\"account\";O:8:\"stdClass\":1:{s:4:\"user\";O:8:\"stdClass\":43:{s:2:\"id\";s:7:\"8194552\";s:6:\"id_str\";s:7:\"8194552\";s:4:\"name\";s:11:\"Jeff Mikels\";s:11:\"screen_name\";s:10:\"jeffmikels\";s:8:\"location\";s:18:\"Lafayette, IN, USA\";s:11:\"description\";s:73:\"entrepreneur pastor, passionate about helping people walk through change.\";s:3:\"url\";s:22:\"http://t.co/otNzYpXwhD\";s:8:\"entities\";a:1:{s:3:\"url\";a:1:{s:4:\"urls\";a:1:{i:0;a:4:{s:3:\"url\";s:22:\"http://t.co/otNzYpXwhD\";s:12:\"expanded_url\";s:22:\"http://jeffmikels.info\";s:11:\"display_url\";s:15:\"jeffmikels.info\";s:7:\"indices\";a:2:{i:0;s:1:\"0\";i:1;s:2:\"22\";}}}}}s:9:\"protected\";s:1:\"0\";s:15:\"followers_count\";s:3:\"204\";s:13:\"friends_count\";s:3:\"113\";s:12:\"listed_count\";s:2:\"14\";s:10:\"created_at\";s:30:\"Wed Aug 15 02:16:05 +0000 2007\";s:16:\"favourites_count\";s:2:\"28\";s:10:\"utc_offset\";s:6:\"-18000\";s:9:\"time_zone\";s:5:\"Quito\";s:11:\"geo_enabled\";s:1:\"0\";s:8:\"verified\";s:1:\"0\";s:14:\"statuses_count\";s:4:\"1034\";s:4:\"lang\";s:2:\"en\";s:6:\"status\";a:13:{s:10:\"created_at\";s:30:\"Wed May 06 15:06:54 +0000 2015\";s:2:\"id\";s:18:\"595967985363234816\";s:6:\"id_str\";s:18:\"595967985363234816\";s:4:\"text\";s:132:\"PG-13: Benefits of Eliminating Pornography:  \nThe views expressed in this video are not my own, but the sc... http://t.co/EYnaVSwPIT\";s:6:\"source\";s:25:\"Social Proxy by Mailchimp\";s:9:\"truncated\";s:1:\"0\";s:13:\"retweet_count\";s:1:\"0\";s:14:\"favorite_count\";s:1:\"0\";s:8:\"entities\";a:1:{s:4:\"urls\";a:1:{i:0;a:4:{s:3:\"url\";s:22:\"http://t.co/EYnaVSwPIT\";s:12:\"expanded_url\";s:29:\"http://jeff.mikels.cc/?p=1562\";s:11:\"display_url\";s:22:\"jeff.mikels.cc/?p=1562\";s:7:\"indices\";a:2:{i:0;s:3:\"110\";i:1;s:3:\"132\";}}}}s:9:\"favorited\";s:1:\"0\";s:9:\"retweeted\";s:1:\"0\";s:18:\"possibly_sensitive\";s:1:\"0\";s:4:\"lang\";s:2:\"en\";}s:20:\"contributors_enabled\";s:1:\"0\";s:13:\"is_translator\";s:1:\"0\";s:22:\"is_translation_enabled\";s:1:\"0\";s:24:\"profile_background_color\";s:6:\"1A1B1F\";s:28:\"profile_background_image_url\";s:89:\"http://pbs.twimg.com/profile_background_images/226709859/072._Just_Jesus_-_background.png\";s:34:\"profile_background_image_url_https\";s:90:\"https://pbs.twimg.com/profile_background_images/226709859/072._Just_Jesus_-_background.png\";s:23:\"profile_background_tile\";s:1:\"1\";s:17:\"profile_image_url\";s:60:\"http://pbs.twimg.com/profile_images/18361872/jeff_normal.jpg\";s:23:\"profile_image_url_https\";s:61:\"https://pbs.twimg.com/profile_images/18361872/jeff_normal.jpg\";s:18:\"profile_banner_url\";s:56:\"https://pbs.twimg.com/profile_banners/8194552/1399004164\";s:18:\"profile_link_color\";s:6:\"00786E\";s:28:\"profile_sidebar_border_color\";s:6:\"181A1E\";s:26:\"profile_sidebar_fill_color\";s:6:\"252429\";s:18:\"profile_text_color\";s:6:\"999999\";s:28:\"profile_use_background_image\";s:1:\"1\";s:15:\"default_profile\";s:1:\"0\";s:21:\"default_profile_image\";s:1:\"0\";s:9:\"following\";s:1:\"0\";s:19:\"follow_request_sent\";s:1:\"0\";s:13:\"notifications\";s:1:\"0\";s:9:\"suspended\";s:1:\"0\";s:24:\"needs_phone_verification\";s:1:\"0\";}}}}}s:8:\"facebook\";a:1:{i:588864215;a:2:{s:27:\"588864215_10153406722194216\";a:3:{s:7:\"message\";s:47:\"New Post: The Open Door We've Been Praying For?\";s:4:\"urls\";a:2:{i:0;s:64:\"http://lafayettecc.org/news/the-open-door-weve-been-praying-for/\";i:1;s:35:\"http://lafayettecc.org/news/?p=4495\";}s:7:\"account\";O:8:\"stdClass\":1:{s:4:\"user\";O:8:\"stdClass\":11:{s:2:\"id\";s:9:\"588864215\";s:10:\"first_name\";s:7:\"Jeffrey\";s:6:\"gender\";s:4:\"male\";s:9:\"last_name\";s:6:\"Mikels\";s:4:\"link\";s:33:\"http://www.facebook.com/588864215\";s:6:\"locale\";s:5:\"en_US\";s:11:\"middle_name\";s:1:\"A\";s:4:\"name\";s:16:\"Jeffrey A Mikels\";s:8:\"timezone\";s:2:\"-4\";s:12:\"updated_time\";s:24:\"2013-11-02T21:07:20+0000\";s:8:\"verified\";s:1:\"1\";}}}s:29:\"81344486454_10152784379721455\";a:4:{s:7:\"message\";s:47:\"New Post: The Open Door We've Been Praying For?\";s:4:\"urls\";a:2:{i:0;s:64:\"http://lafayettecc.org/news/the-open-door-weve-been-praying-for/\";i:1;s:35:\"http://lafayettecc.org/news/?p=4495\";}s:4:\"page\";O:8:\"stdClass\":2:{s:2:\"id\";s:11:\"81344486454\";s:4:\"name\";s:26:\"Lafayette Community Church\";}s:7:\"account\";O:8:\"stdClass\":1:{s:4:\"user\";O:8:\"stdClass\":11:{s:2:\"id\";s:9:\"588864215\";s:10:\"first_name\";s:7:\"Jeffrey\";s:6:\"gender\";s:4:\"male\";s:9:\"last_name\";s:6:\"Mikels\";s:4:\"link\";s:33:\"http://www.facebook.com/588864215\";s:6:\"locale\";s:5:\"en_US\";s:11:\"middle_name\";s:1:\"A\";s:4:\"name\";s:16:\"Jeffrey A Mikels\";s:8:\"timezone\";s:2:\"-4\";s:12:\"updated_time\";s:24:\"2013-11-02T21:07:20+0000\";s:8:\"verified\";s:1:\"1\";}}}}}}"
                ],
                "_social_notify": [
                    "1"
                ],
                "_thumbnail_id": [
                    "4501"
                ]
            },
            "post_type": "post",
            "slug": "the-open-door-weve-been-praying-for",
            "thumbnail": "http://lafayettecc.org/news/wp-content/uploads/2015/06/2015-06-13__12.00.35-150x112.jpg",
            "title": "The Open Door We&#8217;ve Been Praying For?",
            "url": "http://lafayettecc.org/news/the-open-door-weve-been-praying-for/"
        },
        {
            "alt_excerpt": "Easter is an Incredible Claim Easter is a cultural phenomenon these days, but it's also an incredible claim. It's the nearly incomprehensible claim that a man died a brutal death and then three days later spontaneously came back to life. Is it\u00a0purely a matter of faith? Are there any real reasons to believe Jesus rose&hellip;",
            "author": "Pastor Jeff",
            "categories": [
                "News"
            ],
            "content": "<h2>Easter is an Incredible Claim</h2>\r\nEaster is a cultural phenomenon these days, but it's also an incredible claim. It's the nearly incomprehensible claim that a man died a brutal death and then <strong>three days later spontaneously came back to life</strong>.\r\n\r\n<em><strong>Is it\u00a0purely a matter of faith?</strong></em>\r\n\r\n<em><strong>Are there any real reasons to believe Jesus rose again?</strong></em>\r\n\r\n<em><strong>If it actually happened, what difference does\u00a0it make anyway?</strong></em>\r\n<h2>We're Answering Questions this Easter</h2>\r\nOn Easter Sunday, April 5, at each of our morning worship gatherings, we will be talking about the answers to these three questions, and on top of that, <strong>we will be answering your live questions</strong> on the topic!\u00a0And we will be doing it all <strong>while your kids are having the most fun</strong> Easter morning they have ever had.\r\n<h2>Easter is for Kids too!</h2>\r\nOf course, our wonderful <a title=\"Kidopolis\" href=\"http://lafayettecc.org/news/sundays/kidopolis/\">Kidopolis</a> program will be in full-swing for kids of all ages up through 5th grade, and our Easter Sunday Kidopolis is a\u00a0major do-not-miss event!\r\n<h2>When and Where?</h2>\r\nWe invite you to join us for this very special Easter Sunday at either of our two worship gatherings, and we invite you to share with all your friends which gathering you plan to attend by using these Facebook Event links:\r\n<ul>\r\n\t<li><a href=\"https://www.facebook.com/events/364439830412442\">The Proof of Easter (Lafayette Community Church) @ 9 am</a></li>\r\n\t<li><a href=\"https://www.facebook.com/events/799437466810382/\">The Proof of Easter (Lafayette Community Church) @ 10:45 am</a></li>\r\n\t<li><a href=\"http://lafayettecc.org/kidopolis/pre-register.php\">Pre-register Your Children Here</a></li>\r\n</ul>",
            "date": "March 18, 2015",
            "enclosures": [],
            "excerpt": "",
            "filtered": "<h2>Easter is an Incredible Claim</h2>\n\n<p>Easter is a cultural phenomenon these days, but it&#8217;s also an incredible claim. It&#8217;s the nearly incomprehensible claim that a man died a brutal death and then <strong>three days later spontaneously came back to life</strong>.</p>\n\n<p><em><strong>Is it\u00a0purely a matter of faith?</strong></em></p>\n\n<p><em><strong>Are there any real reasons to believe Jesus rose again?</strong></em></p>\n\n<p><em><strong>If it actually happened, what difference does\u00a0it make anyway?</strong></em></p>\n\n<h2>We&#8217;re Answering Questions this Easter</h2>\n\n<p>On Easter Sunday, April 5, at each of our morning worship gatherings, we will be talking about the answers to these three questions, and on top of that, <strong>we will be answering your live questions</strong> on the topic!\u00a0And we will be doing it all <strong>while your kids are having the most fun</strong> Easter morning they have ever had.</p>\n\n<h2>Easter is for Kids too!</h2>\n\n<p>Of course, our wonderful <a title=\"Kidopolis\" href=\"http://lafayettecc.org/news/sundays/kidopolis/\">Kidopolis</a> program will be in full-swing for kids of all ages up through 5th grade, and our Easter Sunday Kidopolis is a\u00a0major do-not-miss event!</p>\n\n<h2>When and Where?</h2>\n\n<p>We invite you to join us for this very special Easter Sunday at either of our two worship gatherings, and we invite you to share with all your friends which gathering you plan to attend by using these Facebook Event links:</p>\n\n<ul>\n    <li><a href=\"https://www.facebook.com/events/364439830412442\">The Proof of Easter (Lafayette Community Church) @ 9 am</a></li>\n    <li><a href=\"https://www.facebook.com/events/799437466810382/\">The Proof of Easter (Lafayette Community Church) @ 10:45 am</a></li>\n    <li><a href=\"http://lafayettecc.org/kidopolis/pre-register.php\">Pre-register Your Children Here</a></li>\n</ul>\n",
            "id": 4384,
            "image": [
                "http://lafayettecc.org/news/wp-content/uploads/2015/03/The-Proof-of-Easter-Series-Graphic.jpg",
                3200,
                1800,
                false
            ],
            "media": {
                "4385": {
                    "ID": 4385,
                    "comment_count": "0",
                    "comment_status": "open",
                    "filter": "raw",
                    "guid": "http://lafayettecc.org/news/wp-content/uploads/2015/03/The-Proof-of-Easter-Series-Graphic.jpg",
                    "menu_order": 0,
                    "ping_status": "open",
                    "pinged": "",
                    "post_author": "2",
                    "post_category": "0",
                    "post_content": "",
                    "post_content_filtered": "",
                    "post_date": "2015-03-18 17:18:44",
                    "post_date_gmt": "2015-03-18 21:18:44",
                    "post_excerpt": "",
                    "post_mime_type": "image/jpeg",
                    "post_modified": "2015-03-18 17:18:44",
                    "post_modified_gmt": "2015-03-18 21:18:44",
                    "post_name": "the-proof-of-easter-series-graphic",
                    "post_parent": 4384,
                    "post_password": "",
                    "post_status": "inherit",
                    "post_title": "The Proof of Easter Series Graphic",
                    "post_type": "attachment",
                    "to_ping": ""
                }
            },
            "meta": {
                "_edit_last": [
                    "2"
                ],
                "_edit_lock": [
                    "1429930336:2"
                ],
                "_encloseme": [
                    "1",
                    "1",
                    "1",
                    "1",
                    "1"
                ],
                "_pingme": [
                    "1",
                    "1",
                    "1",
                    "1",
                    "1"
                ],
                "_social_aggregated_ids": [
                    "a:2:{s:7:\"twitter\";a:2:{i:0;s:18:\"578306713654292480\";i:1;s:18:\"580429950894940160\";}s:8:\"facebook\";a:1:{i:0;s:10:\"1411211293\";}}"
                ],
                "_social_aggregation_log": [
                    "a:38:{i:1426714992;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841426714994\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1426717399;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841426717400\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1426721021;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841426721046\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1426725631;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841426725690\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1426726395;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841426726429\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1426733690;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:1:{s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841426733690\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1426748159;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:1:{s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841426748159\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:1;}}}}}i:1426776927;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841426776929\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1426820249;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841426820251\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1426880279;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841426880281\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1426882138;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841426882140\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1426885019;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841426885020\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1426889339;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841426889340\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1426896581;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841426896583\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1426911780;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841426911782\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1426940595;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841426940597\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1426983796;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841426983797\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1427070242;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841427070243\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1427221390;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"580429950894940160\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841427221391\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1427223332;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"580429950894940160\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841427223333\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1427226808;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"580429950894940160\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841427226810\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1427230441;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"580429950894940160\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841427230442\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1427238472;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"580429950894940160\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841427238474\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1427252905;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"580429950894940160\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841427252906\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1427282642;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"580429950894940160\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841427282643\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1427326686;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"580429950894940160\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"578306713654292480\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841427326688\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1427413103;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"580429950894940160\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841427413104\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1427585894;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"580429950894940160\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841427585895\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1429931330;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:1:{s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841429931330\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1429933181;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:1:{s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841429933181\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1429936690;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:1:{s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841429936690\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1429940556;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:1:{s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841429940556\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1429947760;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:1:{s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841429947760\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1429963109;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:1:{s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841429963109\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1429992880;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:1:{s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841429992880\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1430036645;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:1:{s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841430036645\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1430124040;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:1:{s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841430124040\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1430297605;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:1:{s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43841430297605\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}}"
                ],
                "_social_broadcast_content": [
                    "a:1:{s:8:\"facebook\";a:1:{s:11:\"81344486454\";s:29:\"New Post: The Proof of Easter\";}}"
                ],
                "_social_broadcast_meta": [
                    "a:1:{s:8:\"facebook\";a:1:{s:11:\"81344486454\";a:4:{s:4:\"link\";s:35:\"http://lafayettecc.org/news/?p=4384\";s:5:\"title\";s:19:\"The Proof of Easter\";s:11:\"description\";s:0:\"\";s:7:\"picture\";s:93:\"http://lafayettecc.org/news/wp-content/uploads/2015/03/The-Proof-of-Easter-Series-Graphic.jpg\";}}}"
                ],
                "_social_broadcasted_ids": [
                    "a:1:{s:8:\"facebook\";a:1:{i:588864215;a:1:{s:29:\"81344486454_10152601718931455\";a:4:{s:7:\"message\";s:29:\"New Post: The Proof of Easter\";s:4:\"urls\";a:2:{i:0;s:48:\"http://lafayettecc.org/news/the-proof-of-easter/\";i:1;s:35:\"http://lafayettecc.org/news/?p=4384\";}s:4:\"page\";O:8:\"stdClass\":2:{s:2:\"id\";s:11:\"81344486454\";s:4:\"name\";s:26:\"Lafayette Community Church\";}s:7:\"account\";O:8:\"stdClass\":1:{s:4:\"user\";O:8:\"stdClass\":18:{s:2:\"id\";s:9:\"588864215\";s:4:\"name\";s:16:\"Jeffrey A Mikels\";s:10:\"first_name\";s:7:\"Jeffrey\";s:11:\"middle_name\";s:1:\"A\";s:9:\"last_name\";s:6:\"Mikels\";s:4:\"link\";s:35:\"https://www.facebook.com/jeffmikels\";s:8:\"username\";s:10:\"jeffmikels\";s:8:\"hometown\";a:2:{s:2:\"id\";s:15:\"113003682047870\";s:4:\"name\";s:24:\"Apple Valley, California\";}s:8:\"location\";a:2:{s:2:\"id\";s:15:\"108100962545625\";s:4:\"name\";s:18:\"Lafayette, Indiana\";}s:3:\"bio\";s:206:\"So I usually like me, but sometimes I'm not so sure. Usually, the times I'm not so sure about are the times when I'm getting distracted by a lot of little things and not being really product . . . SQUIRREL!\";s:4:\"work\";a:1:{i:0;a:4:{s:8:\"employer\";a:2:{s:2:\"id\";s:11:\"81344486454\";s:4:\"name\";s:26:\"Lafayette Community Church\";}s:8:\"position\";a:2:{s:2:\"id\";s:15:\"115316565145414\";s:4:\"name\";s:11:\"Lead Pastor\";}s:10:\"start_date\";s:10:\"2006-01-01\";s:8:\"end_date\";s:7:\"0000-00\";}}s:9:\"education\";a:3:{i:0;a:3:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"112064958820151\";s:4:\"name\";s:29:\"Apple Valley Christian School\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"142673469093081\";s:4:\"name\";s:4:\"1993\";}s:4:\"type\";s:11:\"High School\";}i:1;a:4:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"108512019172509\";s:4:\"name\";s:15:\"Wheaton College\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"131821060195210\";s:4:\"name\";s:4:\"1997\";}s:13:\"concentration\";a:2:{i:0;a:2:{s:2:\"id\";s:15:\"108026662559095\";s:4:\"name\";s:10:\"Philosophy\";}i:1;a:2:{s:2:\"id\";s:15:\"103966102974293\";s:4:\"name\";s:11:\"Mathematics\";}}s:4:\"type\";s:7:\"College\";}i:2;a:4:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"106267379405449\";s:4:\"name\";s:15:\"Denver Seminary\";}s:6:\"degree\";a:2:{s:2:\"id\";s:15:\"189772434390168\";s:4:\"name\";s:18:\"Master of Divinity\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"143018465715205\";s:4:\"name\";s:4:\"2000\";}s:4:\"type\";s:15:\"Graduate School\";}}s:6:\"gender\";s:4:\"male\";s:8:\"timezone\";s:2:\"-4\";s:6:\"locale\";s:5:\"en_US\";s:9:\"languages\";a:3:{i:0;a:2:{s:2:\"id\";s:15:\"106059522759137\";s:4:\"name\";s:7:\"English\";}i:1;a:2:{s:2:\"id\";s:15:\"113301478683221\";s:4:\"name\";s:16:\"American English\";}i:2;a:2:{s:2:\"id\";s:15:\"112134812132840\";s:4:\"name\";s:9:\"Spanglish\";}}s:8:\"verified\";s:1:\"1\";s:12:\"updated_time\";s:24:\"2012-11-02T17:24:32+0000\";}}}}}}"
                ],
                "_social_notify": [
                    "1"
                ],
                "_thumbnail_id": [
                    "4385"
                ]
            },
            "post_type": "post",
            "slug": "the-proof-of-easter",
            "thumbnail": "http://lafayettecc.org/news/wp-content/uploads/2015/03/The-Proof-of-Easter-Series-Graphic-150x112.jpg",
            "title": "The Proof of Easter",
            "url": "http://lafayettecc.org/news/the-proof-of-easter/"
        },
        {
            "alt_excerpt": "We Are Better Together from Converge on Vimeo. Did you know that Lafayette Community Church is part of a larger network of churches called Converge? Why? Well, it's because we believe we are better together. In this video, you can hear our network president sharing a little of his heart regarding our movement of churches.",
            "author": "Pastor Jeff",
            "categories": [
                "News"
            ],
            "content": "<div class=\"embed-container\"><iframe src=\"//player.vimeo.com/video/118712957\" width=\"500\" height=\"281\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>\r\n<p><a href=\"https://vimeo.com/118712957\">We Are Better Together</a> from <a href=\"https://vimeo.com/convergeww\">Converge</a> on <a href=\"https://vimeo.com\">Vimeo</a>.</p>\r\n\r\nDid you know that Lafayette Community Church is part of a larger network of churches called Converge? Why? Well, it's because we believe we are better together. In this video, you can hear our network president sharing a little of his heart regarding our movement of churches.",
            "date": "February 18, 2015",
            "enclosures": [],
            "excerpt": "We Are Better Together from Converge on Vimeo. Did you know that Lafayette Community Church is part of a larger network of churches called Converge? Why? Well, it&#8217;s because we believe we are better together. In this video, you can hear our network president sharing a little of his heart regarding our movement of churches.",
            "filtered": "<div class=\"embed-container\"><iframe src=\"//player.vimeo.com/video/118712957\" width=\"500\" height=\"281\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>\n\n<p><a href=\"https://vimeo.com/118712957\">We Are Better Together</a> from <a href=\"https://vimeo.com/convergeww\">Converge</a> on <a href=\"https://vimeo.com\">Vimeo</a>.</p>\n\n<p>Did you know that Lafayette Community Church is part of a larger network of churches called Converge? Why? Well, it&#8217;s because we believe we are better together. In this video, you can hear our network president sharing a little of his heart regarding our movement of churches.</p>\n",
            "id": 4348,
            "image": false,
            "media": [],
            "meta": {
                "_edit_last": [
                    "2"
                ],
                "_edit_lock": [
                    "1424274809:2"
                ],
                "_encloseme": [
                    "1"
                ],
                "_pingme": [
                    "1"
                ],
                "_social_aggregated_ids": [
                    "a:2:{s:7:\"twitter\";a:1:{i:0;s:18:\"568074722904301568\";}s:8:\"facebook\";a:0:{}}"
                ],
                "_social_aggregation_log": [
                    "a:10:{i:1424275675;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"568074722904301568\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43481424275677\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1424277524;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"568074722904301568\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43481424277527\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1424281153;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"568074722904301568\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43481424281154\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1424285657;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"568074722904301568\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43481424285658\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1424293782;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"568074722904301568\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43481424293784\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1424309012;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"568074722904301568\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43481424309013\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1424337842;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"568074722904301568\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43481424337844\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1424381043;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"568074722904301568\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43481424381044\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1424468665;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"568074722904301568\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43481424468666\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1424642662;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"568074722904301568\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43481424642663\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}}"
                ],
                "_social_broadcast_content": [
                    "a:1:{s:8:\"facebook\";a:1:{s:11:\"81344486454\";s:55:\"New Post: Better Together (Why we are part of Converge)\";}}"
                ],
                "_social_broadcast_meta": [
                    "a:1:{s:8:\"facebook\";a:1:{s:11:\"81344486454\";a:3:{s:4:\"link\";s:35:\"http://lafayettecc.org/news/?p=4348\";s:5:\"title\";s:45:\"Better Together (Why we are part of Converge)\";s:11:\"description\";s:0:\"\";}}}"
                ],
                "_social_broadcasted_ids": [
                    "a:1:{s:8:\"facebook\";a:1:{i:588864215;a:1:{s:29:\"81344486454_10152544976301455\";a:4:{s:7:\"message\";s:55:\"New Post: Better Together (Why we are part of Converge)\";s:4:\"urls\";a:2:{i:0;s:72:\"http://lafayettecc.org/news/better-together-why-we-are-part-of-converge/\";i:1;s:35:\"http://lafayettecc.org/news/?p=4348\";}s:4:\"page\";O:8:\"stdClass\":2:{s:2:\"id\";s:11:\"81344486454\";s:4:\"name\";s:26:\"Lafayette Community Church\";}s:7:\"account\";O:8:\"stdClass\":1:{s:4:\"user\";O:8:\"stdClass\":18:{s:2:\"id\";s:9:\"588864215\";s:4:\"name\";s:16:\"Jeffrey A Mikels\";s:10:\"first_name\";s:7:\"Jeffrey\";s:11:\"middle_name\";s:1:\"A\";s:9:\"last_name\";s:6:\"Mikels\";s:4:\"link\";s:35:\"https://www.facebook.com/jeffmikels\";s:8:\"username\";s:10:\"jeffmikels\";s:8:\"hometown\";a:2:{s:2:\"id\";s:15:\"113003682047870\";s:4:\"name\";s:24:\"Apple Valley, California\";}s:8:\"location\";a:2:{s:2:\"id\";s:15:\"108100962545625\";s:4:\"name\";s:18:\"Lafayette, Indiana\";}s:3:\"bio\";s:206:\"So I usually like me, but sometimes I'm not so sure. Usually, the times I'm not so sure about are the times when I'm getting distracted by a lot of little things and not being really product . . . SQUIRREL!\";s:4:\"work\";a:1:{i:0;a:4:{s:8:\"employer\";a:2:{s:2:\"id\";s:11:\"81344486454\";s:4:\"name\";s:26:\"Lafayette Community Church\";}s:8:\"position\";a:2:{s:2:\"id\";s:15:\"115316565145414\";s:4:\"name\";s:11:\"Lead Pastor\";}s:10:\"start_date\";s:10:\"2006-01-01\";s:8:\"end_date\";s:7:\"0000-00\";}}s:9:\"education\";a:3:{i:0;a:3:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"112064958820151\";s:4:\"name\";s:29:\"Apple Valley Christian School\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"142673469093081\";s:4:\"name\";s:4:\"1993\";}s:4:\"type\";s:11:\"High School\";}i:1;a:4:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"108512019172509\";s:4:\"name\";s:15:\"Wheaton College\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"131821060195210\";s:4:\"name\";s:4:\"1997\";}s:13:\"concentration\";a:2:{i:0;a:2:{s:2:\"id\";s:15:\"108026662559095\";s:4:\"name\";s:10:\"Philosophy\";}i:1;a:2:{s:2:\"id\";s:15:\"103966102974293\";s:4:\"name\";s:11:\"Mathematics\";}}s:4:\"type\";s:7:\"College\";}i:2;a:4:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"106267379405449\";s:4:\"name\";s:15:\"Denver Seminary\";}s:6:\"degree\";a:2:{s:2:\"id\";s:15:\"189772434390168\";s:4:\"name\";s:18:\"Master of Divinity\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"143018465715205\";s:4:\"name\";s:4:\"2000\";}s:4:\"type\";s:15:\"Graduate School\";}}s:6:\"gender\";s:4:\"male\";s:8:\"timezone\";s:2:\"-4\";s:6:\"locale\";s:5:\"en_US\";s:9:\"languages\";a:3:{i:0;a:2:{s:2:\"id\";s:15:\"106059522759137\";s:4:\"name\";s:7:\"English\";}i:1;a:2:{s:2:\"id\";s:15:\"113301478683221\";s:4:\"name\";s:16:\"American English\";}i:2;a:2:{s:2:\"id\";s:15:\"112134812132840\";s:4:\"name\";s:9:\"Spanglish\";}}s:8:\"verified\";s:1:\"1\";s:12:\"updated_time\";s:24:\"2012-11-02T17:24:32+0000\";}}}}}}"
                ],
                "_social_notify": [
                    "1"
                ]
            },
            "post_type": "post",
            "slug": "better-together-why-we-are-part-of-converge",
            "thumbnail": null,
            "title": "Better Together (Why we are part of Converge)",
            "url": "http://lafayettecc.org/news/better-together-why-we-are-part-of-converge/"
        },
        {
            "alt_excerpt": "We are pleased to welcome Jake Atherton as the newest member of our Board of Elders. Here's a video clip of him sharing why he and his family are part of LCC and why he is so optimistic about the future.",
            "author": "Pastor Jeff",
            "categories": [
                "News"
            ],
            "content": "<div class=\"embed-container\"><iframe src=\"https://www.youtube.com/embed/Vywi8K8yGAg\" width=\"300\" height=\"150\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"></iframe></div>\r\nWe are pleased to welcome Jake Atherton as the newest member of our Board of Elders. Here's a video clip of him sharing why he and his family are part of LCC and why he is so optimistic about the future.",
            "date": "February 6, 2015",
            "enclosures": [],
            "excerpt": "We are pleased to welcome Jake Atherton as the newest member of our Board of Elders. Here&#8217;s a video clip of him sharing why he and his family are part of LCC and why he is so optimistic about the future.",
            "filtered": "<div class=\"embed-container\"><iframe src=\"https://www.youtube.com/embed/Vywi8K8yGAg\" width=\"300\" height=\"150\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"></iframe></div>\n\n<p>We are pleased to welcome Jake Atherton as the newest member of our Board of Elders. Here&#8217;s a video clip of him sharing why he and his family are part of LCC and why he is so optimistic about the future.</p>\n",
            "id": 4316,
            "image": false,
            "media": [],
            "meta": {
                "_edit_last": [
                    "2"
                ],
                "_edit_lock": [
                    "1423261035:2"
                ],
                "_encloseme": [
                    "1"
                ],
                "_oembed_1e0cbda1363dbbb72b728f891b4f17fe": [
                    "<iframe width=\"650\" height=\"366\" src=\"http://www.youtube.com/embed/Vywi8K8yGAg?feature=oembed\" frameborder=\"0\" allowfullscreen></iframe>"
                ],
                "_oembed_time_1e0cbda1363dbbb72b728f891b4f17fe": [
                    "1423260946"
                ],
                "_pingme": [
                    "1"
                ],
                "_social_aggregated_ids": [
                    "a:2:{s:7:\"twitter\";a:1:{i:0;s:18:\"563823675104055296\";}s:8:\"facebook\";a:10:{i:0;s:10:\"1119904986\";i:1;s:8:\"20724472\";i:2;s:10:\"1850702340\";i:3;s:9:\"507802382\";i:4;s:10:\"1517672958\";i:5;s:11:\"81344486454\";i:6;s:10:\"1312005842\";i:7;s:15:\"100000088554630\";i:8;s:35:\"10152523788936455_10152526029901455\";i:9;s:9:\"776700315\";}}"
                ],
                "_social_aggregation_log": [
                    "a:10:{i:1423262430;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"563823675104055296\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43161423262431\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:2;}}}}}i:1423265042;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"563823675104055296\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43161423265044\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:1;}}}}}i:1423267817;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"563823675104055296\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43161423267819\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:1;}}}}}i:1423271624;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"563823675104055296\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43161423271625\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1423279442;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"563823675104055296\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43161423279443\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:2;}}}}}i:1423293843;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"563823675104055296\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43161423293844\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:2;}}}}}i:1423323620;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"563823675104055296\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43161423323621\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1423367660;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"563823675104055296\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43161423367661\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1423454238;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"563823675104055296\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152523788936455_10152526029901455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152523788936455\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43161423454239\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:1;}}}}}i:1423627733;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"563823675104055296\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:35:\"10152523788936455_10152526029901455\";s:4:\"type\";s:5:\"reply\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:9:\"parent_id\";s:29:\"81344486454_10152523788936455\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43161423627734\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}}"
                ],
                "_social_broadcast_content": [
                    "a:1:{s:8:\"facebook\";a:1:{s:11:\"81344486454\";s:31:\"New Post: Welcome Jake Atherton\";}}"
                ],
                "_social_broadcast_meta": [
                    "a:1:{s:8:\"facebook\";a:1:{s:11:\"81344486454\";a:3:{s:4:\"link\";s:35:\"http://lafayettecc.org/news/?p=4316\";s:5:\"title\";s:21:\"Welcome Jake Atherton\";s:11:\"description\";s:0:\"\";}}}"
                ],
                "_social_broadcasted_ids": [
                    "a:1:{s:8:\"facebook\";a:1:{i:588864215;a:1:{s:29:\"81344486454_10152523788936455\";a:4:{s:7:\"message\";s:31:\"New Post: Welcome Jake Atherton\";s:4:\"urls\";a:2:{i:0;s:50:\"http://lafayettecc.org/news/welcome-jake-atherton/\";i:1;s:35:\"http://lafayettecc.org/news/?p=4316\";}s:4:\"page\";O:8:\"stdClass\":2:{s:2:\"id\";s:11:\"81344486454\";s:4:\"name\";s:26:\"Lafayette Community Church\";}s:7:\"account\";O:8:\"stdClass\":1:{s:4:\"user\";O:8:\"stdClass\":18:{s:2:\"id\";s:9:\"588864215\";s:4:\"name\";s:16:\"Jeffrey A Mikels\";s:10:\"first_name\";s:7:\"Jeffrey\";s:11:\"middle_name\";s:1:\"A\";s:9:\"last_name\";s:6:\"Mikels\";s:4:\"link\";s:35:\"https://www.facebook.com/jeffmikels\";s:8:\"username\";s:10:\"jeffmikels\";s:8:\"hometown\";a:2:{s:2:\"id\";s:15:\"113003682047870\";s:4:\"name\";s:24:\"Apple Valley, California\";}s:8:\"location\";a:2:{s:2:\"id\";s:15:\"108100962545625\";s:4:\"name\";s:18:\"Lafayette, Indiana\";}s:3:\"bio\";s:206:\"So I usually like me, but sometimes I'm not so sure. Usually, the times I'm not so sure about are the times when I'm getting distracted by a lot of little things and not being really product . . . SQUIRREL!\";s:4:\"work\";a:1:{i:0;a:4:{s:8:\"employer\";a:2:{s:2:\"id\";s:11:\"81344486454\";s:4:\"name\";s:26:\"Lafayette Community Church\";}s:8:\"position\";a:2:{s:2:\"id\";s:15:\"115316565145414\";s:4:\"name\";s:11:\"Lead Pastor\";}s:10:\"start_date\";s:10:\"2006-01-01\";s:8:\"end_date\";s:7:\"0000-00\";}}s:9:\"education\";a:3:{i:0;a:3:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"112064958820151\";s:4:\"name\";s:29:\"Apple Valley Christian School\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"142673469093081\";s:4:\"name\";s:4:\"1993\";}s:4:\"type\";s:11:\"High School\";}i:1;a:4:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"108512019172509\";s:4:\"name\";s:15:\"Wheaton College\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"131821060195210\";s:4:\"name\";s:4:\"1997\";}s:13:\"concentration\";a:2:{i:0;a:2:{s:2:\"id\";s:15:\"108026662559095\";s:4:\"name\";s:10:\"Philosophy\";}i:1;a:2:{s:2:\"id\";s:15:\"103966102974293\";s:4:\"name\";s:11:\"Mathematics\";}}s:4:\"type\";s:7:\"College\";}i:2;a:4:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"106267379405449\";s:4:\"name\";s:15:\"Denver Seminary\";}s:6:\"degree\";a:2:{s:2:\"id\";s:15:\"189772434390168\";s:4:\"name\";s:18:\"Master of Divinity\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"143018465715205\";s:4:\"name\";s:4:\"2000\";}s:4:\"type\";s:15:\"Graduate School\";}}s:6:\"gender\";s:4:\"male\";s:8:\"timezone\";s:2:\"-4\";s:6:\"locale\";s:5:\"en_US\";s:9:\"languages\";a:3:{i:0;a:2:{s:2:\"id\";s:15:\"106059522759137\";s:4:\"name\";s:7:\"English\";}i:1;a:2:{s:2:\"id\";s:15:\"113301478683221\";s:4:\"name\";s:16:\"American English\";}i:2;a:2:{s:2:\"id\";s:15:\"112134812132840\";s:4:\"name\";s:9:\"Spanglish\";}}s:8:\"verified\";s:1:\"1\";s:12:\"updated_time\";s:24:\"2012-11-02T17:24:32+0000\";}}}}}}"
                ],
                "_social_notify": [
                    "1"
                ]
            },
            "post_type": "post",
            "slug": "welcome-jake-atherton",
            "thumbnail": null,
            "title": "Welcome Jake Atherton",
            "url": "http://lafayettecc.org/news/welcome-jake-atherton/"
        },
        {
            "alt_excerpt": "Ladies! We will run a very short women's study starting Monday, February 23 at 6:30. It will last just 4 weeks. We will using Bill Hybels' study guide Too Busy Not To Pray. Unfortunately, we will not be able to offer child care this time around. But we hope you can each find a way&hellip;",
            "author": "Pastor Jeff",
            "categories": [
                "News"
            ],
            "content": "Ladies! We will run a very short women's study starting Monday, February 23 at 6:30. It will last just 4 weeks.\r\n\r\nWe will using Bill Hybels' study guide Too Busy Not To Pray.\r\n\r\nUnfortunately, we will not be able to offer child care this time around. But we hope you can each find a way to make it any how!!\r\n\r\nSign up for the study here: <a href=\"http://www.signupgenius.com/go/10c0e4fa5a929a6f94-toobusy\">http://www.signupgenius.com/go/10c0e4fa5a929a6f94-toobusy</a>\r\n\r\n(We have plans for another study this summer!! Probably one by Angela Thomas.)",
            "date": "February 6, 2015",
            "enclosures": [],
            "excerpt": "Ladies! We will run a very short women&#8217;s study starting Monday, February 23 at 6:30. It will last just 4 weeks. We will using Bill Hybels&#8217; study guide Too Busy Not To Pray. Unfortunately, we will not be able to offer child care this time around. But we hope you can each find a way [&hellip;]",
            "filtered": "<p>Ladies! We will run a very short women&#8217;s study starting Monday, February 23 at 6:30. It will last just 4 weeks.</p>\n\n<p>We will using Bill Hybels&#8217; study guide Too Busy Not To Pray.</p>\n\n<p>Unfortunately, we will not be able to offer child care this time around. But we hope you can each find a way to make it any how!!</p>\n\n<p>Sign up for the study here: <a href=\"http://www.signupgenius.com/go/10c0e4fa5a929a6f94-toobusy\">http://www.signupgenius.com/go/10c0e4fa5a929a6f94-toobusy</a></p>\n\n<p>(We have plans for another study this summer!! Probably one by Angela Thomas.)</p>\n",
            "id": 4313,
            "image": false,
            "media": [],
            "meta": {
                "_edit_last": [
                    "2"
                ],
                "_edit_lock": [
                    "1423258331:2"
                ],
                "_social_aggregated_ids": [
                    "a:2:{s:7:\"twitter\";a:1:{i:0;s:18:\"563783732499578880\";}s:8:\"facebook\";a:0:{}}"
                ],
                "_social_aggregation_log": [
                    "a:10:{i:1423253301;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"563783732499578880\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43131423253302\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1423255983;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"563783732499578880\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43131423255984\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1423258728;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"563783732499578880\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43131423258730\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1423262429;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"563783732499578880\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43131423262430\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1423269630;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"563783732499578880\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43131423269631\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1423284923;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"563783732499578880\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43131423284924\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1423314621;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"563783732499578880\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43131423314622\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1423358643;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"563783732499578880\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43131423358644\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1423445042;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"563783732499578880\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43131423445044\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1423618670;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"563783732499578880\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43131423618671\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}}"
                ],
                "_social_broadcast_content": [
                    "a:1:{s:8:\"facebook\";a:1:{s:11:\"81344486454\";s:33:\"New Post: New Ladies' Bible Study\";}}"
                ],
                "_social_broadcast_meta": [
                    "a:1:{s:8:\"facebook\";a:1:{s:11:\"81344486454\";a:3:{s:4:\"link\";s:35:\"http://lafayettecc.org/news/?p=4313\";s:5:\"title\";s:29:\"New Ladies&#8217; Bible Study\";s:11:\"description\";s:0:\"\";}}}"
                ],
                "_social_broadcasted_ids": [
                    "a:1:{s:8:\"facebook\";a:1:{i:588864215;a:1:{s:29:\"81344486454_10152523576266455\";a:4:{s:7:\"message\";s:33:\"New Post: New Ladies' Bible Study\";s:4:\"urls\";a:2:{i:0;s:51:\"http://lafayettecc.org/news/new-ladies-bible-study/\";i:1;s:35:\"http://lafayettecc.org/news/?p=4313\";}s:4:\"page\";O:8:\"stdClass\":2:{s:2:\"id\";s:11:\"81344486454\";s:4:\"name\";s:26:\"Lafayette Community Church\";}s:7:\"account\";O:8:\"stdClass\":1:{s:4:\"user\";O:8:\"stdClass\":18:{s:2:\"id\";s:9:\"588864215\";s:4:\"name\";s:16:\"Jeffrey A Mikels\";s:10:\"first_name\";s:7:\"Jeffrey\";s:11:\"middle_name\";s:1:\"A\";s:9:\"last_name\";s:6:\"Mikels\";s:4:\"link\";s:35:\"https://www.facebook.com/jeffmikels\";s:8:\"username\";s:10:\"jeffmikels\";s:8:\"hometown\";a:2:{s:2:\"id\";s:15:\"113003682047870\";s:4:\"name\";s:24:\"Apple Valley, California\";}s:8:\"location\";a:2:{s:2:\"id\";s:15:\"108100962545625\";s:4:\"name\";s:18:\"Lafayette, Indiana\";}s:3:\"bio\";s:206:\"So I usually like me, but sometimes I'm not so sure. Usually, the times I'm not so sure about are the times when I'm getting distracted by a lot of little things and not being really product . . . SQUIRREL!\";s:4:\"work\";a:1:{i:0;a:4:{s:8:\"employer\";a:2:{s:2:\"id\";s:11:\"81344486454\";s:4:\"name\";s:26:\"Lafayette Community Church\";}s:8:\"position\";a:2:{s:2:\"id\";s:15:\"115316565145414\";s:4:\"name\";s:11:\"Lead Pastor\";}s:10:\"start_date\";s:10:\"2006-01-01\";s:8:\"end_date\";s:7:\"0000-00\";}}s:9:\"education\";a:3:{i:0;a:3:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"112064958820151\";s:4:\"name\";s:29:\"Apple Valley Christian School\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"142673469093081\";s:4:\"name\";s:4:\"1993\";}s:4:\"type\";s:11:\"High School\";}i:1;a:4:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"108512019172509\";s:4:\"name\";s:15:\"Wheaton College\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"131821060195210\";s:4:\"name\";s:4:\"1997\";}s:13:\"concentration\";a:2:{i:0;a:2:{s:2:\"id\";s:15:\"108026662559095\";s:4:\"name\";s:10:\"Philosophy\";}i:1;a:2:{s:2:\"id\";s:15:\"103966102974293\";s:4:\"name\";s:11:\"Mathematics\";}}s:4:\"type\";s:7:\"College\";}i:2;a:4:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"106267379405449\";s:4:\"name\";s:15:\"Denver Seminary\";}s:6:\"degree\";a:2:{s:2:\"id\";s:15:\"189772434390168\";s:4:\"name\";s:18:\"Master of Divinity\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"143018465715205\";s:4:\"name\";s:4:\"2000\";}s:4:\"type\";s:15:\"Graduate School\";}}s:6:\"gender\";s:4:\"male\";s:8:\"timezone\";s:2:\"-4\";s:6:\"locale\";s:5:\"en_US\";s:9:\"languages\";a:3:{i:0;a:2:{s:2:\"id\";s:15:\"106059522759137\";s:4:\"name\";s:7:\"English\";}i:1;a:2:{s:2:\"id\";s:15:\"113301478683221\";s:4:\"name\";s:16:\"American English\";}i:2;a:2:{s:2:\"id\";s:15:\"112134812132840\";s:4:\"name\";s:9:\"Spanglish\";}}s:8:\"verified\";s:1:\"1\";s:12:\"updated_time\";s:24:\"2012-11-02T17:24:32+0000\";}}}}}}"
                ],
                "_social_notify": [
                    "1"
                ]
            },
            "post_type": "post",
            "slug": "new-ladies-bible-study",
            "thumbnail": null,
            "title": "New Ladies&#8217; Bible Study",
            "url": "http://lafayettecc.org/news/new-ladies-bible-study/"
        },
        {
            "alt_excerpt": "[audio mp3=\"http://lafayettecc.org/news/wp-content/uploads/2015/02/2015-02-03-Comments.mp3\" preload=\"metadata\"][/audio] I've been thinking about putting together a weekly podcast with reflections from the previous Sunday, and I thought I should give it a try this week. Does something like this sound interesting and/or beneficial to you?",
            "author": "Pastor Jeff",
            "categories": [
                "News"
            ],
            "content": "[audio mp3=\"http://lafayettecc.org/news/wp-content/uploads/2015/02/2015-02-03-Comments.mp3\" preload=\"metadata\"][/audio]\r\n\r\nI've been thinking about putting together a weekly podcast with reflections from the previous Sunday, and I thought I should give it a try this week. Does something like this sound interesting and/or beneficial to you?",
            "date": "February 3, 2015",
            "enclosures": {
                "audio": {
                    "details": {
                        "author": "",
                        "explicit": "",
                        "format": "audio",
                        "keywords": "",
                        "length": ""
                    },
                    "size": "531912\r",
                    "type": "audio/mpeg\r",
                    "url": "http://lafayettecc.org/news/wp-content/uploads/2015/02/2015-02-03-Comments.mp3\r"
                }
            },
            "excerpt": "downloads: audio I&#8217;ve been thinking about putting together a weekly podcast with reflections from the previous Sunday, and I thought I should give it a try this week. Does something like this sound interesting and/or beneficial to you?",
            "filtered": "<div class=\"enclosure_links\">downloads:  <a href=\"http://lafayettecc.org/news/wp-content/uploads/2015/02/2015-02-03-Comments.mp3\r\">audio</a> </div>\n\n<p>I&#8217;ve been thinking about putting together a weekly podcast with reflections from the previous Sunday, and I thought I should give it a try this week. Does something like this sound interesting and/or beneficial to you?</p>\n",
            "id": 4302,
            "image": false,
            "media": {
                "4303": {
                    "ID": 4303,
                    "comment_count": "0",
                    "comment_status": "open",
                    "filter": "raw",
                    "guid": "http://lafayettecc.org/news/wp-content/uploads/2015/02/2015-02-03-Comments.mp3",
                    "menu_order": 0,
                    "ping_status": "open",
                    "pinged": "",
                    "post_author": "2",
                    "post_category": "0",
                    "post_content": "\"Our God\" from LCC Covers by Lafayette Community Church. Released: 2013.",
                    "post_content_filtered": "",
                    "post_date": "2015-02-03 14:42:11",
                    "post_date_gmt": "2015-02-03 18:42:11",
                    "post_excerpt": "",
                    "post_mime_type": "audio/mpeg",
                    "post_modified": "2015-02-03 14:42:18",
                    "post_modified_gmt": "2015-02-03 18:42:18",
                    "post_name": "our-god",
                    "post_parent": 4302,
                    "post_password": "",
                    "post_status": "inherit",
                    "post_title": "Our God",
                    "post_type": "attachment",
                    "to_ping": ""
                }
            },
            "meta": {
                "_edit_last": [
                    "2"
                ],
                "_edit_lock": [
                    "1422989031:2"
                ],
                "_social_aggregated_ids": [
                    "a:2:{s:7:\"twitter\";a:1:{i:0;s:18:\"562683473081950211\";}s:8:\"facebook\";a:3:{i:0;s:8:\"32305170\";i:1;s:8:\"32300556\";i:2;s:10:\"1411211293\";}}"
                ],
                "_social_aggregation_log": [
                    "a:10:{i:1422991442;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"562683473081950211\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43021422991443\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1422993354;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"562683473081950211\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43021422993355\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1422996796;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"562683473081950211\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43021422996797\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1423000398;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"562683473081950211\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43021423000399\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1423007786;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"562683473081950211\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43021423007788\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1423022909;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"562683473081950211\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43021423022910\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:2;}}}}}i:1423051726;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"562683473081950211\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43021423051728\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1423095136;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"562683473081950211\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43021423095137\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:1;}}}}}i:1423182242;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"562683473081950211\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43021423182244\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1423356502;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"562683473081950211\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"43021423356503\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}}"
                ],
                "_social_broadcast_content": [
                    "a:1:{s:8:\"facebook\";a:1:{s:11:\"81344486454\";s:42:\"New Post: Reflections on Commitment Sunday\";}}"
                ],
                "_social_broadcast_meta": [
                    "a:1:{s:8:\"facebook\";a:1:{s:11:\"81344486454\";a:3:{s:4:\"link\";s:35:\"http://lafayettecc.org/news/?p=4302\";s:5:\"title\";s:32:\"Reflections on Commitment Sunday\";s:11:\"description\";s:0:\"\";}}}"
                ],
                "_social_broadcasted_ids": [
                    "a:1:{s:8:\"facebook\";a:1:{i:588864215;a:1:{s:29:\"81344486454_10152518563606455\";a:4:{s:7:\"message\";s:42:\"New Post: Reflections on Commitment Sunday\";s:4:\"urls\";a:2:{i:0;s:61:\"http://lafayettecc.org/news/reflections-on-commitment-sunday/\";i:1;s:35:\"http://lafayettecc.org/news/?p=4302\";}s:4:\"page\";O:8:\"stdClass\":2:{s:2:\"id\";s:11:\"81344486454\";s:4:\"name\";s:26:\"Lafayette Community Church\";}s:7:\"account\";O:8:\"stdClass\":1:{s:4:\"user\";O:8:\"stdClass\":18:{s:2:\"id\";s:9:\"588864215\";s:4:\"name\";s:16:\"Jeffrey A Mikels\";s:10:\"first_name\";s:7:\"Jeffrey\";s:11:\"middle_name\";s:1:\"A\";s:9:\"last_name\";s:6:\"Mikels\";s:4:\"link\";s:35:\"https://www.facebook.com/jeffmikels\";s:8:\"username\";s:10:\"jeffmikels\";s:8:\"hometown\";a:2:{s:2:\"id\";s:15:\"113003682047870\";s:4:\"name\";s:24:\"Apple Valley, California\";}s:8:\"location\";a:2:{s:2:\"id\";s:15:\"108100962545625\";s:4:\"name\";s:18:\"Lafayette, Indiana\";}s:3:\"bio\";s:206:\"So I usually like me, but sometimes I'm not so sure. Usually, the times I'm not so sure about are the times when I'm getting distracted by a lot of little things and not being really product . . . SQUIRREL!\";s:4:\"work\";a:1:{i:0;a:4:{s:8:\"employer\";a:2:{s:2:\"id\";s:11:\"81344486454\";s:4:\"name\";s:26:\"Lafayette Community Church\";}s:8:\"position\";a:2:{s:2:\"id\";s:15:\"115316565145414\";s:4:\"name\";s:11:\"Lead Pastor\";}s:10:\"start_date\";s:10:\"2006-01-01\";s:8:\"end_date\";s:7:\"0000-00\";}}s:9:\"education\";a:3:{i:0;a:3:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"112064958820151\";s:4:\"name\";s:29:\"Apple Valley Christian School\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"142673469093081\";s:4:\"name\";s:4:\"1993\";}s:4:\"type\";s:11:\"High School\";}i:1;a:4:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"108512019172509\";s:4:\"name\";s:15:\"Wheaton College\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"131821060195210\";s:4:\"name\";s:4:\"1997\";}s:13:\"concentration\";a:2:{i:0;a:2:{s:2:\"id\";s:15:\"108026662559095\";s:4:\"name\";s:10:\"Philosophy\";}i:1;a:2:{s:2:\"id\";s:15:\"103966102974293\";s:4:\"name\";s:11:\"Mathematics\";}}s:4:\"type\";s:7:\"College\";}i:2;a:4:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"106267379405449\";s:4:\"name\";s:15:\"Denver Seminary\";}s:6:\"degree\";a:2:{s:2:\"id\";s:15:\"189772434390168\";s:4:\"name\";s:18:\"Master of Divinity\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"143018465715205\";s:4:\"name\";s:4:\"2000\";}s:4:\"type\";s:15:\"Graduate School\";}}s:6:\"gender\";s:4:\"male\";s:8:\"timezone\";s:2:\"-4\";s:6:\"locale\";s:5:\"en_US\";s:9:\"languages\";a:3:{i:0;a:2:{s:2:\"id\";s:15:\"106059522759137\";s:4:\"name\";s:7:\"English\";}i:1;a:2:{s:2:\"id\";s:15:\"113301478683221\";s:4:\"name\";s:16:\"American English\";}i:2;a:2:{s:2:\"id\";s:15:\"112134812132840\";s:4:\"name\";s:9:\"Spanglish\";}}s:8:\"verified\";s:1:\"1\";s:12:\"updated_time\";s:24:\"2012-11-02T17:24:32+0000\";}}}}}}"
                ],
                "_social_notify": [
                    "1"
                ],
                "enclosure": [
                    "http://lafayettecc.org/news/wp-content/uploads/2015/02/2015-02-03-Comments.mp3\r\n531912\r\naudio/mpeg\r\na:5:{s:6:\"format\";s:5:\"audio\";s:8:\"keywords\";s:0:\"\";s:6:\"author\";s:0:\"\";s:6:\"length\";s:0:\"\";s:8:\"explicit\";s:0:\"\";}"
                ]
            },
            "post_type": "post",
            "slug": "reflections-on-commitment-sunday",
            "thumbnail": null,
            "title": "Reflections on Commitment Sunday",
            "url": "http://lafayettecc.org/news/reflections-on-commitment-sunday/"
        },
        {
            "alt_excerpt": "Kevin surprised us and the whole worship band last week by spontaneously leading us in his unfinished song, but when the rest of the band got into the groove, the song simply came together on its own. The band had never even heard this song before they played it live in the first worship gathering!&hellip;",
            "author": "Pastor Jeff",
            "categories": [
                "News"
            ],
            "content": "<div class=\"embed-container\"><iframe src=\"https://www.youtube.com/embed/YA-uJTVq-zg\" width=\"560\" height=\"315\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"></iframe></div>\r\nKevin surprised us and the whole worship band last week by spontaneously leading us in his unfinished song, but when the rest of the band got into the groove, the song simply came together on its own.\r\n\r\nThe band had never even heard this song before they played it live in the first worship gathering! This recording is from the second worship gathering.",
            "date": "January 31, 2015",
            "enclosures": [],
            "excerpt": "Kevin surprised us and the whole worship band last week by spontaneously leading us in his unfinished song, but when the rest of the band got into the groove, the song simply came together on its own. The band had never even heard this song before they played it live in the first worship gathering! [&hellip;]",
            "filtered": "<div class=\"embed-container\"><iframe src=\"https://www.youtube.com/embed/YA-uJTVq-zg\" width=\"560\" height=\"315\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"></iframe></div>\n\n<p>Kevin surprised us and the whole worship band last week by spontaneously leading us in his unfinished song, but when the rest of the band got into the groove, the song simply came together on its own.</p>\n\n<p>The band had never even heard this song before they played it live in the first worship gathering! This recording is from the second worship gathering.</p>\n",
            "id": 4296,
            "image": false,
            "media": [],
            "meta": {
                "_edit_last": [
                    "2"
                ],
                "_edit_lock": [
                    "1422723792:2"
                ],
                "_oembed_4d7ef7f351ec7adaf9f9c448af60f31a": [
                    "<iframe width=\"650\" height=\"366\" src=\"https://www.youtube.com/embed/YA-uJTVq-zg?feature=oembed\" frameborder=\"0\" allowfullscreen></iframe>"
                ],
                "_oembed_f35736701617d285282d4c13cd4cea14": [
                    "<iframe width=\"650\" height=\"366\" src=\"https://www.youtube.com/embed/YA-uJTVq-zg?feature=oembed\" frameborder=\"0\" allowfullscreen></iframe>"
                ],
                "_oembed_time_4d7ef7f351ec7adaf9f9c448af60f31a": [
                    "1422723775"
                ],
                "_oembed_time_f35736701617d285282d4c13cd4cea14": [
                    "1422723720"
                ],
                "_social_aggregated_ids": [
                    "a:2:{s:7:\"twitter\";a:1:{i:0;s:18:\"561570844527566848\";}s:8:\"facebook\";a:2:{i:0;s:10:\"1165650128\";i:1;s:10:\"1411211293\";}}"
                ],
                "_social_aggregation_log": [
                    "a:10:{i:1422725000;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"561570844527566848\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42961422725001\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1422726807;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"561570844527566848\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42961422726808\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1422729664;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"561570844527566848\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42961422729665\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:1;}}}}}i:1422734189;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"561570844527566848\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42961422734190\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1422741408;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"561570844527566848\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42961422741409\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1422756507;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"561570844527566848\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42961422756508\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1422785800;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"561570844527566848\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42961422785801\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1422829444;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"561570844527566848\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42961422829445\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1422916706;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"561570844527566848\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42961422916707\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:1;}}}}}i:1423089649;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"561570844527566848\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42961423089650\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}}"
                ],
                "_social_broadcast_content": [
                    "a:2:{s:7:\"twitter\";a:1:{i:26746377;s:78:\"New Post: Surprised by an Original Song... http://lafayettecc.org/news/?p=4296\";}s:8:\"facebook\";a:1:{s:11:\"81344486454\";s:42:\"New Post: Surprised by an Original Song...\";}}"
                ],
                "_social_broadcast_meta": [
                    "a:2:{s:7:\"twitter\";a:1:{i:26746377;a:0:{}}s:8:\"facebook\";a:1:{s:11:\"81344486454\";a:3:{s:4:\"link\";s:35:\"http://lafayettecc.org/news/?p=4296\";s:5:\"title\";s:36:\"Surprised by an Original Song&#8230;\";s:11:\"description\";s:0:\"\";}}}"
                ],
                "_social_broadcasted_ids": [
                    "a:2:{s:7:\"twitter\";a:1:{i:26746377;a:1:{s:18:\"561570822624522241\";a:3:{s:7:\"message\";s:3372:\"eyJjcmVhdGVkX2F0IjoiU2F0IEphbiAzMSAxNzowNDo1MiArMDAwMCAyMDE1IiwiaWQiOiI1NjE1NzA4MjI2MjQ1MjIyNDEiLCJpZF9zdHIiOiI1NjE1NzA4MjI2MjQ1MjIyNDEiLCJ0ZXh0IjoiTmV3IFBvc3Q6IFN1cnByaXNlZCBieSBhbiBPcmlnaW5hbCBTb25nLi4uIGh0dHA6XC9cL3QuY29cL09MYVBaQmVEbkciLCJzb3VyY2UiOiI8YSBocmVmPVwiaHR0cHM6XC9cL3NvcHJlc3RvLm1haWxjaGltcC5jb21cIiByZWw9XCJub2ZvbGxvd1wiPlNvY2lhbCBQcm94eSBieSBNYWlsY2hpbXA8XC9hPiIsInRydW5jYXRlZCI6ZmFsc2UsImluX3JlcGx5X3RvX3N0YXR1c19pZCI6bnVsbCwiaW5fcmVwbHlfdG9fc3RhdHVzX2lkX3N0ciI6bnVsbCwiaW5fcmVwbHlfdG9fdXNlcl9pZCI6bnVsbCwiaW5fcmVwbHlfdG9fdXNlcl9pZF9zdHIiOm51bGwsImluX3JlcGx5X3RvX3NjcmVlbl9uYW1lIjpudWxsLCJ1c2VyIjp7ImlkIjoiMjY3NDYzNzciLCJpZF9zdHIiOiIyNjc0NjM3NyIsIm5hbWUiOiJMYWZheWV0dGUgQ29tbXVuaXR5Iiwic2NyZWVuX25hbWUiOiJsYWZheWV0dGVjYyIsImxvY2F0aW9uIjoiTGFmYXlldHRlLCBJbmRpYW5hIiwicHJvZmlsZV9sb2NhdGlvbiI6bnVsbCwiZGVzY3JpcHRpb24iOiJMYWZheWV0dGUgQ29tbXVuaXR5IENodXJjaCBpcyBhIHlvdW5nIGNodXJjaCBoZWxwaW5nIHBlb3BsZSB0YWtlIHRoZWlyIG5leHQgc3RlcHMgb2YgZmFpdGguIiwidXJsIjoiaHR0cDpcL1wvdC5jb1wvcU0xbVhnS2pQOSIsImVudGl0aWVzIjp7InVybCI6eyJ1cmxzIjpbeyJ1cmwiOiJodHRwOlwvXC90LmNvXC9xTTFtWGdLalA5IiwiZXhwYW5kZWRfdXJsIjoiaHR0cDpcL1wvbGFmYXlldHRlY2Mub3JnIiwiZGlzcGxheV91cmwiOiJsYWZheWV0dGVjYy5vcmciLCJpbmRpY2VzIjpbMCwyMl19XX0sImRlc2NyaXB0aW9uIjp7InVybHMiOltdfX0sInByb3RlY3RlZCI6ZmFsc2UsImZvbGxvd2Vyc19jb3VudCI6ODIsImZyaWVuZHNfY291bnQiOjcsImxpc3RlZF9jb3VudCI6NCwiY3JlYXRlZF9hdCI6IlRodSBNYXIgMjYgMTM6MTc6NDIgKzAwMDAgMjAwOSIsImZhdm91cml0ZXNfY291bnQiOjUsInV0Y19vZmZzZXQiOi0xODAwMCwidGltZV96b25lIjoiSW5kaWFuYSAoRWFzdCkiLCJnZW9fZW5hYmxlZCI6ZmFsc2UsInZlcmlmaWVkIjpmYWxzZSwic3RhdHVzZXNfY291bnQiOjEwNjMsImxhbmciOiJlbiIsImNvbnRyaWJ1dG9yc19lbmFibGVkIjpmYWxzZSwiaXNfdHJhbnNsYXRvciI6ZmFsc2UsImlzX3RyYW5zbGF0aW9uX2VuYWJsZWQiOmZhbHNlLCJwcm9maWxlX2JhY2tncm91bmRfY29sb3IiOiIwMDAwMDAiLCJwcm9maWxlX2JhY2tncm91bmRfaW1hZ2VfdXJsIjoiaHR0cDpcL1wvYWJzLnR3aW1nLmNvbVwvaW1hZ2VzXC90aGVtZXNcL3RoZW1lNVwvYmcuZ2lmIiwicHJvZmlsZV9iYWNrZ3JvdW5kX2ltYWdlX3VybF9odHRwcyI6Imh0dHBzOlwvXC9hYnMudHdpbWcuY29tXC9pbWFnZXNcL3RoZW1lc1wvdGhlbWU1XC9iZy5naWYiLCJwcm9maWxlX2JhY2tncm91bmRfdGlsZSI6ZmFsc2UsInByb2ZpbGVfaW1hZ2VfdXJsIjoiaHR0cDpcL1wvcGJzLnR3aW1nLmNvbVwvcHJvZmlsZV9pbWFnZXNcLzUyMDIzMTY5NTM2Mjk2NTUwNFwvcDhlVTlkZFZfbm9ybWFsLmpwZWciLCJwcm9maWxlX2ltYWdlX3VybF9odHRwcyI6Imh0dHBzOlwvXC9wYnMudHdpbWcuY29tXC9wcm9maWxlX2ltYWdlc1wvNTIwMjMxNjk1MzYyOTY1NTA0XC9wOGVVOWRkVl9ub3JtYWwuanBlZyIsInByb2ZpbGVfYmFubmVyX3VybCI6Imh0dHBzOlwvXC9wYnMudHdpbWcuY29tXC9wcm9maWxlX2Jhbm5lcnNcLzI2NzQ2Mzc3XC8xNDEyODY3OTk4IiwicHJvZmlsZV9saW5rX2NvbG9yIjoiRkE3NDNFIiwicHJvZmlsZV9zaWRlYmFyX2JvcmRlcl9jb2xvciI6IjAwMDAwMCIsInByb2ZpbGVfc2lkZWJhcl9maWxsX2NvbG9yIjoiMDAwMDAwIiwicHJvZmlsZV90ZXh0X2NvbG9yIjoiMDAwMDAwIiwicHJvZmlsZV91c2VfYmFja2dyb3VuZF9pbWFnZSI6ZmFsc2UsImRlZmF1bHRfcHJvZmlsZSI6ZmFsc2UsImRlZmF1bHRfcHJvZmlsZV9pbWFnZSI6ZmFsc2UsImZvbGxvd2luZyI6ZmFsc2UsImZvbGxvd19yZXF1ZXN0X3NlbnQiOmZhbHNlLCJub3RpZmljYXRpb25zIjpmYWxzZX0sImdlbyI6bnVsbCwiY29vcmRpbmF0ZXMiOm51bGwsInBsYWNlIjpudWxsLCJjb250cmlidXRvcnMiOm51bGwsInJldHdlZXRfY291bnQiOjAsImZhdm9yaXRlX2NvdW50IjowLCJlbnRpdGllcyI6eyJoYXNodGFncyI6W10sInN5bWJvbHMiOltdLCJ1c2VyX21lbnRpb25zIjpbXSwidXJscyI6W3sidXJsIjoiaHR0cDpcL1wvdC5jb1wvT0xhUFpCZURuRyIsImV4cGFuZGVkX3VybCI6Imh0dHA6XC9cL2xhZmF5ZXR0ZWNjLm9yZ1wvbmV3c1wvP3A9NDI5NiIsImRpc3BsYXlfdXJsIjoibGFmYXlldHRlY2Mub3JnXC9uZXdzXC8/cD00Mjk2IiwiaW5kaWNlcyI6WzQzLDY1XX1dfSwiZmF2b3JpdGVkIjpmYWxzZSwicmV0d2VldGVkIjpmYWxzZSwicG9zc2libHlfc2Vuc2l0aXZlIjpmYWxzZSwibGFuZyI6ImVuIn0=\";s:4:\"urls\";a:2:{i:0;s:58:\"http://lafayettecc.org/news/surprised-by-an-original-song/\";i:1;s:35:\"http://lafayettecc.org/news/?p=4296\";}s:7:\"account\";O:8:\"stdClass\":1:{s:4:\"user\";O:8:\"stdClass\":39:{s:2:\"id\";s:8:\"26746377\";s:6:\"id_str\";s:8:\"26746377\";s:4:\"name\";s:19:\"Lafayette Community\";s:11:\"screen_name\";s:11:\"lafayettecc\";s:8:\"location\";s:18:\"Lafayette, Indiana\";s:11:\"description\";s:89:\"Lafayette Community Church is a new church helping people take their next steps of faith.\";s:3:\"url\";s:22:\"http://t.co/qM1mXgKjP9\";s:8:\"entities\";a:1:{s:3:\"url\";a:1:{s:4:\"urls\";a:1:{i:0;a:4:{s:3:\"url\";s:22:\"http://t.co/qM1mXgKjP9\";s:12:\"expanded_url\";s:22:\"http://lafayettecc.org\";s:11:\"display_url\";s:15:\"lafayettecc.org\";s:7:\"indices\";a:2:{i:0;s:1:\"0\";i:1;s:2:\"22\";}}}}}s:9:\"protected\";s:1:\"0\";s:15:\"followers_count\";s:2:\"65\";s:13:\"friends_count\";s:1:\"7\";s:12:\"listed_count\";s:1:\"4\";s:10:\"created_at\";s:30:\"Thu Mar 26 13:17:42 +0000 2009\";s:16:\"favourites_count\";s:1:\"0\";s:10:\"utc_offset\";s:6:\"-14400\";s:9:\"time_zone\";s:14:\"Indiana (East)\";s:11:\"geo_enabled\";s:1:\"0\";s:8:\"verified\";s:1:\"0\";s:14:\"statuses_count\";s:3:\"640\";s:4:\"lang\";s:2:\"en\";s:6:\"status\";a:13:{s:10:\"created_at\";s:30:\"Tue Oct 01 21:47:57 +0000 2013\";s:2:\"id\";s:18:\"385159174922842112\";s:6:\"id_str\";s:18:\"385159174922842112\";s:4:\"text\";s:138:\"Lifegroups for the week are starting tonight! If you need help finding one, contact Pastor Jeff or Pastor Billy.... http://t.co/5x3vgvl3Ez\";s:6:\"source\";s:8:\"Facebook\";s:9:\"truncated\";s:1:\"0\";s:13:\"retweet_count\";s:1:\"0\";s:14:\"favorite_count\";s:1:\"0\";s:8:\"entities\";a:1:{s:4:\"urls\";a:1:{i:0;a:4:{s:3:\"url\";s:22:\"http://t.co/5x3vgvl3Ez\";s:12:\"expanded_url\";s:22:\"http://fb.me/2X0j4VqpU\";s:11:\"display_url\";s:15:\"fb.me/2X0j4VqpU\";s:7:\"indices\";a:2:{i:0;s:3:\"116\";i:1;s:3:\"138\";}}}}s:9:\"favorited\";s:1:\"0\";s:9:\"retweeted\";s:1:\"0\";s:18:\"possibly_sensitive\";s:1:\"0\";s:4:\"lang\";s:2:\"en\";}s:20:\"contributors_enabled\";s:1:\"0\";s:13:\"is_translator\";s:1:\"0\";s:24:\"profile_background_color\";s:6:\"352726\";s:28:\"profile_background_image_url\";s:48:\"http://abs.twimg.com/images/themes/theme5/bg.gif\";s:34:\"profile_background_image_url_https\";s:49:\"https://abs.twimg.com/images/themes/theme5/bg.gif\";s:23:\"profile_background_tile\";s:1:\"0\";s:17:\"profile_image_url\";s:67:\"http://a0.twimg.com/profile_images/110688601/cross_thumb_normal.jpg\";s:23:\"profile_image_url_https\";s:69:\"https://si0.twimg.com/profile_images/110688601/cross_thumb_normal.jpg\";s:18:\"profile_link_color\";s:6:\"D02B55\";s:28:\"profile_sidebar_border_color\";s:6:\"829D5E\";s:26:\"profile_sidebar_fill_color\";s:6:\"99CC33\";s:18:\"profile_text_color\";s:6:\"3E4415\";s:28:\"profile_use_background_image\";s:1:\"1\";s:15:\"default_profile\";s:1:\"0\";s:21:\"default_profile_image\";s:1:\"0\";s:9:\"following\";s:1:\"0\";s:19:\"follow_request_sent\";s:1:\"0\";s:13:\"notifications\";s:1:\"0\";}}}}}s:8:\"facebook\";a:1:{i:588864215;a:1:{s:29:\"81344486454_10152512752626455\";a:4:{s:7:\"message\";s:42:\"New Post: Surprised by an Original Song...\";s:4:\"urls\";a:2:{i:0;s:58:\"http://lafayettecc.org/news/surprised-by-an-original-song/\";i:1;s:35:\"http://lafayettecc.org/news/?p=4296\";}s:4:\"page\";O:8:\"stdClass\":2:{s:2:\"id\";s:11:\"81344486454\";s:4:\"name\";s:26:\"Lafayette Community Church\";}s:7:\"account\";O:8:\"stdClass\":1:{s:4:\"user\";O:8:\"stdClass\":18:{s:2:\"id\";s:9:\"588864215\";s:4:\"name\";s:16:\"Jeffrey A Mikels\";s:10:\"first_name\";s:7:\"Jeffrey\";s:11:\"middle_name\";s:1:\"A\";s:9:\"last_name\";s:6:\"Mikels\";s:4:\"link\";s:35:\"https://www.facebook.com/jeffmikels\";s:8:\"username\";s:10:\"jeffmikels\";s:8:\"hometown\";a:2:{s:2:\"id\";s:15:\"113003682047870\";s:4:\"name\";s:24:\"Apple Valley, California\";}s:8:\"location\";a:2:{s:2:\"id\";s:15:\"108100962545625\";s:4:\"name\";s:18:\"Lafayette, Indiana\";}s:3:\"bio\";s:206:\"So I usually like me, but sometimes I'm not so sure. Usually, the times I'm not so sure about are the times when I'm getting distracted by a lot of little things and not being really product . . . SQUIRREL!\";s:4:\"work\";a:1:{i:0;a:4:{s:8:\"employer\";a:2:{s:2:\"id\";s:11:\"81344486454\";s:4:\"name\";s:26:\"Lafayette Community Church\";}s:8:\"position\";a:2:{s:2:\"id\";s:15:\"115316565145414\";s:4:\"name\";s:11:\"Lead Pastor\";}s:10:\"start_date\";s:10:\"2006-01-01\";s:8:\"end_date\";s:7:\"0000-00\";}}s:9:\"education\";a:3:{i:0;a:3:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"112064958820151\";s:4:\"name\";s:29:\"Apple Valley Christian School\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"142673469093081\";s:4:\"name\";s:4:\"1993\";}s:4:\"type\";s:11:\"High School\";}i:1;a:4:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"108512019172509\";s:4:\"name\";s:15:\"Wheaton College\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"131821060195210\";s:4:\"name\";s:4:\"1997\";}s:13:\"concentration\";a:2:{i:0;a:2:{s:2:\"id\";s:15:\"108026662559095\";s:4:\"name\";s:10:\"Philosophy\";}i:1;a:2:{s:2:\"id\";s:15:\"103966102974293\";s:4:\"name\";s:11:\"Mathematics\";}}s:4:\"type\";s:7:\"College\";}i:2;a:4:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"106267379405449\";s:4:\"name\";s:15:\"Denver Seminary\";}s:6:\"degree\";a:2:{s:2:\"id\";s:15:\"189772434390168\";s:4:\"name\";s:18:\"Master of Divinity\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"143018465715205\";s:4:\"name\";s:4:\"2000\";}s:4:\"type\";s:15:\"Graduate School\";}}s:6:\"gender\";s:4:\"male\";s:8:\"timezone\";s:2:\"-4\";s:6:\"locale\";s:5:\"en_US\";s:9:\"languages\";a:3:{i:0;a:2:{s:2:\"id\";s:15:\"106059522759137\";s:4:\"name\";s:7:\"English\";}i:1;a:2:{s:2:\"id\";s:15:\"113301478683221\";s:4:\"name\";s:16:\"American English\";}i:2;a:2:{s:2:\"id\";s:15:\"112134812132840\";s:4:\"name\";s:9:\"Spanglish\";}}s:8:\"verified\";s:1:\"1\";s:12:\"updated_time\";s:24:\"2012-11-02T17:24:32+0000\";}}}}}}"
                ],
                "_social_notify": [
                    "1"
                ]
            },
            "post_type": "post",
            "slug": "surprised-by-an-original-song",
            "thumbnail": null,
            "title": "Surprised by an Original Song&#8230;",
            "url": "http://lafayettecc.org/news/surprised-by-an-original-song/"
        },
        {
            "alt_excerpt": "During December of 2014, the people of LCC rallied in our largest ever expression of financial generosity. Through small donations as well as large, we were able to gather thousands of dollars for starting new churches in Indiana, launching our own building fund, and most importantly, helping out a local agency right here in Lafayette&hellip;",
            "author": "Pastor Jeff",
            "categories": [
                "News"
            ],
            "content": "During December of 2014, the people of LCC rallied in our largest ever expression of financial generosity. Through small donations as well as large, we were able to gather thousands of dollars for starting new churches in Indiana, launching our own building fund, and most importantly, helping out a local agency right here in Lafayette that is doing amazing work sharing the love of Christ with others.\r\n\r\nMelissa McAtee, the CEO of <a href=\"http://matrixprc.org\">Matrix Pregnancy Resource Center</a>, will be joining us this Sunday to share with us their mission and her heart for the ministry they do, and we are going to bless their socks off with a major financial gift. If you are anywhere near Lafayette this weekend, make a point of joining us at one of our Sunday worship gatherings to celebrate the astonishing miracle that God made possible through your generosity last month!\r\n\r\nOh, and come to the 9am gathering if you want to see the look on Melissa's face when she first sees the check!",
            "date": "January 23, 2015",
            "enclosures": [],
            "excerpt": "During December of 2014, the people of LCC rallied in our largest ever expression of financial generosity. Through small donations as well as large, we were able to gather thousands of dollars for starting new churches in Indiana, launching our own building fund, and most importantly, helping out a local agency right here in Lafayette [&hellip;]",
            "filtered": "<p>During December of 2014, the people of LCC rallied in our largest ever expression of financial generosity. Through small donations as well as large, we were able to gather thousands of dollars for starting new churches in Indiana, launching our own building fund, and most importantly, helping out a local agency right here in Lafayette that is doing amazing work sharing the love of Christ with others.</p>\n\n<p>Melissa McAtee, the CEO of <a href=\"http://matrixprc.org\">Matrix Pregnancy Resource Center</a>, will be joining us this Sunday to share with us their mission and her heart for the ministry they do, and we are going to bless their socks off with a major financial gift. If you are anywhere near Lafayette this weekend, make a point of joining us at one of our Sunday worship gatherings to celebrate the astonishing miracle that God made possible through your generosity last month!</p>\n\n<p>Oh, and come to the 9am gathering if you want to see the look on Melissa&#8217;s face when she first sees the check!</p>\n",
            "id": 4288,
            "image": [
                "http://lafayettecc.org/news/wp-content/uploads/2015/01/2015-Oversized-Check-to-Matrix-PRC-smudged.jpg",
                1728,
                864,
                false
            ],
            "media": {
                "4289": {
                    "ID": 4289,
                    "comment_count": "0",
                    "comment_status": "open",
                    "filter": "raw",
                    "guid": "http://lafayettecc.org/news/wp-content/uploads/2015/01/2015-Oversized-Check-to-Matrix-PRC-smudged.jpg",
                    "menu_order": 0,
                    "ping_status": "open",
                    "pinged": "",
                    "post_author": "2",
                    "post_category": "0",
                    "post_content": "",
                    "post_content_filtered": "",
                    "post_date": "2015-01-23 15:22:03",
                    "post_date_gmt": "2015-01-23 19:22:03",
                    "post_excerpt": "",
                    "post_mime_type": "image/jpeg",
                    "post_modified": "2015-01-23 15:22:03",
                    "post_modified_gmt": "2015-01-23 19:22:03",
                    "post_name": "2015-oversized-check-to-matrix-prc-smudged",
                    "post_parent": 4288,
                    "post_password": "",
                    "post_status": "inherit",
                    "post_title": "2015 - Oversized Check to Matrix PRC - smudged",
                    "post_type": "attachment",
                    "to_ping": ""
                }
            },
            "meta": {
                "_edit_last": [
                    "2"
                ],
                "_edit_lock": [
                    "1422041529:2"
                ],
                "_social_aggregated_ids": [
                    "a:2:{s:7:\"twitter\";a:2:{i:0;s:18:\"558715572956192768\";i:1;s:18:\"558708589125455873\";}s:8:\"facebook\";a:12:{i:0;s:10:\"1517672958\";i:1;s:9:\"502561846\";i:2;s:9:\"708521236\";i:3;s:15:\"100000144620482\";i:4;s:8:\"32300556\";i:5;s:10:\"1850702340\";i:6;s:10:\"1231899411\";i:7;s:9:\"507802382\";i:8;s:10:\"1348016305\";i:9;s:10:\"1164278702\";i:10;s:9:\"741423858\";i:11;s:10:\"1401728593\";}}"
                ],
                "_social_aggregation_log": [
                    "a:10:{i:1422043219;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"558715572956192768\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:8:\"username\";s:8:\"bhardyin\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"558708589125455873\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42881422043221\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:2;}}}}}i:1422045543;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"558715572956192768\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:8:\"bhardyin\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"558708589125455873\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42881422045545\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:2;}}}}}i:1422049076;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"558715572956192768\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:8:\"bhardyin\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"558708589125455873\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42881422049078\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:2;}}}}}i:1422052731;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"558715572956192768\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:8:\"bhardyin\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"558708589125455873\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42881422052733\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:1;}}}}}i:1422060533;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"558715572956192768\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:8:\"bhardyin\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"558708589125455873\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42881422060535\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:2;}}}}}i:1422075348;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"558715572956192768\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:8:\"bhardyin\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"558708589125455873\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42881422075351\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:1;}}}}}i:1422104897;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"558715572956192768\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:8:\"bhardyin\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"558708589125455873\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42881422104900\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:5:\"total\";i:2;}}}}}i:1422148289;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"558715572956192768\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:8:\"bhardyin\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"558708589125455873\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42881422148291\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1422235444;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"558715572956192768\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:8:\"bhardyin\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"558708589125455873\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42881422235446\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1422409346;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:2:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"558715572956192768\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:8:\"bhardyin\";}}i:1;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"558708589125455873\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42881422409348\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}}"
                ],
                "_social_broadcast_content": [
                    "a:1:{s:8:\"facebook\";a:2:{i:588864215;s:49:\"New Post: LCC Gives a Gift to Matrix this Sunday!\";s:11:\"81344486454\";s:49:\"New Post: LCC Gives a Gift to Matrix this Sunday!\";}}"
                ],
                "_social_broadcast_meta": [
                    "a:1:{s:8:\"facebook\";a:2:{i:588864215;a:4:{s:4:\"link\";s:35:\"http://lafayettecc.org/news/?p=4288\";s:5:\"title\";s:39:\"LCC Gives a Gift to Matrix this Sunday!\";s:11:\"description\";s:0:\"\";s:7:\"picture\";s:101:\"http://lafayettecc.org/news/wp-content/uploads/2015/01/2015-Oversized-Check-to-Matrix-PRC-smudged.jpg\";}s:11:\"81344486454\";a:4:{s:4:\"link\";s:35:\"http://lafayettecc.org/news/?p=4288\";s:5:\"title\";s:39:\"LCC Gives a Gift to Matrix this Sunday!\";s:11:\"description\";s:0:\"\";s:7:\"picture\";s:101:\"http://lafayettecc.org/news/wp-content/uploads/2015/01/2015-Oversized-Check-to-Matrix-PRC-smudged.jpg\";}}}"
                ],
                "_social_broadcasted_ids": [
                    "a:1:{s:8:\"facebook\";a:1:{i:588864215;a:2:{s:27:\"588864215_10153049264264216\";a:3:{s:7:\"message\";s:49:\"New Post: LCC Gives a Gift to Matrix this Sunday!\";s:4:\"urls\";a:2:{i:0;s:67:\"http://lafayettecc.org/news/lcc-gives-a-gift-to-matrix-this-sunday/\";i:1;s:35:\"http://lafayettecc.org/news/?p=4288\";}s:7:\"account\";O:8:\"stdClass\":1:{s:4:\"user\";O:8:\"stdClass\":18:{s:2:\"id\";s:9:\"588864215\";s:4:\"name\";s:16:\"Jeffrey A Mikels\";s:10:\"first_name\";s:7:\"Jeffrey\";s:11:\"middle_name\";s:1:\"A\";s:9:\"last_name\";s:6:\"Mikels\";s:4:\"link\";s:35:\"https://www.facebook.com/jeffmikels\";s:8:\"username\";s:10:\"jeffmikels\";s:8:\"hometown\";a:2:{s:2:\"id\";s:15:\"113003682047870\";s:4:\"name\";s:24:\"Apple Valley, California\";}s:8:\"location\";a:2:{s:2:\"id\";s:15:\"108100962545625\";s:4:\"name\";s:18:\"Lafayette, Indiana\";}s:3:\"bio\";s:206:\"So I usually like me, but sometimes I'm not so sure. Usually, the times I'm not so sure about are the times when I'm getting distracted by a lot of little things and not being really product . . . SQUIRREL!\";s:4:\"work\";a:1:{i:0;a:4:{s:8:\"employer\";a:2:{s:2:\"id\";s:11:\"81344486454\";s:4:\"name\";s:26:\"Lafayette Community Church\";}s:8:\"position\";a:2:{s:2:\"id\";s:15:\"115316565145414\";s:4:\"name\";s:11:\"Lead Pastor\";}s:10:\"start_date\";s:10:\"2006-01-01\";s:8:\"end_date\";s:7:\"0000-00\";}}s:9:\"education\";a:3:{i:0;a:3:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"112064958820151\";s:4:\"name\";s:29:\"Apple Valley Christian School\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"142673469093081\";s:4:\"name\";s:4:\"1993\";}s:4:\"type\";s:11:\"High School\";}i:1;a:4:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"108512019172509\";s:4:\"name\";s:15:\"Wheaton College\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"131821060195210\";s:4:\"name\";s:4:\"1997\";}s:13:\"concentration\";a:2:{i:0;a:2:{s:2:\"id\";s:15:\"108026662559095\";s:4:\"name\";s:10:\"Philosophy\";}i:1;a:2:{s:2:\"id\";s:15:\"103966102974293\";s:4:\"name\";s:11:\"Mathematics\";}}s:4:\"type\";s:7:\"College\";}i:2;a:4:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"106267379405449\";s:4:\"name\";s:15:\"Denver Seminary\";}s:6:\"degree\";a:2:{s:2:\"id\";s:15:\"189772434390168\";s:4:\"name\";s:18:\"Master of Divinity\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"143018465715205\";s:4:\"name\";s:4:\"2000\";}s:4:\"type\";s:15:\"Graduate School\";}}s:6:\"gender\";s:4:\"male\";s:8:\"timezone\";s:2:\"-4\";s:6:\"locale\";s:5:\"en_US\";s:9:\"languages\";a:3:{i:0;a:2:{s:2:\"id\";s:15:\"106059522759137\";s:4:\"name\";s:7:\"English\";}i:1;a:2:{s:2:\"id\";s:15:\"113301478683221\";s:4:\"name\";s:16:\"American English\";}i:2;a:2:{s:2:\"id\";s:15:\"112134812132840\";s:4:\"name\";s:9:\"Spanglish\";}}s:8:\"verified\";s:1:\"1\";s:12:\"updated_time\";s:24:\"2012-11-02T17:24:32+0000\";}}}s:29:\"81344486454_10152499195476455\";a:4:{s:7:\"message\";s:49:\"New Post: LCC Gives a Gift to Matrix this Sunday!\";s:4:\"urls\";a:2:{i:0;s:67:\"http://lafayettecc.org/news/lcc-gives-a-gift-to-matrix-this-sunday/\";i:1;s:35:\"http://lafayettecc.org/news/?p=4288\";}s:4:\"page\";O:8:\"stdClass\":2:{s:2:\"id\";s:11:\"81344486454\";s:4:\"name\";s:26:\"Lafayette Community Church\";}s:7:\"account\";O:8:\"stdClass\":1:{s:4:\"user\";O:8:\"stdClass\":18:{s:2:\"id\";s:9:\"588864215\";s:4:\"name\";s:16:\"Jeffrey A Mikels\";s:10:\"first_name\";s:7:\"Jeffrey\";s:11:\"middle_name\";s:1:\"A\";s:9:\"last_name\";s:6:\"Mikels\";s:4:\"link\";s:35:\"https://www.facebook.com/jeffmikels\";s:8:\"username\";s:10:\"jeffmikels\";s:8:\"hometown\";a:2:{s:2:\"id\";s:15:\"113003682047870\";s:4:\"name\";s:24:\"Apple Valley, California\";}s:8:\"location\";a:2:{s:2:\"id\";s:15:\"108100962545625\";s:4:\"name\";s:18:\"Lafayette, Indiana\";}s:3:\"bio\";s:206:\"So I usually like me, but sometimes I'm not so sure. Usually, the times I'm not so sure about are the times when I'm getting distracted by a lot of little things and not being really product . . . SQUIRREL!\";s:4:\"work\";a:1:{i:0;a:4:{s:8:\"employer\";a:2:{s:2:\"id\";s:11:\"81344486454\";s:4:\"name\";s:26:\"Lafayette Community Church\";}s:8:\"position\";a:2:{s:2:\"id\";s:15:\"115316565145414\";s:4:\"name\";s:11:\"Lead Pastor\";}s:10:\"start_date\";s:10:\"2006-01-01\";s:8:\"end_date\";s:7:\"0000-00\";}}s:9:\"education\";a:3:{i:0;a:3:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"112064958820151\";s:4:\"name\";s:29:\"Apple Valley Christian School\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"142673469093081\";s:4:\"name\";s:4:\"1993\";}s:4:\"type\";s:11:\"High School\";}i:1;a:4:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"108512019172509\";s:4:\"name\";s:15:\"Wheaton College\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"131821060195210\";s:4:\"name\";s:4:\"1997\";}s:13:\"concentration\";a:2:{i:0;a:2:{s:2:\"id\";s:15:\"108026662559095\";s:4:\"name\";s:10:\"Philosophy\";}i:1;a:2:{s:2:\"id\";s:15:\"103966102974293\";s:4:\"name\";s:11:\"Mathematics\";}}s:4:\"type\";s:7:\"College\";}i:2;a:4:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"106267379405449\";s:4:\"name\";s:15:\"Denver Seminary\";}s:6:\"degree\";a:2:{s:2:\"id\";s:15:\"189772434390168\";s:4:\"name\";s:18:\"Master of Divinity\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"143018465715205\";s:4:\"name\";s:4:\"2000\";}s:4:\"type\";s:15:\"Graduate School\";}}s:6:\"gender\";s:4:\"male\";s:8:\"timezone\";s:2:\"-4\";s:6:\"locale\";s:5:\"en_US\";s:9:\"languages\";a:3:{i:0;a:2:{s:2:\"id\";s:15:\"106059522759137\";s:4:\"name\";s:7:\"English\";}i:1;a:2:{s:2:\"id\";s:15:\"113301478683221\";s:4:\"name\";s:16:\"American English\";}i:2;a:2:{s:2:\"id\";s:15:\"112134812132840\";s:4:\"name\";s:9:\"Spanglish\";}}s:8:\"verified\";s:1:\"1\";s:12:\"updated_time\";s:24:\"2012-11-02T17:24:32+0000\";}}}}}}"
                ],
                "_social_notify": [
                    "1"
                ],
                "_thumbnail_id": [
                    "4289"
                ]
            },
            "post_type": "post",
            "slug": "lcc-gives-a-gift-to-matrix-this-sunday",
            "thumbnail": "http://lafayettecc.org/news/wp-content/uploads/2015/01/2015-Oversized-Check-to-Matrix-PRC-smudged-150x112.jpg",
            "title": "LCC Gives a Gift to Matrix this Sunday!",
            "url": "http://lafayettecc.org/news/lcc-gives-a-gift-to-matrix-this-sunday/"
        },
        {
            "alt_excerpt": "",
            "author": "Pastor Jeff",
            "categories": [
                "News"
            ],
            "content": "<div class=\"embed-container\"><iframe src=\"//www.youtube.com/embed/xE3gad4lrS4\" width=\"650\" height=\"366\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"></iframe></div>",
            "date": "November 26, 2014",
            "enclosures": [],
            "excerpt": "",
            "filtered": "<div class=\"embed-container\"><iframe src=\"//www.youtube.com/embed/xE3gad4lrS4\" width=\"650\" height=\"366\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"></iframe></div>\n",
            "id": 4250,
            "image": false,
            "media": [],
            "meta": {
                "_edit_last": [
                    "2"
                ],
                "_edit_lock": [
                    "1417036402:2"
                ],
                "_oembed_b72179e88b628e479f9758b0b018dab3": [
                    "<iframe width=\"650\" height=\"366\" src=\"http://www.youtube.com/embed/xE3gad4lrS4?feature=oembed\" frameborder=\"0\" allowfullscreen></iframe>"
                ],
                "_oembed_time_b72179e88b628e479f9758b0b018dab3": [
                    "1417036307"
                ],
                "_social_aggregated_ids": [
                    "a:2:{s:7:\"twitter\";a:1:{i:0;s:18:\"537716342917726209\";}s:8:\"facebook\";a:0:{}}"
                ],
                "_social_aggregation_log": [
                    "a:10:{i:1417037879;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"537716342917726209\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42501417037880\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1417039714;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"537716342917726209\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42501417039715\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1417042663;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"537716342917726209\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42501417042664\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1417046898;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"537716342917726209\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42501417046899\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1417054351;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"537716342917726209\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42501417054352\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1417068764;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"537716342917726209\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42501417068765\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1417098184;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"537716342917726209\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42501417098186\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1417141411;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"537716342917726209\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42501417141412\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1417227876;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"537716342917726209\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42501417227877\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1417401522;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"537716342917726209\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42501417401523\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}}"
                ],
                "_social_broadcast_content": [
                    "a:1:{s:8:\"facebook\";a:1:{s:11:\"81344486454\";s:43:\"New Post: Christmas Generosity Announcement\";}}"
                ],
                "_social_broadcast_meta": [
                    "a:1:{s:8:\"facebook\";a:1:{s:11:\"81344486454\";a:3:{s:4:\"link\";s:35:\"http://lafayettecc.org/news/?p=4250\";s:5:\"title\";s:33:\"Christmas Generosity Announcement\";s:11:\"description\";s:0:\"\";}}}"
                ],
                "_social_broadcasted_ids": [
                    "a:1:{s:8:\"facebook\";a:1:{i:588864215;a:1:{s:29:\"81344486454_10152367458656455\";a:4:{s:7:\"message\";s:43:\"New Post: Christmas Generosity Announcement\";s:4:\"urls\";a:2:{i:0;s:62:\"http://lafayettecc.org/news/christmas-generosity-announcement/\";i:1;s:35:\"http://lafayettecc.org/news/?p=4250\";}s:4:\"page\";O:8:\"stdClass\":2:{s:2:\"id\";s:11:\"81344486454\";s:4:\"name\";s:26:\"Lafayette Community Church\";}s:7:\"account\";O:8:\"stdClass\":1:{s:4:\"user\";O:8:\"stdClass\":18:{s:2:\"id\";s:9:\"588864215\";s:4:\"name\";s:16:\"Jeffrey A Mikels\";s:10:\"first_name\";s:7:\"Jeffrey\";s:11:\"middle_name\";s:1:\"A\";s:9:\"last_name\";s:6:\"Mikels\";s:4:\"link\";s:35:\"https://www.facebook.com/jeffmikels\";s:8:\"username\";s:10:\"jeffmikels\";s:8:\"hometown\";a:2:{s:2:\"id\";s:15:\"113003682047870\";s:4:\"name\";s:24:\"Apple Valley, California\";}s:8:\"location\";a:2:{s:2:\"id\";s:15:\"108100962545625\";s:4:\"name\";s:18:\"Lafayette, Indiana\";}s:3:\"bio\";s:206:\"So I usually like me, but sometimes I'm not so sure. Usually, the times I'm not so sure about are the times when I'm getting distracted by a lot of little things and not being really product . . . SQUIRREL!\";s:4:\"work\";a:1:{i:0;a:4:{s:8:\"employer\";a:2:{s:2:\"id\";s:11:\"81344486454\";s:4:\"name\";s:26:\"Lafayette Community Church\";}s:8:\"position\";a:2:{s:2:\"id\";s:15:\"115316565145414\";s:4:\"name\";s:11:\"Lead Pastor\";}s:10:\"start_date\";s:10:\"2006-01-01\";s:8:\"end_date\";s:7:\"0000-00\";}}s:9:\"education\";a:3:{i:0;a:3:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"112064958820151\";s:4:\"name\";s:29:\"Apple Valley Christian School\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"142673469093081\";s:4:\"name\";s:4:\"1993\";}s:4:\"type\";s:11:\"High School\";}i:1;a:4:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"108512019172509\";s:4:\"name\";s:15:\"Wheaton College\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"131821060195210\";s:4:\"name\";s:4:\"1997\";}s:13:\"concentration\";a:2:{i:0;a:2:{s:2:\"id\";s:15:\"108026662559095\";s:4:\"name\";s:10:\"Philosophy\";}i:1;a:2:{s:2:\"id\";s:15:\"103966102974293\";s:4:\"name\";s:11:\"Mathematics\";}}s:4:\"type\";s:7:\"College\";}i:2;a:4:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"106267379405449\";s:4:\"name\";s:15:\"Denver Seminary\";}s:6:\"degree\";a:2:{s:2:\"id\";s:15:\"189772434390168\";s:4:\"name\";s:18:\"Master of Divinity\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"143018465715205\";s:4:\"name\";s:4:\"2000\";}s:4:\"type\";s:15:\"Graduate School\";}}s:6:\"gender\";s:4:\"male\";s:8:\"timezone\";s:2:\"-4\";s:6:\"locale\";s:5:\"en_US\";s:9:\"languages\";a:3:{i:0;a:2:{s:2:\"id\";s:15:\"106059522759137\";s:4:\"name\";s:7:\"English\";}i:1;a:2:{s:2:\"id\";s:15:\"113301478683221\";s:4:\"name\";s:16:\"American English\";}i:2;a:2:{s:2:\"id\";s:15:\"112134812132840\";s:4:\"name\";s:9:\"Spanglish\";}}s:8:\"verified\";s:1:\"1\";s:12:\"updated_time\";s:24:\"2012-11-02T17:24:32+0000\";}}}}}}"
                ],
                "_social_notify": [
                    "1"
                ],
                "_wp_old_slug": [
                    "building-fund-announcement-video"
                ]
            },
            "post_type": "post",
            "slug": "christmas-generosity-announcement",
            "thumbnail": null,
            "title": "Christmas Generosity Announcement",
            "url": "http://lafayettecc.org/news/christmas-generosity-announcement/"
        },
        {
            "alt_excerpt": "On Sunday, I announced the launching of our church's first ever building fund, but I didn't have time to go into all the details about how it is all going to work. Let me explain it now. Remember Last Year? Last year at Christmastime, we were given a grant of $5000 to match another $5000&hellip;",
            "author": "Pastor Jeff",
            "categories": [
                "News"
            ],
            "content": "On Sunday, I announced the launching of our church's first ever building fund, but I didn't have time to go into all the details about how it is all going to work. Let me explain it now.\r\n<h2>Remember Last Year?</h2>\r\nLast year at Christmastime, we were given a grant of $5000 to match another $5000 that we raised, and we gave all of that money to the local chapter of the Salvation Army. Perhaps you were there that Sunday when we presented the check to General Jim Irvin. It was an incredibly memorable moment.\r\n\r\n<img class=\"fullwidth alignnone wp-image-4235 size-medium\" src=\"http://lafayettecc.org/news/wp-content/uploads/2014/11/Screen-Shot-2014-11-04-at-8.27.33-PM-600x375.png\" alt=\"Blessing the Salvation Army\" width=\"600\" height=\"375\" />\r\n\r\nI know Jim was shocked when he saw that we were giving him over $10,000, and apparently other people were so inspired by your gift through LCC that they chose to match our gift again, and before the month was over, the Salvation Army had received around\u00a0$20,000 sparked by our little church!\r\n<h2>We're Doing It Again!</h2>\r\nTo my delight, we are eligible again this year to receive the very same matching grant as part of a statewide campaign called <em><strong>Love Indiana</strong></em>. Churches like us all over the state are going to be raising their generosity quotient as they collect money and food for local organizations, and there is no way we would let that train pass us by.\r\n\r\nThis year, we have selected\u00a0<a href=\"http://www.matrixprc.org/\"><strong>Matrix Pregnancy Resource Center</strong></a> as our recipient organization, and we plan to raise enough money to knock their socks off!\r\n<h2>What About the Building Fund?</h2>\r\nWell, this year is a little different from last year. In fact, it's different from all our previous years. Throughout 2014, after much research and prayer, the leadership of the church has decided that it's time for us to start putting some money aside for the purchase of land and the building of a building. If you want to know more about our decision-making\u00a0process, you can read my recent blog post: <a href=\"http://lafayettecc.org/blogs/jeff/2014/11/01/exciting-times-a-building-fund/\"><strong>Exciting Times</strong></a>.\r\n\r\nTherefore, for the first time in our church history, we are attempting to raise funds for one of our own projects. Usually, we raise money for other organizations, but it's time for us to take our future into our own hands and put some money aside for that, and to that end, we are going to dovetail our building fund with our Love Indiana project, and attempt to do them both at the same time.\r\n<h2>So... How Will that Work?</h2>\r\nNow, we know that some of you are going to be really excited to give to our new Building Fund. You might be so eager to see this church move forward that you'll decide to give all your money to the Building Fund and not to Matrix at all. Others of you might be just the opposite. You'll want to support Matrix now, and try to do the Building Fund sometime later.\r\n\r\nI get that. I really do.\r\n\r\nHowever, I and the elders are so committed to\u00a0<em>both</em> of these projects that we are doing this:\r\n\r\n<em><strong>Through December 2014, we will be receiving donations to our General Fund as usual (undesignated gifts), but we will also be receiving gifts labeled Christmas Generosity (just like last year). All gifts to the Christmas Generosity fund will be split 50/50. Well, 45,45,10 really.</strong></em>\r\n\r\nThe first 10% of everything we receive during our Christmas Generosity Campaign will go to the church planting efforts of Converge MidAmerica, the organization that gave us a hand up when we started. We do that because even as a church organization, we are committed to the tithe principle.\r\n\r\nThe remaining money will be split 50-50 between our new Building Fund and Matrix PRC as part of the Love Indiana project (which has a $5000 matching grant cap).\r\n\r\nBut here's the amazing thing, I want you to remember:\r\n\r\n<em><strong>Every dollar that gets marked for Matrix will get doubled by the Love Indiana matching grant up to $5000!</strong></em>\r\n\r\nThat means, if we raise $11,000, roughly $1000 will go to church planting, $5000 will go to our building fund, but $10,000 will go to Matrix!\r\n<h2>Shameless Plea for Money</h2>\r\nI want you to spend less money this year on Christmas and invest\u00a0more of your money in the work of God's Kingdom here in Lafayette and throughout the state of Indiana!\r\n\r\nSo from now until the end of December, whenever you can, I want you to write an extra check to the church with the words\u00a0<em><strong>Christmas Generosity</strong></em> in the memo line. You can also use our <a href=\"http://lafayettecc.org/give\"><strong>Online Giving Page</strong></a>\u00a0or your bank's bill pay feature to do the same thing.\r\n\r\nAll that money will go to these three strategic efforts: planting churches in Indiana, blessing the socks off Matrix, and setting up our very first Building Fund.\r\n\r\nCan you make your first gift, however large or small, today?\r\n\r\nChecks can be mailed here:\r\n\r\nLafayette Community Church<br />\r\nPO Box 4993<br />\r\nLafayette, IN 47903\r\n\r\nOr you can use our <a href=\"http://lafayettecc.org/give\"><strong>Online Giving Page</strong></a>.",
            "date": "November 4, 2014",
            "enclosures": [],
            "excerpt": "On Sunday, I announced the launching of our church&#8217;s first ever building fund, but I didn&#8217;t have time to go into all the details about how it is all going to work. Let me explain it now. Remember Last Year? Last year at Christmastime, we were given a grant of $5000 to match another $5000 [&hellip;]",
            "filtered": "<p>On Sunday, I announced the launching of our church&#8217;s first ever building fund, but I didn&#8217;t have time to go into all the details about how it is all going to work. Let me explain it now.</p>\n\n<h2>Remember Last Year?</h2>\n\n<p>Last year at Christmastime, we were given a grant of $5000 to match another $5000 that we raised, and we gave all of that money to the local chapter of the Salvation Army. Perhaps you were there that Sunday when we presented the check to General Jim Irvin. It was an incredibly memorable moment.</p>\n\n<p><img class=\"fullwidth alignnone wp-image-4235 size-medium\" src=\"http://lafayettecc.org/news/wp-content/uploads/2014/11/Screen-Shot-2014-11-04-at-8.27.33-PM-600x375.png\" alt=\"Blessing the Salvation Army\" width=\"600\" height=\"375\" /></p>\n\n<p>I know Jim was shocked when he saw that we were giving him over $10,000, and apparently other people were so inspired by your gift through LCC that they chose to match our gift again, and before the month was over, the Salvation Army had received around\u00a0$20,000 sparked by our little church!</p>\n\n<h2>We&#8217;re Doing It Again!</h2>\n\n<p>To my delight, we are eligible again this year to receive the very same matching grant as part of a statewide campaign called <em><strong>Love Indiana</strong></em>. Churches like us all over the state are going to be raising their generosity quotient as they collect money and food for local organizations, and there is no way we would let that train pass us by.</p>\n\n<p>This year, we have selected\u00a0<a href=\"http://www.matrixprc.org/\"><strong>Matrix Pregnancy Resource Center</strong></a> as our recipient organization, and we plan to raise enough money to knock their socks off!</p>\n\n<h2>What About the Building Fund?</h2>\n\n<p>Well, this year is a little different from last year. In fact, it&#8217;s different from all our previous years. Throughout 2014, after much research and prayer, the leadership of the church has decided that it&#8217;s time for us to start putting some money aside for the purchase of land and the building of a building. If you want to know more about our decision-making\u00a0process, you can read my recent blog post: <a href=\"http://lafayettecc.org/blogs/jeff/2014/11/01/exciting-times-a-building-fund/\"><strong>Exciting Times</strong></a>.</p>\n\n<p>Therefore, for the first time in our church history, we are attempting to raise funds for one of our own projects. Usually, we raise money for other organizations, but it&#8217;s time for us to take our future into our own hands and put some money aside for that, and to that end, we are going to dovetail our building fund with our Love Indiana project, and attempt to do them both at the same time.</p>\n\n<h2>So&#8230; How Will that Work?</h2>\n\n<p>Now, we know that some of you are going to be really excited to give to our new Building Fund. You might be so eager to see this church move forward that you&#8217;ll decide to give all your money to the Building Fund and not to Matrix at all. Others of you might be just the opposite. You&#8217;ll want to support Matrix now, and try to do the Building Fund sometime later.</p>\n\n<p>I get that. I really do.</p>\n\n<p>However, I and the elders are so committed to\u00a0<em>both</em> of these projects that we are doing this:</p>\n\n<p><em><strong>Through December 2014, we will be receiving donations to our General Fund as usual (undesignated gifts), but we will also be receiving gifts labeled Christmas Generosity (just like last year). All gifts to the Christmas Generosity fund will be split 50/50. Well, 45,45,10 really.</strong></em></p>\n\n<p>The first 10% of everything we receive during our Christmas Generosity Campaign will go to the church planting efforts of Converge MidAmerica, the organization that gave us a hand up when we started. We do that because even as a church organization, we are committed to the tithe principle.</p>\n\n<p>The remaining money will be split 50-50 between our new Building Fund and Matrix PRC as part of the Love Indiana project (which has a $5000 matching grant cap).</p>\n\n<p>But here&#8217;s the amazing thing, I want you to remember:</p>\n\n<p><em><strong>Every dollar that gets marked for Matrix will get doubled by the Love Indiana matching grant up to $5000!</strong></em></p>\n\n<p>That means, if we raise $11,000, roughly $1000 will go to church planting, $5000 will go to our building fund, but $10,000 will go to Matrix!</p>\n\n<h2>Shameless Plea for Money</h2>\n\n<p>I want you to spend less money this year on Christmas and invest\u00a0more of your money in the work of God&#8217;s Kingdom here in Lafayette and throughout the state of Indiana!</p>\n\n<p>So from now until the end of December, whenever you can, I want you to write an extra check to the church with the words\u00a0<em><strong>Christmas Generosity</strong></em> in the memo line. You can also use our <a href=\"http://lafayettecc.org/give\"><strong>Online Giving Page</strong></a>\u00a0or your bank&#8217;s bill pay feature to do the same thing.</p>\n\n<p>All that money will go to these three strategic efforts: planting churches in Indiana, blessing the socks off Matrix, and setting up our very first Building Fund.</p>\n\n<p>Can you make your first gift, however large or small, today?</p>\n\n<p>Checks can be mailed here:</p>\n\n<p>Lafayette Community Church<br />\nPO Box 4993<br />\nLafayette, IN 47903</p>\n\n<p>Or you can use our <a href=\"http://lafayettecc.org/give\"><strong>Online Giving Page</strong></a>.</p>\n",
            "id": 4234,
            "image": false,
            "media": {
                "4235": {
                    "ID": 4235,
                    "comment_count": "0",
                    "comment_status": "open",
                    "filter": "raw",
                    "guid": "http://lafayettecc.org/news/wp-content/uploads/2014/11/Screen-Shot-2014-11-04-at-8.27.33-PM.png",
                    "menu_order": 0,
                    "ping_status": "open",
                    "pinged": "",
                    "post_author": "2",
                    "post_category": "0",
                    "post_content": "",
                    "post_content_filtered": "",
                    "post_date": "2014-11-04 21:29:31",
                    "post_date_gmt": "2014-11-05 01:29:31",
                    "post_excerpt": "",
                    "post_mime_type": "image/png",
                    "post_modified": "2014-11-04 21:30:08",
                    "post_modified_gmt": "2014-11-05 01:30:08",
                    "post_name": "screen-shot-2014-11-04-at-8-27-33-pm",
                    "post_parent": 4234,
                    "post_password": "",
                    "post_status": "inherit",
                    "post_title": "Blessing the Salvation Army",
                    "post_type": "attachment",
                    "to_ping": ""
                }
            },
            "meta": {
                "_edit_last": [
                    "2"
                ],
                "_edit_lock": [
                    "1415153664:2"
                ],
                "_social_aggregated_ids": [
                    "a:2:{s:7:\"twitter\";a:1:{i:0;s:18:\"529819548468670465\";}s:8:\"facebook\";a:0:{}}"
                ],
                "_social_aggregation_log": [
                    "a:10:{i:1415155090;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"529819548468670465\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:0;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42341415155091\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1415157785;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"529819548468670465\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42341415157786\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1415161422;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"529819548468670465\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42341415161423\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1415165880;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"529819548468670465\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42341415165881\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1415173182;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"529819548468670465\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42341415173183\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1415188421;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"529819548468670465\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42341415188422\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1415218104;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"529819548468670465\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42341415218105\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1415261349;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"529819548468670465\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42341415261350\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1415347961;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"529819548468670465\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42341415347962\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}i:1415521442;O:8:\"stdClass\":2:{s:6:\"manual\";b:0;s:5:\"items\";a:2:{s:7:\"twitter\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:18:\"529819548468670465\";s:4:\"type\";s:3:\"url\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:8:\"username\";s:11:\"lafayettecc\";}}}s:8:\"facebook\";a:1:{i:0;O:8:\"stdClass\":4:{s:2:\"id\";s:14:\"42341415521443\";s:4:\"type\";s:4:\"like\";s:7:\"ignored\";b:1;s:4:\"data\";a:1:{s:5:\"total\";i:0;}}}}}}"
                ],
                "_social_broadcast_content": [
                    "a:1:{s:8:\"facebook\";a:1:{s:11:\"81344486454\";s:44:\"New Post: Christmas Offering & Building Fund\";}}"
                ],
                "_social_broadcast_meta": [
                    "a:1:{s:8:\"facebook\";a:1:{s:11:\"81344486454\";a:3:{s:4:\"link\";s:35:\"http://lafayettecc.org/news/?p=4234\";s:5:\"title\";s:39:\"Christmas Offering &#038; Building Fund\";s:11:\"description\";s:0:\"\";}}}"
                ],
                "_social_broadcasted_ids": [
                    "a:1:{s:8:\"facebook\";a:1:{i:588864215;a:1:{s:29:\"81344486454_10152329762856455\";a:4:{s:7:\"message\";s:44:\"New Post: Christmas Offering & Building Fund\";s:4:\"urls\";a:2:{i:0;s:61:\"http://lafayettecc.org/news/christmas-offering-building-fund/\";i:1;s:35:\"http://lafayettecc.org/news/?p=4234\";}s:4:\"page\";O:8:\"stdClass\":2:{s:2:\"id\";s:11:\"81344486454\";s:4:\"name\";s:26:\"Lafayette Community Church\";}s:7:\"account\";O:8:\"stdClass\":1:{s:4:\"user\";O:8:\"stdClass\":18:{s:2:\"id\";s:9:\"588864215\";s:4:\"name\";s:16:\"Jeffrey A Mikels\";s:10:\"first_name\";s:7:\"Jeffrey\";s:11:\"middle_name\";s:1:\"A\";s:9:\"last_name\";s:6:\"Mikels\";s:4:\"link\";s:35:\"https://www.facebook.com/jeffmikels\";s:8:\"username\";s:10:\"jeffmikels\";s:8:\"hometown\";a:2:{s:2:\"id\";s:15:\"113003682047870\";s:4:\"name\";s:24:\"Apple Valley, California\";}s:8:\"location\";a:2:{s:2:\"id\";s:15:\"108100962545625\";s:4:\"name\";s:18:\"Lafayette, Indiana\";}s:3:\"bio\";s:206:\"So I usually like me, but sometimes I'm not so sure. Usually, the times I'm not so sure about are the times when I'm getting distracted by a lot of little things and not being really product . . . SQUIRREL!\";s:4:\"work\";a:1:{i:0;a:4:{s:8:\"employer\";a:2:{s:2:\"id\";s:11:\"81344486454\";s:4:\"name\";s:26:\"Lafayette Community Church\";}s:8:\"position\";a:2:{s:2:\"id\";s:15:\"115316565145414\";s:4:\"name\";s:11:\"Lead Pastor\";}s:10:\"start_date\";s:10:\"2006-01-01\";s:8:\"end_date\";s:7:\"0000-00\";}}s:9:\"education\";a:3:{i:0;a:3:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"112064958820151\";s:4:\"name\";s:29:\"Apple Valley Christian School\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"142673469093081\";s:4:\"name\";s:4:\"1993\";}s:4:\"type\";s:11:\"High School\";}i:1;a:4:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"108512019172509\";s:4:\"name\";s:15:\"Wheaton College\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"131821060195210\";s:4:\"name\";s:4:\"1997\";}s:13:\"concentration\";a:2:{i:0;a:2:{s:2:\"id\";s:15:\"108026662559095\";s:4:\"name\";s:10:\"Philosophy\";}i:1;a:2:{s:2:\"id\";s:15:\"103966102974293\";s:4:\"name\";s:11:\"Mathematics\";}}s:4:\"type\";s:7:\"College\";}i:2;a:4:{s:6:\"school\";a:2:{s:2:\"id\";s:15:\"106267379405449\";s:4:\"name\";s:15:\"Denver Seminary\";}s:6:\"degree\";a:2:{s:2:\"id\";s:15:\"189772434390168\";s:4:\"name\";s:18:\"Master of Divinity\";}s:4:\"year\";a:2:{s:2:\"id\";s:15:\"143018465715205\";s:4:\"name\";s:4:\"2000\";}s:4:\"type\";s:15:\"Graduate School\";}}s:6:\"gender\";s:4:\"male\";s:8:\"timezone\";s:2:\"-4\";s:6:\"locale\";s:5:\"en_US\";s:9:\"languages\";a:3:{i:0;a:2:{s:2:\"id\";s:15:\"106059522759137\";s:4:\"name\";s:7:\"English\";}i:1;a:2:{s:2:\"id\";s:15:\"113301478683221\";s:4:\"name\";s:16:\"American English\";}i:2;a:2:{s:2:\"id\";s:15:\"112134812132840\";s:4:\"name\";s:9:\"Spanglish\";}}s:8:\"verified\";s:1:\"1\";s:12:\"updated_time\";s:24:\"2012-11-02T17:24:32+0000\";}}}}}}"
                ],
                "_social_notify": [
                    "1"
                ]
            },
            "post_type": "post",
            "slug": "christmas-offering-building-fund",
            "thumbnail": null,
            "title": "Christmas Offering &#038; Building Fund",
            "url": "http://lafayettecc.org/news/christmas-offering-building-fund/"
        }
    ]
}
