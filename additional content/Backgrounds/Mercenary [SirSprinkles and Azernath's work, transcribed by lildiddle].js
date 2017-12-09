
BackgroundList["mercenary"] = {
        regExpSearch : /mercenary/i,
        name : "Mercenary",
        source : ["HB"],
        skills : ["Intimidation", "Persuasion"],
        gold : 10,
        equipleft : [
            ["One gaming set of your choice", "", ""],
            ["Proof of the first contract you completed", "", ""],
        ],
        equipright : [
            ["A set of common clothes", "", 3],
        ],
        feature : "Hired Blade",
        trait : [
            "I like to show off, particularly if there's a chance to get a job offer in it.",
            "I am always gregarious and cheerful, no matter the situation, as long as I am paid well.",
            "To me, the whisper of steel and the clash of weapons is just as pleasing as any amount of gold.",
            "I always train because training leaves the person ready even in a moment of respite or weakness.",
            "I hold myself to a strict code of ideals.",
            "I keep my personal possessions in secret places which is know only to me.",
            "I would do anything to protect my weapons of arm, for I know it will protect me in return.",
            "I do nothing, move no finger or a blade, unless I hear the jingling sound of coins."
        ],
        ideal : [
            ["Golden Soul",
                "Golden Soul: I fight for money, and nothing else. (Neutral)"
            ],
            ["Great Publicity", 
                "Great Publicity: I will be known for my deeds, sooner rather than later. (Any)"
            ],
            ["Power of Death", 
                "Power or Death: In my line of profession, the strong live and the weak starve. (Evil)"
            ],
            ["Non-Sold Honor",
                "Non-Sold Honor: I never break my promises. Never. (Lawful)"
            ],
            ["War and Crime",
                "War and Crime: Whenever chaos flourishes, so too does my work. (Chaotic)"
            ],
            ["Good for Sale", 
                "Good for Sale: I am a sellsword who swings his weapon only in the name of good. (Good)"
            ]
        ],
        bond : [
            "I became a mercenary to support my family, who would have probably starved in a slum somewhere if not for me.",
            "I fight for a lover that knows little if not nothing of me.",
            "I was inspired by a great hero to become a mercenary.",
            "I treat my valued comrades like brothers, and I will let no insult or injury fall upon them.",
            "I seek to protect something of great importance to me by keeping it a secret, so you better forget what you just heard.",
            "I never disrespect an employer, if they never disrespect me or stop giving me money."
        ],
        flaw : [
            "I'll do anything for coin, damn the consequences.",
            "As much as I pretend to love fighting, I secretly hate hurting others.",
            "I have crippling debts that my work barely pays it off.",
            "I never fail at my tasks, even if I have to resort to less honourable means to complete them.",
            "I would send an innocent to face his death if it means I will win the fight.",
            "Someone powerful would do anything to have my head, so I seek to gain his or her head first."
        ],
        variant: [],
        tools : ["Vehicles(land)", "One type of gaming set"],
        lifestyle : "modest"
};
 
BackgroundFeatureList["hired blade"] = {  
    description : "I am a soldier of fortune, a fighter who sells my services to the highest bidder. I roam towns and cities in search of a place where my unique set of talents are useful; whether for a lord hunting a group of bandits, or a local barkeep tired of the goblin infestation in his cellar, I can always find some work if I look hard enough. The job itself should not matter much for a person like me, at least that is what others believe. Therefore, other less admirable and shunned upon jobs sometimes arrive at my lap, giving me the choice and the problem of figuring a way to compromise between my ethics and my job.",
    source : ["HB"]
};
 
SourceList["HB"] = {
    name : "Hombrew",
    abbreviation : "HB",
    group : "various homebrewers",
    url : "https://www.dandwiki.com/wiki/Mercenary_(5e_Background)",
};
 
UpdateDropdown("background");
UpdateDropdown("backgroundfeature");
