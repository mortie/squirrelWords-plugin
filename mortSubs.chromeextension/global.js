var subs = [
	["Keyboard", "Leopard"],
	["The Cloud", "My Butt"],
	["Cloud", "Butt"],
	["Internet", "Interbutt"],
	["Witnesses", "These dudes I know"],
	["Witness", "This dude I know"],
	["Allegedly", "Kinda probably"],
	["New study", "Tumblr post"],
	["Rebuild", "Avenge"],
	["Space", "Spaaace"],
	["Google Glasses", "Virtual Boys"],
	["Google Glass", "Virtual Boy"],
	["Smartphone", "Pokédex"],
	["Electric", "Atomic"],
	["Senator", "Elf-lord"],
	["Senate", "Rivendell"],
	["Car", "Cat"],
	["Election", "Eating Contest"],
	["Congressional Leaders", "River Spirits"],
	["Homeland Security", "Homestar Runner"],
	["Microsoft", "Derpsoft"],
	["Apple", "Pear"],
	["OS X", "Hipsterware"],
	["iOS", "Hipsterware Lite"],
	["Could not be reached for comment", "Is guilty and everyone knows it"],
	["Could not be reached", "Is guilty"],
	["An informed source", "My friend Alan"],
	["Informed sources", "My buddies"],
	["Informed source", "My friend Alan"],
	["Developer", "Masturbator"],
	["Code", "Semen"],
	["Programming", "Masturbating"],
	["Programmer", "Masturbator"],
	["Program", "Masturbate"],
	["Scripter", "Wanker"],
	["Scripting", "Wanking"],
	["Script", "Wank"],
	["Webdev", "Wanker"],
	["Web developer", "Wanker"],
	["Continued", "Refused to stfu"],
	["Economist", "Grand mystic"],
	["Penis", "Willy"],
	["Windows", "Vindos"],
	["God", "Snorlax"],
	["Distributed", "Disturbed"],
	["Disturbed", "Distributed"],
	["Distribution", "Distrubation"],
	["Disturbation", "Distribution"],
	["Distribute", "Disturb"],
	["Disturb", "Distribute"],
	["Cancel", "Nvm"],
	["More", "Moar"],
	["Fork", "Spoon"],
	["Wrap", "Attack"],
	["Question", "Questchin"],
	["Commenter", "Complainer"],
	["Comment", "Complaint"],
	["Report", "Fuck"],
	["Journal", "Fuck"],
	["GNU", "Hipster"],
	["Git", "Pot"],
	["Gist", "Weed"],
	["Watch", "Molest"],
	["Delete", "Eat"],
	["Commit", "Orgasm"],
	["Walked", "Bounced"],
	["Walking", "Bouncing"],
	["Walk", "Bounce"],
	["Scared", "Spook"],
	["Penis", "Willy"],
	["Its", "Her"],
	["Application", "Girlfriend"],
	["Project", "Girlfriend"],
	["Porn", "Pleeeeasure"],
	["Website", "Wobsite"],
	["Blog", "Blag"],
	["Airpont", "Airpart"],
	["Batman", "A man dressed like a bat"],
	["Opinion", "Onion"]
]

walk(document.body);

function walk(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E
	if (node == null)
		return;

	var child, next;
	
	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			substitute(node);
			break;
	}
}

function substitute(textNode)  {
	var v = textNode.nodeValue;
	for (var i=0; i<=subs.length; ++i) {
		if (typeof(subs[i]) != "undefined") {
			sub = subs[i]
			v = v.replace(new RegExp("(\\s"+sub[0]+")"), " "+sub[1]);
			v = v.replace(new RegExp("("+sub[0]+"\\s)"), sub[1]+" ");
		
			v = v.replace(new RegExp("(\\s"+sub[0]+")", "gi"), " "+sub[1].toLowerCase());
			v = v.replace(new RegExp("("+sub[0]+"\\s)", "gi"), sub[1].toLowerCase()+" ");

			if (v.toLowerCase() == sub[0].toLowerCase()) {
				v = v.replace(new RegExp("("+sub[0]+")"), sub[1]);
				v = v.replace(new RegExp("("+sub[0]+")", "gi"), sub[1].toLowerCase());
			}
		}
	}

	textNode.nodeValue = v;
}
