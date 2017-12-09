1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
231
232
233
234
235
236
237
238
239
240
241
242
243
244
245
246
247
248
249
250
251
252
253
254
255
256
257
258
259
260
261
262
263
264
265
266
267
268
269
270
271
272
273
274
275
276
277
278
279
280
281
282
283
284
285
286
287
288
289
290
291
292
293
294
295
296
297
298
299
300
301
302
303
304
305
306
307
308
309
310
311
312
313
314
315
316
317
318
319
320
321
322
323
324
325
326
327
328
329
330
331
332
333
334
335
336
337
338
339
340
341
342
343
344
345
346
347
348
349
350
351
352
353
354
355
356
357
358
359
360
361
362
363
364
365
366
367
368
369
370
371
372
373
374
375
376
377
378
379
380
381
382
383
384
385
386
387
388
389
390
391
392
393
394
395
396
397
398
399
400
401
402
403
404
405
406
407
408
409
410
411
412
413
414
415
416
417
418
419
420
421
422
423
424
425
426
427
428
429
430
431
432
433
434
435
436
437
438
439
440
441
442
443
444
445
446
447
448
449
450
451
452
453
454
455
456
457
458
459
460
461
462
463
464
465
466
467
468
469
470
471
472
473
474
475
476
477
478
479
480
481
482
483
484
485
486
487
488
489
490
491
492
493
494
495
496
497
498
499
500
501
502
503
504
505
506
507
508
509
510
511
512
513
514
515
516
517
518
519
520
521
522
523
524
525
526
527
528
529
530
531
532
533
534
535
536
537
538
539
540
541
542
543
544
545
546
547
548
549
550
551
552
553
554
555
556
557
558
559
560
561
562
563
564
565
566
567
568
569
570
571
572
573
574
575
576
577
578
579
580
581
582
583
584
585
586
587
588
589
590
591
592
593
594
595
596
597
598
599
600
601
602
603
604
605
606
607
608
609
610
611
612
613
614
615
616
617
618
619
620
621
622
623
624
625
626
627
628
629
630
631
632
633
634
635
636
637
638
639
640
641
642
643
644
645
646
647
648
649
650
651
652
653
654
655
656
657
658
659
660
661
662
663
664
665
666
667
668
669
670
671
672
673
674
675
676
677
678
679
680
681
682
683
684
685
686
687
688
689
690
691
692
693
694
695
696
697
698
/*  -WHAT IS THIS?-
    The script featured here is made as an optional addition to "MPMB's Character Record Sheet" found at http://flapkan.com/mpmb/dmsguild
    You can add the content to the Character Sheet's functionality by adding the script below in the "Add Custom Script" dialogue.
 
    -KEEP IN MIND-
    Note that you can add as many custom codes as you want, but you have to add the code in at once (i.e. copy all the code into a single, long file and copy that into the sheet).
    It is recommended to enter the code in a fresh sheet before adding any other information.
*/
 
/*  -INFORMATION-
    Subject:    Subclass
    Effect:     This script adds a subclass for the Monk, called "Way of the Four Elements Remastered"
                This is a homebrewed subclass that tries to fix the PHB subclass "Way of the Four Elements"
    Code by:    AKA_Sketch & MorePurpleMoreBetter
    Date:       2017-04-05 (sheet v12.94)
     
    This is a fan-made homebrew to replace the "Way of the Four Elements" subclass.
     
    This code is based on version 2.0 (2017-02-18) by /u/IrisBandit, found here: https://drive.google.com/file/d/0B5ttoyMfsaC7dzJ2SVdKNXhxVnM/view
     
    IrishBandit's work, in turn, is based on the work of /u/SpiketailDrake, which is found here: https://drive.google.com/file/d/0B1pdYIcfHauwNDM2My1XeWFYSDA/view
     
    -IMPORTANT-
    By adding this code to your sheet, you will no longer be able to use the PHB version of the "Way of the Four Elements" monk archetype.
    Please make sure you add this code to a completely empty sheet to avoid complications with a pre-existing character with the "Way of the Four Elements" subclass.
*/
 
