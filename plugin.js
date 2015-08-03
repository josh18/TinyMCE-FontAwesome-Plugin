// Created by Josh Hunt
// joshhunt180@gmail.com
// v1.6.0
tinymce.PluginManager.requireLangPack('fontawesome');
tinymce.PluginManager.add('fontawesome', function (editor, url) {
    
    var translate = tinymce.util.I18n.translate;

    var webApplicationIcons = [
        ['&#xf042;'],
        ['&#xf13d;'],
        ['&#xf187;'],
        ['&#xf1fe;'],
        ['&#xf047;'],
        ['&#xf07e;'],
        ['&#xf07d;'],
        ['&#xf069;'],
        ['&#xf1fa;'],
        ['&#xf24e;'],
        ['&#xf05e;'],
        ['&#xf080;'],
        ['&#xf02a;'],
        ['&#xf0c9;'],
        ['&#xf244;'],
        ['&#xf240;'],
        ['&#xf242;'],
        ['&#xf243;'],
        ['&#xf241;'],
        ['&#xf236;'],
        ['&#xf0fc;'],
        ['&#xf0f3;'],
        ['&#xf0a2;'],
        ['&#xf1f6;'],
        ['&#xf1f7;'],
        ['&#xf206;'],
        ['&#xf1e5;'],
        ['&#xf1fd;'],
        ['&#xf0e7;'],
        ['&#xf1e2;'],
        ['&#xf02d;'],
        ['&#xf02e;'],
        ['&#xf097;'],
        ['&#xf0b1;'],
        ['&#xf188;'],
        ['&#xf1ad;'],
        ['&#xf0f7;'],
        ['&#xf0a1;'],
        ['&#xf140;'],
        ['&#xf207;'],
        ['&#xf1ec;'],
        ['&#xf073;'],
        ['&#xf274;'],
        ['&#xf272;'],
        ['&#xf133;'],
        ['&#xf271;'],
        ['&#xf273;'],
        ['&#xf030;'],
        ['&#xf083;'],
        ['&#xf1b9;'],
        ['&#xf150;'],
        ['&#xf191;'],
        ['&#xf152;'],
        ['&#xf151;'],
        ['&#xf218;'],
        ['&#xf217;'],
        ['&#xf20a;'],
        ['&#xf0a3;'],
        ['&#xf00c;'],
        ['&#xf058;'],
        ['&#xf05d;'],
        ['&#xf14a;'],
        ['&#xf046;'],
        ['&#xf1ae;'],
        ['&#xf111;'],
        ['&#xf10c;'],
        ['&#xf1ce;'],
        ['&#xf1db;'],
        ['&#xf017;'],
        ['&#xf24d;'],
        ['&#xf0c2;'],
        ['&#xf0ed;'],
        ['&#xf0ee;'],
        ['&#xf121;'],
        ['&#xf126;'],
        ['&#xf0f4;'],
        ['&#xf013;'],
        ['&#xf085;'],
        ['&#xf075;'],
        ['&#xf0e5;'],
        ['&#xf27a;'],
        ['&#xf27b;'],
        ['&#xf086;'],
        ['&#xf0e6;'],
        ['&#xf14e;'],
        ['&#xf1f9;'],
        ['&#xf25e;'],
        ['&#xf09d;'],
        ['&#xf125;'],
        ['&#xf05b;'],
        ['&#xf1b2;'],
        ['&#xf1b3;'],
        ['&#xf0f5;'],
        ['&#xf1c0;'],
        ['&#xf108;'],
        ['&#xf219;'],
        ['&#xf192;'],
        ['&#xf019;'],
        ['&#xf141;'],
        ['&#xf142;'],
        ['&#xf0e0;'],
        ['&#xf003;'],
        ['&#xf199;'],
        ['&#xf12d;'],
        ['&#xf0ec;'],
        ['&#xf12a;'],
        ['&#xf06a;'],
        ['&#xf071;'],
        ['&#xf08e;'],
        ['&#xf14c;'],
        ['&#xf06e;'],
        ['&#xf070;'],
        ['&#xf1fb;'],
        ['&#xf1ac;'],
        ['&#xf182;'],
        ['&#xf0fb;'],
        ['&#xf1c6;'],
        ['&#xf1c7;'],
        ['&#xf1c9;'],
        ['&#xf1c3;'],
        ['&#xf1c5;'],
        ['&#xf1c1;'],
        ['&#xf1c4;'],
        ['&#xf1c8;'],
        ['&#xf1c2;'],
        ['&#xf008;'],
        ['&#xf0b0;'],
        ['&#xf06d;'],
        ['&#xf134;'],
        ['&#xf024;'],
        ['&#xf11e;'],
        ['&#xf11d;'],
        ['&#xf0c3;'],
        ['&#xf07b;'],
        ['&#xf114;'],
        ['&#xf07c;'],
        ['&#xf115;'],
        ['&#xf119;'],
        ['&#xf1e3;'],
        ['&#xf11b;'],
        ['&#xf0e3;'],
        ['&#xf06b;'],
        ['&#xf000;'],
        ['&#xf0ac;'],
        ['&#xf19d;'],
        ['&#xf258;'],
        ['&#xf256;'],
        ['&#xf25b;'],
        ['&#xf25a;'],
        ['&#xf255;'],
        ['&#xf257;'],
        ['&#xf259;'],
        ['&#xf0a0;'],
        ['&#xf025;'],
        ['&#xf004;'],
        ['&#xf08a;'],
        ['&#xf21e;'],
        ['&#xf1da;'],
        ['&#xf015;'],
        ['&#xf254;'],
        ['&#xf253;'],
        ['&#xf252;'],
        ['&#xf250;'],
        ['&#xf251;'],
        ['&#xf246;'],
        ['&#xf01c;'],
        ['&#xf275;'],
        ['&#xf129;'],
        ['&#xf05a;'],
        ['&#xf084;'],
        ['&#xf11c;'],
        ['&#xf1ab;'],
        ['&#xf109;'],
        ['&#xf06c;'],
        ['&#xf094;'],
        ['&#xf149;'],
        ['&#xf148;'],
        ['&#xf1cd;'],
        ['&#xf0eb;'],
        ['&#xf201;'],
        ['&#xf124;'],
        ['&#xf023;'],
        ['&#xf0d0;'],
        ['&#xf076;'],
        ['&#xf183;'],
        ['&#xf279;'],
        ['&#xf041;'],
        ['&#xf278;'],
        ['&#xf276;'],
        ['&#xf277;'],
        ['&#xf11a;'],
        ['&#xf130;'],
        ['&#xf131;'],
        ['&#xf068;'],
        ['&#xf056;'],
        ['&#xf146;'],
        ['&#xf147;'],
        ['&#xf10b;'],
        ['&#xf0d6;'],
        ['&#xf186;'],
        ['&#xf21c;'],
        ['&#xf245;'],
        ['&#xf001;'],
        ['&#xf1ea;'],
        ['&#xf247;'],
        ['&#xf248;'],
        ['&#xf1fc;'],
        ['&#xf1d8;'],
        ['&#xf1d9;'],
        ['&#xf1b0;'],
        ['&#xf040;'],
        ['&#xf14b;'],
        ['&#xf044;'],
        ['&#xf095;'],
        ['&#xf098;'],
        ['&#xf03e;'],
        ['&#xf200;'],
        ['&#xf072;'],
        ['&#xf1e6;'],
        ['&#xf067;'],
        ['&#xf055;'],
        ['&#xf0fe;'],
        ['&#xf196;'],
        ['&#xf011;'],
        ['&#xf02f;'],
        ['&#xf12e;'],
        ['&#xf029;'],
        ['&#xf128;'],
        ['&#xf059;'],
        ['&#xf10d;'],
        ['&#xf10e;'],
        ['&#xf074;'],
        ['&#xf1b8;'],
        ['&#xf021;'],
        ['&#xf25d;'],
        ['&#xf112;'],
        ['&#xf122;'],
        ['&#xf079;'],
        ['&#xf018;'],
        ['&#xf135;'],
        ['&#xf09e;'],
        ['&#xf143;'],
        ['&#xf002;'],
        ['&#xf010;'],
        ['&#xf00e;'],
        ['&#xf233;'],
        ['&#xf064;'],
        ['&#xf1e0;'],
        ['&#xf1e1;'],
        ['&#xf14d;'],
        ['&#xf045;'],
        ['&#xf132;'],
        ['&#xf21a;'],
        ['&#xf07a;'],
        ['&#xf090;'],
        ['&#xf08b;'],
        ['&#xf012;'],
        ['&#xf0e8;'],
        ['&#xf1de;'],
        ['&#xf118;'],
        ['&#xf0dc;'],
        ['&#xf15d;'],
        ['&#xf15e;'],
        ['&#xf160;'],
        ['&#xf161;'],
        ['&#xf0de;'],
        ['&#xf0dd;'],
        ['&#xf162;'],
        ['&#xf163;'],
        ['&#xf197;'],
        ['&#xf110;'],
        ['&#xf1b1;'],
        ['&#xf0c8;'],
        ['&#xf096;'],
        ['&#xf005;'],
        ['&#xf089;'],
        ['&#xf123;'],
        ['&#xf006;'],
        ['&#xf249;'],
        ['&#xf24a;'],
        ['&#xf21d;'],
        ['&#xf0f2;'],
        ['&#xf185;'],
        ['&#xf10a;'],
        ['&#xf0e4;'],
        ['&#xf02b;'],
        ['&#xf02c;'],
        ['&#xf0ae;'],
        ['&#xf1ba;'],
        ['&#xf26c;'],
        ['&#xf120;'],
        ['&#xf08d;'],
        ['&#xf165;'],
        ['&#xf088;'],
        ['&#xf087;'],
        ['&#xf164;'],
        ['&#xf145;'],
        ['&#xf00d;'],
        ['&#xf057;'],
        ['&#xf05c;'],
        ['&#xf043;'],
        ['&#xf204;'],
        ['&#xf205;'],
        ['&#xf25c;'],
        ['&#xf1f8;'],
        ['&#xf014;'],
        ['&#xf1bb;'],
        ['&#xf091;'],
        ['&#xf0d1;'],
        ['&#xf1e4;'],
        ['&#xf0e9;'],
        ['&#xf19c;'],
        ['&#xf09c;'],
        ['&#xf13e;'],
        ['&#xf093;'],
        ['&#xf007;'],
        ['&#xf234;'],
        ['&#xf21b;'],
        ['&#xf235;'],
        ['&#xf0c0;'],
        ['&#xf03d;'],
        ['&#xf027;'],
        ['&#xf026;'],
        ['&#xf028;'],
        ['&#xf193;'],
        ['&#xf1eb;'],
        ['&#xf0ad;']
    ];
    
    var brandIcons = [
        ['&#xf26e;'],
        ['&#xf170;'],
        ['&#xf270;'],
        ['&#xf17b;'],
        ['&#xf209;'],
        ['&#xf179;'],
        ['&#xf1b4;'],
        ['&#xf1b5;'],
        ['&#xf171;'],
        ['&#xf172;'],
        ['&#xf27e;'],
        ['&#xf15a;'],
        ['&#xf20d;'],
        ['&#xf1f3;'],
        ['&#xf24c;'],
        ['&#xf1f2;'],
        ['&#xf24b;'],
        ['&#xf1f1;'],
        ['&#xf1f4;'],
        ['&#xf1f5;'],
        ['&#xf1f0;'],
        ['&#xf268;'],
        ['&#xf1cb;'],
        ['&#xf20e;'],
        ['&#xf26d;'],
        ['&#xf13c;'],
        ['&#xf210;'],
        ['&#xf1a5;'],
        ['&#xf1bd;'],
        ['&#xf1a6;'],
        ['&#xf17d;'],
        ['&#xf16b;'],
        ['&#xf1a9;'],
        ['&#xf1d1;'],
        ['&#xf23e;'],
        ['&#xf09a;'],
        ['&#xf230;'],
        ['&#xf082;'],
        ['&#xf269;'],
        ['&#xf16e;'],
        ['&#xf280;'],
        ['&#xf211;'],
        ['&#xf180;'],
        ['&#xf265;'],
        ['&#xf260;'],
        ['&#xf261;'],
        ['&#xf1d3;'],
        ['&#xf1d2;'],
        ['&#xf09b;'],
        ['&#xf113;'],
        ['&#xf092;'],
        ['&#xf1a0;'],
        ['&#xf0d5;'],
        ['&#xf0d4;'],
        ['&#xf1ee;'],
        ['&#xf184;'],
        ['&#xf1d4;'],
        ['&#xf27c;'],
        ['&#xf13b;'],
        ['&#xf16d;'],
        ['&#xf26b;'],
        ['&#xf208;'],
        ['&#xf1aa;'],
        ['&#xf1cc;'],
        ['&#xf202;'],
        ['&#xf203;'],
        ['&#xf212;'],
        ['&#xf0e1;'],
        ['&#xf08c;'],
        ['&#xf17c;'],
        ['&#xf136;'],
        ['&#xf20c;'],
        ['&#xf23a;'],
        ['&#xf263;'],
        ['&#xf264;'],
        ['&#xf23d;'],
        ['&#xf19b;'],
        ['&#xf26a;'],
        ['&#xf23c;'],
        ['&#xf18c;'],
        ['&#xf1ed;'],
        ['&#xf1a7;'],
        ['&#xf1a8;'],
        ['&#xf0d2;'],
        ['&#xf231;'],
        ['&#xf0d3;'],
        ['&#xf1d6;'],
        ['&#xf1d0;'],
        ['&#xf1a1;'],
        ['&#xf1a2;'],
        ['&#xf18b;'],
        ['&#xf267;'],
        ['&#xf213;'],
        ['&#xf1e0;'],
        ['&#xf1e1;'],
        ['&#xf214;'],
        ['&#xf215;'],
        ['&#xf216;'],
        ['&#xf17e;'],
        ['&#xf198;'],
        ['&#xf1e7;'],
        ['&#xf1be;'],
        ['&#xf1bc;'],
        ['&#xf18d;'],
        ['&#xf16c;'],
        ['&#xf1b6;'],
        ['&#xf1b7;'],
        ['&#xf1a4;'],
        ['&#xf1a3;'],
        ['&#xf1d5;'],
        ['&#xf181;'],
        ['&#xf262;'],
        ['&#xf173;'],
        ['&#xf174;'],
        ['&#xf1e8;'],
        ['&#xf099;'],
        ['&#xf081;'],
        ['&#xf237;'],
        ['&#xf27d;'],
        ['&#xf194;'],
        ['&#xf1ca;'],
        ['&#xf189;'],
        ['&#xf18a;'],
        ['&#xf1d7;'],
        ['&#xf232;'],
        ['&#xf266;'],
        ['&#xf17a;'],
        ['&#xf19a;'],
        ['&#xf168;'],
        ['&#xf169;'],
        ['&#xf23b;'],
        ['&#xf19e;'],
        ['&#xf1e9;'],
        ['&#xf167;'],
        ['&#xf16a;'],
        ['&#xf166;']
    ];
    
    var directionalIcons = [
        ['&#xf103;'],
        ['&#xf100;'],
        ['&#xf101;'],
        ['&#xf102;'],
        ['&#xf107;'],
        ['&#xf104;'],
        ['&#xf105;'],
        ['&#xf106;'],
        ['&#xf0ab;'],
        ['&#xf0a8;'],
        ['&#xf01a;'],
        ['&#xf190;'],
        ['&#xf18e;'],
        ['&#xf01b;'],
        ['&#xf0a9;'],
        ['&#xf0aa;'],
        ['&#xf063;'],
        ['&#xf060;'],
        ['&#xf061;'],
        ['&#xf062;'],
        ['&#xf047;'],
        ['&#xf0b2;'],
        ['&#xf07e;'],
        ['&#xf07d;'],
        ['&#xf0d7;'],
        ['&#xf0d9;'],
        ['&#xf0da;'],
        ['&#xf150;'],
        ['&#xf191;'],
        ['&#xf152;'],
        ['&#xf151;'],
        ['&#xf0d8;'],
        ['&#xf13a;'],
        ['&#xf137;'],
        ['&#xf138;'],
        ['&#xf139;'],
        ['&#xf078;'],
        ['&#xf053;'],
        ['&#xf054;'],
        ['&#xf077;'],
        ['&#xf0ec;'],
        ['&#xf0a7;'],
        ['&#xf0a5;'],
        ['&#xf0a4;'],
        ['&#xf0a6;'],
        ['&#xf175;'],
        ['&#xf177;'],
        ['&#xf178;'],
        ['&#xf176;']
    ];
    
    var textEditorIcons = [
        ['&#xf037;'],
        ['&#xf039;'],
        ['&#xf036;'],
        ['&#xf038;'],
        ['&#xf032;'],
        ['&#xf127;'],
        ['&#xf0ea;'],
        ['&#xf0db;'],
        ['&#xf12d;'],
        ['&#xf15b;'],
        ['&#xf016;'],
        ['&#xf15c;'],
        ['&#xf0f6;'],
        ['&#xf0c5;'],
        ['&#xf0c7;'],
        ['&#xf031;'],
        ['&#xf1dc;'],
        ['&#xf03c;'],
        ['&#xf033;'],
        ['&#xf0c1;'],
        ['&#xf03a;'],
        ['&#xf022;'],
        ['&#xf0cb;'],
        ['&#xf0ca;'],
        ['&#xf03b;'],
        ['&#xf0c6;'],
        ['&#xf1dd;'],
        ['&#xf01e;'],
        ['&#xf0c4;'],
        ['&#xf0cc;'],
        ['&#xf12c;'],
        ['&#xf12b;'],
        ['&#xf0ce;'],
        ['&#xf034;'],
        ['&#xf035;'],
        ['&#xf00a;'],
        ['&#xf009;'],
        ['&#xf00b;'],
        ['&#xf0cd;'],
        ['&#xf0e2;']
    ];
    
    var videoPlayerIcons = [
        ['&#xf0b2;'],
        ['&#xf04a;'],
        ['&#xf066;'],
        ['&#xf052;'],
        ['&#xf065;'],
        ['&#xf049;'],
        ['&#xf050;'],
        ['&#xf04e;'],
        ['&#xf04c;'],
        ['&#xf04b;'],
        ['&#xf144;'],
        ['&#xf01d;'],
        ['&#xf074;'],
        ['&#xf048;'],
        ['&#xf051;'],
        ['&#xf04d;'],
        ['&#xf16a;']
    ];
    
    var transportationIcons = [
        ['&#xf0f9;'],
        ['&#xf206;'],
        ['&#xf207;'],
        ['&#xf1b9;'],
        ['&#xf0fb;'],
        ['&#xf21c;'],
        ['&#xf072;'],
        ['&#xf135;'],
        ['&#xf21a;'],
        ['&#xf197;'],
        ['&#xf239;'],
        ['&#xf1ba;'],
        ['&#xf238;'],
        ['&#xf0d1;'],
        ['&#xf193;']
    ];
    
    var fileTypeIcons = [
        ['&#xf15b;'],
        ['&#xf1c6;'],
        ['&#xf1c7;'],
        ['&#xf1c9;'],
        ['&#xf1c3;'],
        ['&#xf1c5;'],
        ['&#xf016;'],
        ['&#xf1c1;'],
        ['&#xf1c4;'],
        ['&#xf15c;'],
        ['&#xf0f6;'],
        ['&#xf1c8;'],
        ['&#xf1c2;']
    ];
    
    var genderIcons = [
        ['&#xf22d;'],
        ['&#xf222;'],
        ['&#xf227;'],
        ['&#xf229;'],
        ['&#xf22b;'],
        ['&#xf22a;'],
        ['&#xf223;'],
        ['&#xf22c;'],
        ['&#xf224;'],
        ['&#xf225;'],
        ['&#xf221;'],
        ['&#xf226;'],
        ['&#xf228;']
    ];
    
    var formControlIcons = [
        ['&#xf14a;'],
        ['&#xf046;'],
        ['&#xf111;'],
        ['&#xf10c;'],
        ['&#xf192;'],
        ['&#xf146;'],
        ['&#xf147;'],
        ['&#xf0fe;'],
        ['&#xf196;'],
        ['&#xf0c8;'],
        ['&#xf096;']
    ];
    
    var currencyIcons = [
        ['&#xf15a;'],
        ['&#xf153;'],
        ['&#xf154;'],
        ['&#xf260;'],
        ['&#xf261;'],
        ['&#xf20b;'],
        ['&#xf156;'],
        ['&#xf157;'],
        ['&#xf159;'],
        ['&#xf0d6;'],
        ['&#xf158;'],
        ['&#xf195;'],
        ['&#xf155;']
    ];
    
    var medicalIcons = [
        ['&#xf0f9;'],
        ['&#xf0fd;'],
        ['&#xf004;'],
        ['&#xf08a;'],
        ['&#xf21e;'],
        ['&#xf0f8;'],
        ['&#xf0fa;'],
        ['&#xf0fe;'],
        ['&#xf0f1;'],
        ['&#xf0f0;'],
        ['&#xf193;']
    ];
    
    var paymentIcons = [
        ['&#xf1f3;'],
        ['&#xf24c;'],
        ['&#xf1f2;'],
        ['&#xf24b;'],
        ['&#xf1f1;'],
        ['&#xf1f4;'],
        ['&#xf1f5;'],
        ['&#xf1f0;'],
        ['&#xf09d;'],
        ['&#xf1ee;'],
        ['&#xf1ed;']
    ];
    
    var spinnerIcons = [
        ['&#xf1ce;'],
        ['&#xf013;'],
        ['&#xf021;'],
        ['&#xf110;']
    ];
    
    var chartIcons = [
        ['&#xf1fe;'],
        ['&#xf080;'],
        ['&#xf201;'],
        ['&#xf200;']
    ];

    var handIcons = [
        ['&#xf258;'],
        ['&#xf0a7;'],
        ['&#xf0a5;'],
        ['&#xf0a4;'],
        ['&#xf0a6;'],
        ['&#xf256;'],
        ['&#xf25b;'],
        ['&#xf25a;'],
        ['&#xf255;'],
        ['&#xf257;'],
        ['&#xf259;'],
        ['&#xf165;'],
        ['&#xf088;'],
        ['&#xf087;'],
        ['&#xf164;']
    ];

    function showDialog() {
        
        var win;
        
        var hideAccordion = 0;
        
        function groupHtml(iconGroup, iconTitle) {
        
            var gridHtml;
            
            if (hideAccordion === 0) {
                gridHtml = '<div class="mce-fontawesome-panel-accordion"><div class="mce-fontawesome-panel-title">' + iconTitle + '</div>';
                gridHtml += '<div class="mce-fontawesome-panel-table" style="height: auto;"><table role="presentation" cellspacing="0"><tbody>';
                hideAccordion = 1;
            }
            else {
                gridHtml = '<div class="mce-fontawesome-panel-accordion mce-fontawesome-panel-accordion-hide"><div class="mce-fontawesome-panel-title">' + iconTitle + '</div>';
                gridHtml += '<div class="mce-fontawesome-panel-table"><table role="presentation" cellspacing="0"><tbody>';
            }
    
            var width = 23;
            for (var y = 0; y < (iconGroup.length / width); y++) {
                gridHtml += '<tr>';
    
                for (var x = 0; x < width; x++) {
                    if (iconGroup[y * width + x]) {
                        if (iconTitle === 'Spinner') {
                            gridHtml += '<td><span class="fa fa-spin mceNonEditable">' + iconGroup[y * width + x] + '</span></td>';
                        }
                        else {
                            gridHtml += '<td><span class="fa mceNonEditable">' + iconGroup[y * width + x] + '</span></td>';
                        }
                    }
                }
    
                gridHtml += '</tr>';
            }
    
            gridHtml += '</tbody></table></div></div>';
            
            return gridHtml;
        
        }
        
        var panelHtml = groupHtml(webApplicationIcons, translate('Web Application'))
                      + groupHtml(fileTypeIcons, translate('File Type'))
                      + groupHtml(spinnerIcons, translate('Spinner'))
                      + groupHtml(formControlIcons, translate('Form Control'))
                      + groupHtml(currencyIcons, translate('Currency'))
                      + groupHtml(textEditorIcons, translate('Text Editor'))
                      + groupHtml(directionalIcons, translate('Directional'))
                      + groupHtml(videoPlayerIcons, translate('Video Player'))
                      + groupHtml(brandIcons, translate('Brand'))
                      + groupHtml(medicalIcons, translate('Medical'))
                      + groupHtml(transportationIcons, translate('Transportation'))
                      + groupHtml(genderIcons, translate('Gender'))
                      + groupHtml(paymentIcons, translate('Payment'))
                      + groupHtml(chartIcons, translate('Chart'))
                      + groupHtml(handIcons, translate('Hand'));

        win = editor.windowManager.open({
            autoScroll: true,
            width: 670,
            height: 500,
            title: 'Icons',
            spacing: 20,
            padding: 10,
            classes: 'fontawesome-panel',
            items: [
                {
                    type: 'container',
                    html: panelHtml,
                    onclick: function (e) {
                    var target = e.target;
                    if (target.nodeName == 'SPAN') {
                        editor.execCommand('mceInsertContent', false, target.outerHTML);
                        win.close();
                    }
                },
                
                }, {
                    type: 'label',
                    text: ' '
                }
            ],
            buttons: [{
                text: 'Close',
                onclick: function () {
                    win.close();
                }
            }]
        });
        
        // Accordion
        
        var accordionItems = [];
        
        var divs = document.getElementsByTagName('div');
        for (var i = 0; i < divs.length; i++) {
            if (divs[i].className == 'mce-fontawesome-panel-accordion' || divs[i].className == 'mce-fontawesome-panel-accordion mce-fontawesome-panel-accordion-hide') {
                accordionItems.push(divs[i]);
            }
        }
        
        // Assign onclick events to the accordion item headings
        for (i = 0; i < accordionItems.length; i++) {
            var accordionTitle = getFirstChildWithTagName(accordionItems[i], 'DIV');
            accordionTitle.onclick = toggleItem;
        }
        
        var firstDiv = accordionItems[0].getElementsByTagName('div')[1];
        var firstDivHeight = firstDiv.offsetHeight;
        firstDiv.style.height = firstDivHeight + 'px';
        
        function toggleItem() {
            var itemClass = this.parentNode.className;
            
            // Hide all items
            for (var i = 0; i < accordionItems.length; i++) {
                accordionItems[i].className = 'mce-fontawesome-panel-accordion mce-fontawesome-panel-accordion-hide';
                accordionItems[i].getElementsByTagName('div')[1].style.height = '0';
            }
            
            // Show this item if it was previously hidden
            if (itemClass == 'mce-fontawesome-panel-accordion mce-fontawesome-panel-accordion-hide') {
                var accordionItemContent = this;
                do accordionItemContent = accordionItemContent.nextSibling; while(accordionItemContent && accordionItemContent.nodeType !== 1);
         
                accordionItemContent.style.height = 'auto';
                var divHeight = accordionItemContent.offsetHeight;
                accordionItemContent.style.height = '';
                this.parentNode.className = 'mce-fontawesome-panel-accordion';
                window.setTimeout(function () {
                    accordionItemContent.style.height = divHeight + 'px';
                }, 50);
            }
        }
        
        function getFirstChildWithTagName( element, tagName) {
            for (var i = 0; i < element.childNodes.length; i++) {
                if (element.childNodes[i].nodeName == tagName) {
                    return element.childNodes[i];
                }
            }
        }
    }
    
    editor.on('init', function() {
        var csslink = editor.dom.create('link', {
            rel: 'stylesheet',
            href: url + '/css/fontawesome.min.css'
        });
        document.getElementsByTagName('head')[0].appendChild(csslink);
    });
    
    editor.addButton('fontawesome', {
        icon: 'flag',
        text: translate('Icons'),
        tooltip: translate('Icons'),
        onclick: showDialog
    });

    editor.addMenuItem('fontawesome', {
        icon: 'flag',
        text: translate('Icons'),
        onclick: showDialog,
        context: 'insert'
    });
});