ClassSubList["way of the four elements"].source = ["IB:WotFE", 1];
ClassSubList["way of the four elements"].spellcastingFactor = "default0";
ClassSubList["way of the four elements"].spellcastingKnown = {
    cantrips : [0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4]
};
ClassSubList["way of the four elements"].spellcastingList = {
    spells : ["control flames", "gust", "mold earth", "shape water"]
};
ClassSubList["way of the four elements"].features = {
    "subclassfeature3" : {
        name : "Initiate of the Way",
        source : ["IB:WotFE", 1],
        minlevel : 3,
        description : "",
        additional : levels.map(function (n) {
            if (n < 6) return n < 3 ? "" : "1 cantrip";
            return (n < 11 ? 2 : n < 17 ? 3 : 4) + " cantrips";
        })
    },
    "subclassfeature3.1" : {
        name : "Disciple of the Elements",
        source : ["IB:WotFE", 1],
        minlevel : 3,
        description : desc([
            "I know several Elemental Disciplines, depending on level, that I can use with my ki",
            "Use the \"Choose Features\" button above to add Elemental Disciplines to the third page",
            "Some Elemental Disciplines give me the ability to cast a spell without material comp.",
            "From 5th level onward, I can use additional ki points to increase their spell slot level",
            "When I gain access to new Elemental Disciplines, I can trade a known one for another"
        ]),
        additional : levels.map(function (n) {
            if (n < 3) return "";
            return ((n < 6 ? 2 : n < 11 ? 4 : n < 17 ? 6 : 8) + " known; ") + ((n < 5 ? 1 : n < 9 ? 2 : n < 13 ? 3 : n < 17 ? 4 : 5) + " max ki");
        }),
        extraname : "Elemental Discipline",
        extrachoices : ["Become the Teapot", "Effortless Step", "Enduring Mountain Stance", "Fangs of the Fire Snake", "Fang of the Frost Wolf", "Fist of Four Thunders", "Fist of Unbroken Air", "Golden Snake's Icy Path", "Rumbling Badger", "Rush of the Gale Spirits", "Shape the Raincloud", "Sweeping Cinder Strike", "Water Whip", "A Leaf on the Wind (prereq: level 6 monk)", "Burning Ember Flourish (prereq: level 6 monk)", "Crushing Hand of the Mountain (prereq: level 6 monk)", "Curtain of Unyielding Wind (prereq: level 6 monk)", "Gong of the Summit (prereq: level 6 monk)", "Hatchling's Flame (prereq: level 6 monk)", "Mote of the Sun (prereq: level 6 monk)", "Patient Badger Listens (prereq: level 6 monk)", "Red Dragon's Claws (prereq: level 6 monk)", "Swarming Ice Rabbit (prereq: level 6 monk)", "Dance of Three Ways (prereq: level 11 monk)", "Earth Reaches for Sky (prereq: level 11 monk)", "Eternal Mountain Defense (prereq: level 11 monk)", "Flames of the Phoenix (prereq: level 11 monk)", "Fist of the Elements (prereq: level 11 monk)", "Hua's Water Prison (prereq: level 11 monk)", "Mist Stance (prereq: level 11 monk)", "One with the Tides (prereq: level 11 monk)", "Rain of the Frigid Glacier (prereq: level 11 monk)", "Raise the Troubled Earth (prereq: level 11 monk)", "Raise the Still Waters (prereq: level 11 monk)", "Ride the Wind (prereq: level 11 monk)", "River of Hungry Flame (prereq: level 11 monk)", "Sweeping Crosswind (prereq: level 11 monk)", "Tears of the North Wind (prereq: level 11 monk)", "Tsunami (prereq: level 11 monk)", "Avatar of Flame (prereq: level 17 monk)", "Avatar of Ice (prereq: level 17 monk)", "Avatar of Stone (prereq: level 17 monk)", "Avatar of Wind (prereq: level 17 monk)", "Avatar of the Elements (prereq: level 17 monk; another Avatar option)", "Breath of Winter (prereq: level 17 monk)", "Eye of the Hurricane (prereq: level 17 monk)", "Mold the Mountain (prereq: level 17 monk)", "Moth's Demise (prereq: level 17 monk)", "Swirling Crab's Revenge (prereq: level 17 monk)", "Wave of Rolling Earth (prereq: level 17 monk)"],
        "become the teapot" : {
            name : "Become the Teapot",
            source : ["IB:WotFE", 2],
            description : " [1-5 ki points]" + "\n   " + "As a reaction, I can cast Absorb Elements",
            spellcastingBonus : {
                name : "Become the Teapot",
                spells : ["absorb elements"],
                selection : ["absorb elements"],
                firstCol : 1
            },
            spellFirstColTitle : "Ki"
        },
        "effortless step" : {
            name : "Effortless Step",
            source : ["IB:WotFE", 2],
            description : "\n   " + "I double my jump height and distance; I have adv. on Athletics checks related to jumping"
        },
        "enduring mountain stance" : {
            name : "Enduring Mountain Stance",
            source : ["IB:WotFE", 2],
            description : "\n   " + "If I take the Dodge action, I can't be moved, pushed, grappled, knocked prone, frightened" + "\n   " + "This only works if I'm standing on the ground; This lasts until the start of my next turn"
        },
        "fangs of the fire snake" : {
            name : "Fangs of the Fire Snake",
            source : ["IB:WotFE", 2],
            description : " [0-1 ki points]" + "\n   " + "On my turn, I can have any of my unarmed strikes gain +5 ft reach and deal fire damage" + "\n   " + "If such an attack hits, I can spend 1 ki point to cause it to deal +1d10 fire damage",
            calcChanges : {
                atkAdd : ["if ((/unarmed strike/i).test(WeaponName) && (/^(?=.*fire)(?=.*snake).*$/i).test(inputText)) {fields.Description += (fields.Description ? '; ' : '') + 'After hit, spend 1 ki point for +1d10 fire damage'; fields.Range = 'Melee (10 ft reach)'; fields.Damage_Type = 'fire'; }; ", "If I include the words 'Fire Snake' in the name of an unarmed strike, it gets +5 ft reach, does fire damage, and gains the option to deal +1d10 fire damage by spending 1 ki point."]
            }
        },
        "fang of the frost wolf" : {
            name : "Fang of the Frost Wolf",
            source : ["IB:WotFE", 2],
            description : " [1-5 ki points]" + "\n   " + "As an action, I can cast Ice Knife without material components",
            spellcastingBonus : {
                name : "Fang of the Frost Wolf",
                spells : ["ice knife"],
                selection : ["ice knife"],
                firstCol : 1
            },
            spellFirstColTitle : "Ki"
        },
        "fist of four thunders" : {
            name : "Fist of Four Thunders",
            source : ["IB:WotFE", 2],
            description : " [1-5 ki points]" + "\n   " + "As an action, I can cast Thunderwave",
            spellcastingBonus : {
                name : "Fist of Four Thunders",
                spells : ["thunderwave"],
                selection : ["thunderwave"],
                firstCol : 1
            },
            spellFirstColTitle : "Ki"
        },
        "fist of unbroken air" : {
            name : "Fist of Unbroken Air",
            source : ["IB:WotFE", 2],
            description : " [0-1 ki points]" + "\n   " + "On my turn, I can have any of my unarmed strikes gain +10 ft reach against a target" + "\n   " + "On a hit, I can use 1 ki point to force a Str save on it or push it 10 ft and knock it prone",
            calcChanges : {
                atkAdd : ["if ((/unarmed strike/i).test(WeaponName) && (/^(?=.*unbroken)(?=.*air).*$/i).test(inputText)) {fields.Description += (fields.Description ? '; ' : '') + 'After hit, spend 1 ki point to impose Str save or push 10 ft and knock prone'; fields.Range = 'Melee (15 ft reach)'; }; ", "If I include the words 'Unbroken Air' in the name of an unarmed strike, it gets +10 ft reach and gains the option to, by spending 1 ki point, force the target to make a Strength saving throw or be pushed back 10 ft and knocked prone."]
            }
        },
        "golden snake's icy path" : {
            name : "Golden Snake's Icy Path",
            source : ["IB:WotFE", 2],
            description : "\n   " + "When I use Dash, I can leave a trail of ice (difficult terrain) until the start of my next turn",
        },
        "rumbling badger" : {
            name : "Rumbling Badger",
            source : ["IB:WotFE", 2],
            description : " [1-5 ki points]" + "\n   " + "As an action, I can cast Earth Tremor",
            spellcastingBonus : {
                name : "Rumbling Badger",
                spells : ["earth tremor"],
                selection : ["earth tremor"],
                firstCol : 1
            },
            spellFirstColTitle : "Ki"
        },
        "rush of the gale spirits" : {
            name : "Rush of the Gale Spirits",
            source : ["IB:WotFE", 2],
            description : " [2 ki points]" + "\n   " + "As an action, I can cast Gust of Wind without material components",
            spellcastingBonus : {
                name : "Rush of the Gale Spirits",
                spells : ["gust of wind"],
                selection : ["gust of wind"],
                firstCol : 2
            },
            spellFirstColTitle : "Ki"
        },
        "shape the raincloud" : {
            name : "Shape the Raincloud",
            source : ["IB:WotFE", 2],
            description : " [1-5 ki points]" + "\n   " + "As an action, I can cast Create or Destroy Water without material components",
            spellcastingBonus : {
                name : "Shape the Raincloud",
                spells : ["create or destroy water"],
                selection : ["create or destroy water"],
                firstCol : 1
            },
            spellFirstColTitle : "Ki"
        },
        "sweeping cinder strike" : {
            name : "Sweeping Cinder Strike",
            source : ["IB:WotFE", 2],
            description : " [1-5 ki points]" + "\n   " + "As an action, I can cast Burning Hands",
            spellcastingBonus : {
                name : "Sweeping Cinder Strike",
                spells : ["burning hands"],
                selection : ["burning hands"],
                firstCol : 1
            },
            spellFirstColTitle : "Ki"
        },
        "water whip" : {
            name : "Water Whip",
            source : ["IB:WotFE", 2],
            description : " [1-5 ki points]" + desc([
                "As a bonus action, I can use 1 ki point to have a target I can see in 30 ft make a Dex save",
                "On a failed save, it takes my Martial Arts die + my Wis modifier in bludgeoning damage",
                "If I use extra ki, it is prone or pulled 25 ft to me, +1d10 damage per extra point spend",
                "On a successful save, the target takes only half damage and isn't knocked prone or moved",
                "I can't use Water Whip and cast a spell in the same turn"
            ]),
            action : ["bonus action", ""]
        },
        "a leaf on the wind (prereq: level 6 monk)" : {
            name : "A Leaf on the Wind",
            source : ["IB:WotFE", 2],
            description : desc([
                "I no longer need to use a reaction for Slow Fall and it negates all falling damage",
                "Per 5 ft I fall, I can also move horizontally 5 ft in any direction"
            ]),
            eval : "RemoveAction('reaction', 'Slow Fall');",
            removeeval : "AddAction('reaction', 'Slow Fall', 'Monk (Way of the Four Elements)');",
            prereqeval : "classes.known.monk.level >= 6"
        },
        "burning ember flourish (prereq: level 6 monk)" : {
            name : "Burning Ember Flourish",
            source : ["IB:WotFE", 2],
            description : " [2 ki points]" + "\n   " + "As an action, I can cast Pyrotechnics",
            spellcastingBonus : {
                name : "Burning Ember Flourish",
                spells : ["pyrotechnics"],
                selection : ["pyrotechnics"],
                firstCol : 2
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 6"
        },
        "crushing hand of the mountain (prereq: level 6 monk)" : {
            name : "Crushing Hand of the Mountain",
            source : ["IB:WotFE", 2],
            description : " [2 ki points]" + "\n   " + "As an action, I can cast Maximilian's Earthen Grasp without material components",
            spellcastingBonus : {
                name : "Crushing Hand of the Mountain",
                spells : ["maximilian's earthen grasp"],
                selection : ["maximilian's earthen grasp"],
                firstCol : 2
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 6"
        },
        "curtain of unyielding wind (prereq: level 6 monk)" : {
            name : "Curtain of Unyielding Wind",
            source : ["IB:WotFE", 2],
            description : " [2 ki points]" + "\n   " + "As an action, I can cast Warding Wind",
            spellcastingBonus : {
                name : "Curtain of Unyielding Wind",
                spells : ["warding wind"],
                selection : ["warding wind"],
                firstCol : 2
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 6"
        },
        "gong of the summit (prereq: level 6 monk)" : {
            name : "Gong of the Summit",
            source : ["IB:WotFE", 2],
            description : " [2-5 ki points]" + "\n   " + "As an action, I can cast Shatter without material components",
            spellcastingBonus : {
                name : "Gong of the Summit",
                spells : ["shatter"],
                selection : ["shatter"],
                firstCol : 2
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 6"
        },
        "hatchling's flame (prereq: level 6 monk)" : {
            name : "Hatchling's Flame",
            source : ["IB:WotFE", 2],
            description : " [2-5 ki points]" + "\n   " + "As an action, I can cast Aganazzar's Scorcher without material components",
            spellcastingBonus : {
                name : "Hatchling's Flame",
                spells : ["aganazzar's scorcher"],
                selection : ["aganazzar's scorcher"],
                firstCol : 2
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 6"
        },
        "mote of the sun (prereq: level 6 monk)" : {
            name : "Mote of the Sun",
            source : ["IB:WotFE", 2],
            description : " [2-5 ki points]" + "\n   " + "As an action, I can cast Flaming Sphere without material components",
            spellcastingBonus : {
                name : "Mote of the Sun",
                spells : ["flaming sphere"],
                selection : ["flaming sphere"],
                firstCol : 2
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 6"
        },
        "patient badger listens (prereq: level 6 monk)" : {
            name : "Patient Badger Listens",
            source : ["IB:WotFE", 2],
            description : " [2 ki points]" + desc([
                "For 1 min, I gain tremorsense 30 ft and a burrow speed equal to half my walking speed",
                "Burrowing like this leaves behind a tunnel that lasts for the duration"
            ]),
            prereqeval : "classes.known.monk.level >= 6"
        },
        "red dragon's claws (prereq: level 6 monk)" : {
            name : "Red Dragon's Claws",
            source : ["IB:WotFE", 2],
            description : " [2-5 ki points]" + "\n   " + "As an action, I can cast Scorching Ray",
            spellcastingBonus : {
                name : "Red Dragon's Claws",
                spells : ["scorching ray"],
                selection : ["scorching ray"],
                firstCol : 2
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 6"
        },
        "swarming ice rabbit (prereq: level 6 monk)" : {
            name : "Swarming Ice Rabbit",
            source : ["IB:WotFE", 2],
            description : " [2-5 ki points]" + "\n   " + "As an action, I can cast Snilloc's Snowball Swarm without material components",
            spellcastingBonus : {
                name : "Swarming Ice Rabbit",
                spells : ["snilloc's snowball swarm"],
                selection : ["snilloc's snowball swarm"],
                firstCol : 2
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 6"
        },
        "dance of three ways (prereq: level 11 monk)" : {
            name : "Dance of Three Ways",
            source : ["IB:WotFE", 3],
            description : " [3-5 ki points]" + "\n   " + "As an action, I can cast Melf's Minute Meteors without material components",
            spellcastingBonus : {
                name : "Dance of Three Ways",
                spells : ["melf's minute meteors"],
                selection : ["melf's minute meteors"],
                firstCol : 3
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 11"
        },
        "earth reaches for sky (prereq: level 11 monk)" : {
            name : "Earth Reaches for Sky",
            source : ["IB:WotFE", 3],
            description : " [3-5 ki points]" + "\n   " + "As an action, I can cast Erupting Earth without material components",
            spellcastingBonus : {
                name : "Earth Reaches for Sky",
                spells : ["erupting earth"],
                selection : ["erupting earth"],
                firstCol : 3
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 11"
        },
        "eternal mountain defense (prereq: level 11 monk)" : {
            name : "Eternal Mountain Defense",
            source : ["IB:WotFE", 3],
            description : " [4 ki points]" + "\n   " + "As an action, I can cast Stoneskin on myself without material components",
            spellcastingBonus : {
                name : "Eternal Mountain Defense",
                spells : ["stoneskin"],
                selection : ["stoneskin"],
                firstCol : 4
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 11"
        },
        "flames of the phoenix (prereq: level 11 monk)" : {
            name : "Flames of the Phoenix",
            source : ["IB:WotFE", 3],
            description : " [3-5 ki points]" + "\n   " + "As an action, I can cast Fireball without material components",
            spellcastingBonus : {
                name : "Flames of the Phoenix",
                spells : ["fireball"],
                selection : ["fireball"],
                firstCol : 3
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 11"
        },
        "fist of the elements (prereq: level 11 monk)" : {
            name : "Fist of the Elements",
            source : ["IB:WotFE", 3],
            description : " [3-5 ki points]" + "\n   " + "As an action, I can cast Elemental Weapon (cold/fire/thunder); I can target my fists",
            spellcastingBonus : {
                name : "Fist of the Elements",
                spells : ["elemental weapon"],
                selection : ["elemental weapon"],
                firstCol : 3
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 11"
        },
        "hua's water prison (prereq: level 11 monk)" : {
            name : "Hua's Water Prison",
            source : ["IB:WotFE", 3],
            description : " [4 ki points]" + "\n   " + "As an action, I can cast Watery Sphere without material components",
            spellcastingBonus : {
                name : "Hua's Water Prison",
                spells : ["watery sphere"],
                selection : ["watery sphere"],
                firstCol : 4
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 11"
        },
        "mist stance (prereq: level 11 monk)" : {
            name : "Mist Stance",
            source : ["IB:WotFE", 3],
            description : " [3 ki points]" + "\n   " + "As an action, I can cast Gaseous Form without material components",
            spellcastingBonus : {
                name : "Mist Stance",
                spells : ["gaseous form"],
                selection : ["gaseous form"],
                firstCol : 3
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 11"
        },
        "one with the tides (prereq: level 11 monk)" : {
            name : "One with the Tides",
            source : ["IB:WotFE", 3],
            description : " [2 ki points]" + desc([
                "As an action, I gain underwater adaptations that last for 8 hours: Breathe underwater,",
                "Swim speed equal to my walking speed, and Blindsight 60 ft while underwater"
            ]),
            prereqeval : "classes.known.monk.level >= 11"
        },
        "rain of the frigid glacier (prereq: level 11 monk)" : {
            name : "Rain of the Frigid Glacier",
            source : ["IB:WotFE", 3],
            description : " [3 ki points]" + "\n   " + "As an action, I can cast Sleet Storm without material components",
            spellcastingBonus : {
                name : "Rain of the Frigid Glacier",
                spells : ["sleet storm"],
                selection : ["sleet storm"],
                firstCol : 3
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 11"
        },
        "raise the troubled earth (prereq: level 11 monk)" : {
            name : "Raise the Troubled Earth",
            source : ["IB:WotFE", 3],
            description : " [3 ki points]" + "\n   " + "As an action, I can cast Wall of Sand without material components",
            spellcastingBonus : {
                name : "Raise the Troubled Earth",
                spells : ["wall of sand"],
                selection : ["wall of sand"],
                firstCol : 3
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 11"
        },
        "raise the still waters (prereq: level 11 monk)" : {
            name : "Raise the Still Waters",
            source : ["IB:WotFE", 3],
            description : " [3 ki points]" + "\n   " + "As an action, I can cast Wall of Water without material components",
            spellcastingBonus : {
                name : "Raise the Still Waters",
                spells : ["wall of water"],
                selection : ["wall of water"],
                firstCol : 3
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 11"
        },
        "ride the wind (prereq: level 11 monk)" : {
            name : "Ride the Wind",
            source : ["IB:WotFE", 3],
            description : " [3 ki points]" + "\n   " + "As an action, I can cast Fly on myself without material components; Fly at my own speed",
            spellcastingBonus : {
                name : "Ride the Wind",
                spells : ["fly"],
                selection : ["fly"],
                firstCol : 3
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 11"
        },
        "river of hungry flame (prereq: level 11 monk)" : {
            name : "River of Hungry Flame",
            source : ["IB:WotFE", 3],
            description : " [4-5 ki points]" + "\n   " + "As an action, I can cast Wall of Fire without material components",
            spellcastingBonus : {
                name : "River of Hungry Flame",
                spells : ["wall of fire"],
                selection : ["wall of fire"],
                firstCol : 4
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 11"
        },
        "sweeping crosswind (prereq: level 11 monk)" : {
            name : "Sweeping Crosswind",
            source : ["IB:WotFE", 3],
            description : " [3 ki points]" + "\n   " + "As an action, I can cast Wind Wall without material components",
            spellcastingBonus : {
                name : "Sweeping Crosswind",
                spells : ["wind wall"],
                selection : ["wind wall"],
                firstCol : 3
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 11"
        },
        "tears of the north wind (prereq: level 11 monk)" : {
            name : "Tears of the North Wind",
            source : ["IB:WotFE", 3],
            description : " [3-5 ki points]" + "\n   " + "As an action, I can cast Ice Storm without material components",
            spellcastingBonus : {
                name : "Tears of the North Wind",
                spells : ["ice storm"],
                selection : ["ice storm"],
                firstCol : 3
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 11"
        },
        "tsunami (prereq: level 11 monk)" : {
            name : "Tsunami",
            source : ["IB:WotFE", 3],
            description : " [3 ki points]" + "\n   " + "As an action, I can cast Tidal Wave without material components",
            spellcastingBonus : {
                name : "Tsunami",
                spells : ["tidal wave"],
                selection : ["tidal wave"],
                firstCol : 3
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 11"
        },
        "avatar of flame (prereq: level 17 monk)" : {
            name : "Avatar of Flame",
            source : ["IB:WotFE", 3],
            description : " [6 ki points]" + "\n   " + "As an action, I can cast Investiture of Flame",
            spellcastingBonus : {
                name : "Avatar of Flame",
                spells : ["investiture of flame"],
                selection : ["investiture of flame"],
                firstCol : 6
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 17"
        },
        "avatar of ice (prereq: level 17 monk)" : {
            name : "Avatar of Ice",
            source : ["IB:WotFE", 3],
            description : " [6 ki points]" + "\n   " + "As an action, I can cast Investiture of Ice",
            spellcastingBonus : {
                name : "Avatar of Ice",
                spells : ["investiture of ice"],
                selection : ["investiture of ice"],
                firstCol : 6
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 17"
        },
        "avatar of stone (prereq: level 17 monk)" : {
            name : "Avatar of Stone",
            source : ["IB:WotFE", 3],
            description : " [6 ki points]" + "\n   " + "As an action, I can cast Investiture of Stone",
            spellcastingBonus : {
                name : "Avatar of Stone",
                spells : ["investiture of stone"],
                selection : ["investiture of stone"],
                firstCol : 6
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 17"
        },
        "avatar of wind (prereq: level 17 monk)" : {
            name : "Avatar of Wind",
            source : ["IB:WotFE", 3],
            description : " [6 ki points]" + "\n   " + "As an action, I can cast Investiture of Wind",
            spellcastingBonus : {
                name : "Avatar of Wind",
                spells : ["investiture of wind"],
                selection : ["investiture of wind"],
                firstCol : 6
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 17"
        },
        "avatar of the elements (prereq: level 17 monk; another avatar option)" : {
            name : "Avatar of the Elements",
            source : ["IB:WotFE", 3],
            description : " [6 ki points]" + "\n   " + "As an action, I can cast Investiture of Flame, Ice, Stone, or Wind",
            spellcastingBonus : [{
                name : "Avatar of Flame",
                spells : ["investiture of flame"],
                selection : ["investiture of flame"],
                firstCol : 6
            }, {
                name : "Avatar of Ice",
                spells : ["investiture of ice"],
                selection : ["investiture of ice"],
                firstCol : 6
            }, {
                name : "Avatar of Stone",
                spells : ["investiture of stone"],
                selection : ["investiture of stone"],
                firstCol : 6
            }, {
                name : "Avatar of Wind",
                spells : ["investiture of wind"],
                selection : ["investiture of wind"],
                firstCol : 6
            }],
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 17"
        },
        "breath of winter (prereq: level 17 monk)" : {
            name : "Breath of Winter",
            source : ["IB:WotFE", 3],
            description : " [5 ki points]" + "\n   " + "As an action, I can cast Cone of Cold without material components",
            spellcastingBonus : {
                name : "Breath of Winter",
                spells : ["cone of cold"],
                selection : ["cone of cold"],
                firstCol : 5
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 17"
        },
        "eye of the hurricane (prereq: level 17 monk)" : {
            name : "Eye of the Hurricane",
            source : ["IB:WotFE", 3],
            description : " [5 ki points]" + "\n   " + "As an action, I can cast Control Winds",
            spellcastingBonus : {
                name : "Eye of the Hurricane",
                spells : ["control winds"],
                selection : ["control winds"],
                firstCol : 5
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 17"
        },
        "mold the mountain (prereq: level 17 monk)" : {
            name : "Mold the Mountain",
            source : ["IB:WotFE", 3],
            description : " [5 ki points]" + "\n   " + "As an action, I can cast Transmute Rock without material components",
            spellcastingBonus : {
                name : "Mold the Mountain",
                spells : ["transmute rock"],
                selection : ["transmute rock"],
                firstCol : 5
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 17"
        },
        "moth's demise (prereq: level 17 monk)" : {
            name : "Moth's Demise",
            source : ["IB:WotFE", 3],
            description : " [5 ki points]" + "\n   " + "As an action, I can cast Immolation",
            spellcastingBonus : {
                name : "Moth's Demise",
                spells : ["immolation"],
                selection : ["immolation"],
                firstCol : 5
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 17"
        },
        "swirling crab's revenge (prereq: level 17 monk)" : {
            name : "Swirling Crab's Revenge",
            source : ["IB:WotFE", 3],
            description : " [5 ki points]" + "\n   " + "As an action, I can cast Maelstrom without material components",
            spellcastingBonus : {
                name : "Swirling Crab's Revenge",
                spells : ["maelstrom"],
                selection : ["maelstrom"],
                firstCol : 5
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 17"
        },
        "wave of rolling earth (prereq: level 17 monk)" : {
            name : "Wave of Rolling Earth",
            source : ["IB:WotFE", 3],
            description : " [5 ki points]" + "\n   " + "As an action, I can cast Wall of Stone without material components",
            spellcastingBonus : {
                name : "Wave of Rolling Earth",
                spells : ["wall of stone"],
                selection : ["wall of stone"],
                firstCol : 5
            },
            spellFirstColTitle : "Ki",
            prereqeval : "classes.known.monk.level >= 17"
        }
    },
    "subclassfeature6" : {
        name : "Elemental Mastery",
        source : ["IB:WotFE", 2],
        minlevel : 6,
        description : desc([
            "I know additional Elemental Disciplines of one tier lower than I'm normally allowed",
            "When I gain access to a new one, I can trade a known one for another of the same tier"
        ]),
        additional : levels.map(function (n) {
            if (n < 6) return "";
            return (n < 11 ? 1 : n < 17 ? 2 : 3) + " extra disciplines";
        })
    }   
};
 
SourceList["IB:WotFE"] = {
    name : "Way of the Four Elements Remastered (v2.0, 2017-02-18, by IrisBandit)",
    abbreviation : "IB:WotFE",
    group : "IrishBandit",
    url : "https://drive.google.com/file/d/0B5ttoyMfsaC7dzJ2SVdKNXhxVnM/view"
};
