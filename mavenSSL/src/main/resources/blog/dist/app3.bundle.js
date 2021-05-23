/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//require('./js/force');  

// require('./js/daily-nav'); 
// require('./js/marsreader');     

// require('./js/blog-draft-2020mar');  
// require('./js/blog-draft-may19');
// require('./js/blog-draft-march19');
// require('./js/blog-draft-jan19');
// require('./js/blog-draft-dec');
// require('./js/blog-draft-nov');
// require('./js/blog-draft-oct');
// require('./js/blog-draft-sep');
__webpack_require__(14);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
// require('./js/blog-draft-apr');
// require('./js/blog-draft-mar');
// require('./js/blog-draft-feb'); 

// modal
// var modal = document.getElementById('msimpleModal');  
// var modalBtn = document.getElementById('mmodalBtn'); 
// var closeBtn = document.getElementsByClassName('mcloseBtn')[0];  

// modalBtn.addEventListener('click', openModal); 
// closeBtn.addEventListener('click', closeModal); 
// window.addEventListener('click', outsideClick); 

// function openModal(){
//   modal.style.display = 'block';
//   modalBtn.style.display = 'none';
// } 
// function closeModal(){
//   modal.style.display = 'none';
//   modalBtn.style.display = 'block';
// } 
// function outsideClick(e){
//   if(e.target == modal){
//     modal.style.display = 'none';
//   modalBtn.style.display = 'block';
//   }
// };

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bloggerAug = function bloggerAug() {
  var blogpost22 = '<p class="firstparagraph">Quantum computing, now readily available for science-venturing public consumption: IBM\'s Quantum Community and Resources offer cloud access to quantum hardware:\n  </p>\n  <p class="quote">Check out our User Guides and interactive Demos to learn more about quantum principles. Or, dive right in to create and run algorithms on real quantum computing hardware, using the Quantum Composer and QISKit software developer kit.<sup>1</sup></p>\n  <p>With an uncanny resemblence to 21st century chandeliers, the hardware itself is no light matter: Each successive layer cools down to    final chamber that runs at a cool .0017&deg; Kelvin--colder than space!\n  </p>\n  ';
  var blogcite22 = '<p class="cite">1. <a   href="https://quantumexperience.ng.bluemix.net/qx/experience"   target="_blank">https://quantumexperience.ng.bluemix.net/qx/experience\n  </a>\n  </p>';

  var blogpost21 = ' \n  <p class="quote">The Lamborghini Aventador SVJ already made a splash last month when it set a new N\xFCrburgring Nordschleife record for production cars, running an incredible 6:44.97 lap time. Now, it sheds its camouflage, and yep, it looks exactly as crazy as we hoped. This might be one of the wildest Lamborghinis yet.<br /><br />\n  Since we\'ve tackled the SVJ\'s N\xFCrburgring lap time, let\'s cover some other numbers. Its 6.5-liter V12 produces 770 horsepower, making this one of the most powerful naturally aspirated road cars of all time. Maximum torque is 531 lb-ft at 6750 rpm, while the power peak comes at 8500 rpm. Lamborghini claims a dry weight of 3362 lbs, which is 110 lbs lighter than an Aventador S coupe according to the factory. Acceleration is jaw-dropping, too, with 62 mph arriving in 2.8 seconds and 124 mph coming in 8.6. Top speed is 217 mph.<sup>1</sup></p>\n  <img src="dist/img/aventador.jpg" width="350" class="zoom"  /><br />\n  <p>Image credit: Road &amp; Track</p>\n \n    ';
  var blogcite21 = '   <p class="cite">1. <a   href="https://www.roadandtrack.com/car-shows/monterey-car-week/a22822020/2019-lamborghini-aventador-svj-debut-specs-photos-price/"   target="_blank">https://www.roadandtrack.com/car-shows/monterey-car-week/a22822020/2019-lamborghini-aventador-svj-debut-specs-photos-price/\n    </a></p> \n    ';
  var blogpost20 = '<p class="firstparagraph">Security patches that couldn\'t have arrived sooner ... </p><p class="quote">The Fortnite Installer was easily exploitable to hijack the request to download the full game.      The problem, as Google\'s security team discovered, was that the Fortnite Installer was very easily exploitable to hijack the request to download Fortnite from Epic and instead download anything when you tap the button to download the game. It\'s what\'s known as a "man-in-the-disk" attack: an app on your phone looks for requests to download something from the internet and intercepts that request to download something else instead, unbeknownst to the original downloading app.<br /><br />Here\'s where things get really bad. Because of the way Android\'s permissions model works, you won\'t have to accept installation of an app from "unknown sources" beyond the time you accepted that installation for Fortnite.<sup>1</sup> </p>\n       \n      ';
  var blogcite20 = '   <p class="cite">1. <a   href="https://www.androidcentral.com/epic-games-first-fortnite-installer-allowed-hackers-download-install-silently"   target="_blank"> \n    https://www.androidcentral.com/epic-games-first-fortnite-installer-allowed-hackers-download-install-silently </a></p> \n      ';
  var blogpost19 = '<p class="firstparagraph">Quantum leap from traditional electromagnetic on/off bits (eight bits per byte) is intuitive to the binary qubit, and yet the the superposition third option is less evident: Rather, our observation of the <i>superposition depends on the <strong>probability</i> that, when observed, the value will be affirmative or negative. Better explained by Wired ...</p>\n  <p class="quote">\nComputers do calculations using bits, too. After all, we want them to plug into our existing data and computers. But quantum bits, or qubits, have unique and powerful properties that allow a group of them to do much more than an equivalent number of conventional bits.\n\nQubits can be built in various ways, but they all represent digital 0s and 1s using the quantum properties of something that can be controlled electronically. Popular examples\u2014at least among a very select slice of humanity\u2014include superconducting circuits, or individual atoms levitated inside electromagnetic fields. The magic power of quantum computing is that this arrangement lets qubits do more than just flip between 0 and 1. Treat them right and they can flip into a mysterious extra mode called a superposition.<sup>1</sup>\n</p> \n<p class="quote">For some problems that are very time consuming for conventional computers, this allows a quantum computer to find a solution in far fewer steps than a conventional computer would need. Grover\u2019s algorithm, a famous quantum search algorithm, could find you in a phone book with 100 million names with just 10,000 operations. If a classical search algorithm just spooled through all the listings to find you, it would require 50 million operations, on average.<sup>1</sup> </p>\n        \n        ';
  var blogcite19 = ' <p class="cite">1.  <a   href="https://www.wired.com/story/wired-guide-to-quantum-computing/"   target="_blank">https://www.wired.com/story/wired-guide-to-quantum-computing/\n      </a></p>     ';

  var blogpost18 = '<p class="firstparagraph">Quantum research has finally progressed beyond proof-of-concept to practical utility. First photon state transfer, and now solid state transfer of "entangled states" allowing for binary, instant data transfer. Beyond medical and enterprise use, quantum entanglement\'s incremental progress now raises a few eyebrows: \n    </p>\n   <p class="quote">That\u2019s because Google, IBM, and others have decided it\u2019s time to invest heavily in the technology, which, in turn, has helped quantum computing earn a bullet point on the corporate strategy PowerPoint slides of big companies in areas such as finance, like JPMorgan, and aerospace, like Airbus. In 2017, venture investors plowed $241 million into startups working on quantum computing hardware or software worldwide, according to CB Insights. That\u2019s triple the amount in the previous year. <sup>1</sup></p>\n  \n<p>   The cause for excitement accelerates at the pace of progress on the technical engineering side:\n   </p>\n<p class="quote">Physicists have experimentally demonstrated 18-qubit entanglement, which is the largest entangled state achieved so far with individual control of each qubit. As each qubit has two possible values, the 18 qubits can generate a total of 218 (or 262,144) combinations of output states. Since quantum information can be encoded in these states, the results have potential applications anywhere quantum information processing is used.\n .<sup>2</sup></p>\n   <p>So, while there are algorithms, like <i>Shor\'s SHA-defeating algorithm, that have only existed in theory, can now be applied using capable computational power for the job.</i>\n </p> \n   ';
  var blogcite18 = '  <p class="cite">1.  <a   href="https://www.wired.com/story/wired-guide-to-quantum-computing/"   target="_blank">https://www.wired.com/story/wired-guide-to-quantum-computing/\n   </a></p> \n   \n   <p class="cite">2. <a   href="https://phys.org/news/2018-07-qubit-entanglement.html"   target="_blank">https://phys.org/news/2018-07-qubit-entanglement.html\n   </a></p>  \n   ';

  var blogpost17 = '<p class="firstparagraph">Silicon Valley\'s tide has rolled in and the ships are tucked away for the night. At dawn, Silicon Valley arises and inherits the kingdom, along with Seattle: And, so   become <i> the intractable data needs of all institutions, public or private, big and small--needs only the cloud can answer.</i> </p>\n    <p>And why not? Cloud data storage offers security, direct service providers with big data jobs, Netflix and Linkedin\'s extensive real-time network analsyis using Kafka speeds up their ever-ready recommendations.  Reuters shows a glimpse of the Pentagon\'s (and other nations\'s) accelerating need to secure data as the intertwining networks of world data migrates to distributed, cloud storage. In this domain, public infrastructure, whether platform-as-a-service or servers, technology -- as usual -- must swoop to save the day. </p>\n\n    <p class="quote">Consultants associated with the $927 billion Seattle juggernaut occupied top positions at the Pentagon ahead of the rollout of a massive cloud contract worth some $10 billion that Amazon looks poised to snag. Rivals complain the requirements were written to favor Bezos\u2019s company. Either way, investors should be prepared for its government business to attract greater scrutiny.<sup>1</sup> \n    </p>\n    <p>Surely controversy awaits any bid decision down here on earth, but all things that go up to the cloud need not come down.</p>\n    ';
  var blogcite17 = '   <p class="cite">1. <a   href="https://www.reuters.com/article/uk-usa-pentagon-breakingviews/breakingviews-amazon-pentagon-ties-may-receive-greater-scrutiny-idUSKBN1L10AS"   target="_blank">https://www.reuters.com/article/uk-usa-pentagon-breakingviews/breakingviews-amazon-pentagon-ties-may-receive-greater-scrutiny-idUSKBN1L10AS\n    </a></p> \n    ';

  var blogpost16 = '<p class="firstparagraph">Einstein\'s remark on quantum entanglement\'s \'spooky\' characteristics holds for those caught off-guard, but sudden isn\'t spooky when sudden is expected. Tokyo\'s first photon to satellite back to earth with a button switch control almost leads to banality. Yet, transmitting data through a shared quantum state from the first party to second party appears intuitive, even if it is   other-worldly. Wired Magazine:  </p>\n    <p class="quote">You may have heard that a qubit in superposition is both 0 and 1 at the same time. That\u2019s not quite true and also not quite false\u2014there\u2019s just no equivalent in Homo sapiens\u2019 humdrum classical reality. If you have a yearning to truly grok it, you must make a mathematical odyssey WIRED cannot equip you for. But in the simplified and dare we say perfect world of this explainer, the important thing to know is that the math of a superposition describes the probability of discovering either a 0 or 1 when a qubit is read out\u2014an operation that crashes it out of a quantum superposition into classical reality.<sup>1</sup>  \n    </p>\n    <p>Yale researchers on the topic:</p>\n    <p class="quote">\n    In a quantum process known as teleportation the unknown state of a quantum bit can be relayed to a distant party using shared entanglement and classical information. Here we present experiments in a solid-state system based on superconducting quantum circuits demonstrating the teleportation of the state of a qubit at the macroscopic scale. In our experiments teleportation is realized deterministically with high efficiency and achieves a high rate of transferred qubit states. This constitutes a significant step towards the realization of repeaters for quantum communication at microwave frequencies and broadens the tool set for quantum information processing with superconducting circuits. </i><sup>2</sup></p>\n    ';
  var blogcite16 = '<p class="cite">1. <a href="https://www.wired.com/story/wired-guide-to-quantum-computing/"   target="_blank">https://www.wired.com/story/wired-guide-to-quantum-computing/\n    </a></p>\n    <p class="cite">2. <a href="https://seas.yale.edu/news-events/news/quantum-technology-chip"   target="_blank">https://seas.yale.edu/news-events/news/quantum-technology-chip\n    </a></p>';

  var blogpost15 = '\n    <p class="firstparagraph">Quantum communication of data offers instant data transfer, and impenatrability from 3rd parties ... Among the exciting on events on New Haven\'s public space Green Park, Yale researchers\' quantum advances steal the headlines: </p>\n    <p class="quote">The two essential requirements for a scalable quantum information processor are quantum interference (in which a photon \u2013 able to be in more than one place at a time \u2013 crosses its own path) and single-photon detectors. The chip that the researchers designed contains a nanophotonic waveguide, which can guide light into small spaces and to wherever is needed on the chip. It also has a directional coupler that can split a light beam into two identical beams, or conversely, combine two beams into one output.\n    <br /><br />\n    With this research, Schuck said the research team should eventually realize a programmable optical quantum processor that can run a quantum algorithm. The scalability of the nanofabrication routines for silicon chips will then allow them to solve problems difficult for classical computers.<sup>1</sup></p>\n    <p>Besides the quantum characteristic of a third party\'s observation/interference, the state is broken and data transfer disappears--and, yet another state is but a button flip\'s switch away!</p> ';
  var blogcite15 = '\n    </p>\n    <p class="cite">1. <a href="https://arxiv.org/abs/1302.5621"   target="_blank">https://arxiv.org/abs/1302.5621\n    </p>\n    <p class="cite">1. <a href="https://www.nature.com/articles/ncomms10352"   target="_blank">https://www.nature.com/articles/ncomms10352\n    </a>\n    </p>\n    \n    ';
  var blogpost14 = '<p class="firstparagraph">      </p>\n    <p class="quote">   </p> \n    ';
  var blogcite14 = ' \n    <p class="cite">1. <a href="https://www.zdnet.com/article/how-brand-new-science-will-manage-the-fourth-industrial-revolution/"   target="_blank">https://www.zdnet.com/article/how-brand-new-science-will-manage-the-fourth-industrial-revolution/\n    </a>\n    </p>\n    <p class="cite">1. <a href="https://scitechdaily.com/physicists-teleport-information-in-a-solid-state-system/amp/"   target="_blank">https://scitechdaily.com/physicists-teleport-information-in-a-solid-state-system/amp/\n    </a>\n    </p>\n    ';
  var blogpost13 = '<p class="firstparagraph"> \n</p><p class="quote"> \n<p >\u201CHistorically, magnetism and superconductivity were very disparate fields of physics,\u201D Birge said. \u201CThe 1960s\u2019 point of view was that if you were to bring a ferromagnet near a superconductor, you would kill the conductivity.<br /><br />\n\u201CIt was found that you can put a ferromagnet near a superconductor; in fact, you can even make a \u2018sandwich\u2019\u2014superconductor, ferromagnet, superconductor,\u201D said Joseph Glick, a former doctorate student in Birge\u2019s lab and the paper\u2019s lead author. \u201CAny sandwich of this type is called a Josephson junction, which is at the heart of everything we are doing.<sup>1</sup> </p> \n';
  var blogcite13 = '  \n<p class="cite">1. <a href="https://msutoday.msu.edu/news/2018/msu-physicists-solve-a-storied-problem/"   target="_blank">https://msutoday.msu.edu/news/2018/msu-physicists-solve-a-storied-problem/\n</a>\n</p>\n';
  var blogpost12 = '<p class="firstparagraph">      </p>\n    <p class="quote"> <sup> </sup>\n    </p><br />    <p > </p>';
  var blogcite12 = '<p class="cite">  <a href="https://www.nature.com/articles/ncomms10352"   target="_blank">https://www.nature.com/articles/ncomms10352\n    </a>\n    </p>';
  var blogpost11 = '<p class="firstparagraph">Marvels of anomaly detection extend from business and state security to software integriy -- why not extend the use to <i>social integrity traced by network interaction signatures ...</i> \n    </p>\n    <p class="quote">While some attempts to detect social-media accounts of malicious actors rely on content or language filters that terrorists and disinformers have proved capable of confusing, Mr. Alvari\u2019s algorithm looks for accounts that spread content further and faster than expected. Since this is the goal of terrorist recruiters and propagandists alike, the method could be on the front lines of algorithmic filtering across social networks. Humans still need to make the final determination, to avoid false positives. <sup>1</sup>\n    </p>\n    <p class="quote">While some attempts to detect social-media accounts of malicious actors rely on content or language filters that terrorists and disinformers have proved capable of confusing, Mr. Alvari\u2019s algorithm looks for accounts that spread content further and fas                                                                                                         ter than expected. Since this is the goal of terrorist recruiters and propagandists alike, the method could be on the front lines of algorithmic filtering across social networks. Humans still need to make the final determination, to avoid false positives. <sup>1</sup>\n    </p><br />  \n    <p > </p>.\n ';
  var blogcite11 = ' \n    <p class="cite">1. <a href="https://www.wsj.com/articles/bots-vs-trolls-how-ai-could-clean-up-social-media-1533849001?mod=djemCIO_h"   target="_blank">https://www.wsj.com/articles/bots-vs-trolls-how-ai-could-clean-up-social-media-1533849001?mod=djemCIO_h\n    </a>\n    </p>';

  var blogpost10 = '<p class="firstparagraph"> \n    </p>\n    <p class="quote">Machines used to be serviced according to a plan, and late maintenance would mean a risk of production downtime. Today, process data from machines is used for predicting remaining service life. Especially critical parameters such as temperature, noise, and vibration are recorded to help determine the optimal operating state or even necessary maintenance times. This allows unnecessary wear to be avoided and possible faults and their causes to be detected early on. With the help of this monitoring, considerable optimization potential in terms of facility availability and effectiveness arises, bringing with it decisive advantages.\n\n    The main element in this predictive maintenance (PM) is condition-based monitoring (CBM)\n\n    Addressing Sensor Challenges and Demands for Future Servicing<sup>1</sup>\n    </p><br />\n    <img src="dist/img/mechDegrade.jpg" width="350px" class="zoom" /><br />\n    <p > </p>';
  var blogcite10 = ' \n    <p class="cite">1. <a href="https://www.sensorsmag.com/components/addressing-sensor-challenges-and-demands-for-future-servicing"   target="_blank">https://www.sensorsmag.com/components/addressing-sensor-challenges-and-demands-for-future-servicing\n    </a>\n    </p>';

  var blogpost9 = '<p class="firstparagraph"> \n    </p>\n    <p class="quote">. Arrays of SQUIDs (superconducting quantum interference devices) are currently the most common magnetometer, while the SERF (spin exchange relaxation-free) magnetometer is being investigated for future machines.<sup>1</sup>\n    </p><br /> \n    <p > </p>.\n ';
  var blogcite9 = '  \n    <p class="cite">1. <a href="https://www.xlstat.com/en/solutions/features/classification-and-regression-trees"   target="_blank">https://www.xlstat.com/en/solutions/features/classification-and-regression-trees\n    </a>\n    </p>';

  var blogpost8 = '<p class="firstparagraph">Classification and Regression (Decision) Trees are not just accurate, multipurpose and foundational to predictive machine learning algorithms (e.g. random forests, bayesian trees, bagging), but the trees\' final product reveals the different rationale for the output. Printed onto a sheet   of paper, both statistical practitioner and the domain professional intuitively and heuristically understand practical use for an analysis. This July 2017 Cancer study exemplifies the utility of healthcare-based algorithms of analysis ... \n    </p>\n    <p class="quote">The aim of this study was to develop and validate a clinical predictive model for 1-year mortality among patients with colon cancer who survive for at least 30 days after surgery.<br /><br />Random forest, genetic algorithms and classification and regression trees were combined in order to identify the variables and partition points that optimally classify patients by risk of mortality. The resulting decision tree was categorized into four risk categories. Split-sample and bootstrap validation were performed.<sup>1</sup>\n    </p><br />\n    <img src="dist/img/irisCART.jpg" width="350px" class="zoom" /><br />\n    <p >And, now that sound methodology meets an increasingly user-friendly Machine Learning software toolset for wider practical applications, beginning firstly within healthcare technologies <i>and that second opinion!</i></p>.\n ';
  var blogcite8 = 'Image credits: https://www.xlstat.com/en/solutions/features/classification-and-regression-trees\n    <p class="cite">1. <a href="https://www.dovepress.com/combining-statistical-techniques-to-predict-postsurgical-risk-of-1-yea-peer-reviewed-article-CLEP#"   target="_blank">https://www.dovepress.com/combining-statistical-techniques-to-predict-postsurgical-risk-of-1-yea-peer-reviewed-article-CLEP#\n    </a>\n    </p>';

  var blogpost7 = '<p class="firstparagraph">Predictive analytics  has slowly progressed in sophistication over the past 45 years, and the current nexus with powerful machine-learning tools changes the health game: </p>\n    <p class="quote"> A report by ABI Research June 2018 report highlighted a significant rise in patient monitoring devices, including AI for home-based preventative healthcare and predictive analytics, which could save hospitals around $52bn by 2021.<br /><br />\n\n    Accenture\u2019s Digital Health Technology Vision 2018 report also claims that 85% of health executives in the US believe that every human will be directly impacted on a daily basis by an AI-based decision within the next three years.<br /><br />\n    \n    Utilising big data generated by clinical information and research can reveal clusters and patterns which can benefit all aspects of healthcare, leading patient care to become increasingly strategic.<sup>1</sup>  </p>\n    <p>It should be noted that the long road paved by statistical theory has revolutionized the above-mentioned fields as much as it now powers the practical use of analytics:</p>\n    <p class="quote">Originating in the statistical (e.g., Holland\n      1986; Rosenbaum 2002; Rubin 2005, 2006) and\n      econometrics literature (see Heckman 2000,\n      2001, 2005; Heckman & Vytlacil 2007a,b;\n      Manski 1995, 2007), the counterfactual,\n      Rubin, or potential outcomes model of causality\n      has, over the past three decades, become\n      the standard conceptual tool to unify the notion\n      of causality, to understand the identification\n      problem at the heart of causal inference,\n      and to assess the utility of alternative estimation\n      techniques (Sobel 2005).<sup>2</sup></p>\n      <p>So, the take-away here is that A.I. and <i>Machine-Learning Research could have never progressed so quickly if not for the settled scientic paradigm over sound analysis that rules out spurious variables, while properly weighting the conditions that matter.</i> Furthermore, the mistakes in algorithm design were made in the 1970\'s, 1980\'s, and 1990\'s--misleading mistakes--have been swept aside, providing much-tested and refined strategies. The medical field\'s case exemplifies this evolution:</p>\n    <p class="quote">Randomized controlled trials are considered the gold\n    standard for assessing the efficacy of medications, medical\n    procedures, or clinical strategies. Nevertheless, particularly\n    for research on the prevention of chronic disease, randomized\n    trials are often infeasible because of their size, time,\n    and budget requirements, as well as questionable generalizability\n    or ethical constraints.<br /><br />\n    On the other hand, nonexperimental studies of interventions\n    have frequently been criticized because of their potential\n    for selection bias. This concern reached a crescendo\n    with the disparity in estimated effects of hormone replacement\n    therapy from randomized trials and nonexperimental\n    studies. This imbroglio highlighted the need to develop\n    and apply improved methods to reduce bias in nonexperimental\n    studies in which selection bias or confounding is\n    likely to occur .<sup>3</sup></p>\n    <p>So, nowadays we don\'t ask for a second opinion when we can ask for a trillion opinions narrowed down to one heck of a second opinion!</p>';
  var blogcite7 = '\n    <p class="cite">1. <a href="https://www.healthcareglobal.com/technology/ai-seen-less-threat-and-welcomed-health-professionals-research-reveals"   target="_blank">https://www.healthcareglobal.com/technology/ai-seen-less-threat-and-welcomed-health-professionals-research-reveals\n    </a>\n    </p>\n    <p class="cite">2. <a href="https://www.annualreviews.org/doi/abs/10.1146/annurev.soc.012809.102702"   target="_blank">https://www.annualreviews.org/doi/abs/10.1146/annurev.soc.012809.102702\n    </a>\n    </p>    <p class="cite">3. <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1448214/"   target="_blank">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1448214/\n    </a>\n    </p>';

  var blogpost6 = '<p class="quote">  <i>[Intel\'s]  i9-8950HK processor is the first mobile Intel processor with six cores and 12 threads. It comes fully unlocked. It has the new Intel thermal Velocity Boost, which automatically increases clock frequency up to 200 MHz if the processor temperature is low enough and there\'s enough turbo power, giving a turbo frequency of up to 4.8 GHz.</i></p>\n    <p class="quote" The i9-8950HK processor is the first mobile Intel processor with six cores and 12 threads. It comes fully unlocked. It has the new Intel thermal Velocity Boost, which automatically increases clock frequency up to 200 MHz if the processor temperature is low enough and there\'s enough turbo power, giving a turbo frequency of up to 4.8 GHz.</i>\n    </p>\n    <p class="firstparagraph"> Needs shape our inventions and our inventions shape our needs: With the brand new set of mobile computing requirements serve up utility for the i9.  Intel\'s advances pale in comparison, however, to GPU and newer computing trends. This theme arises time after time in my posts, but mathematics will rewrite the rules of performance . . .</p>\n    <p class="quote">The 8th Gen processors incorporate Intel Octane memory, a smart and adaptable system accelerator for desktop and mobile platforms using SATA-based storage technology.<br /><br />\n\n    Intel also has released a new Data Drive Acceleration feature that boosts a large secondary HDD hard drive.\n    \n    Together, Intel Octane and Data Drive Acceleration provide up to 4.7x the game loading speed and 1.7x faster media loading, Intel said.\n     </p>\n    <p class="quote">\n    The actual task of processing AI is a very different process from standard computing or GPU processing, hence the perceived need for specialized chips. A x86 CPU can do AI, but it does a task in 12 steps when only three are required; a GPU in some cases can also be overkill.\n    <br /><br />\n    Generally, scientific computation is done in a deterministic fashion. You want to know two plus three equals five and calculate it to all of its decimal places\u2014x86 and GPU do that just fine. But the nature of AI is to say 2.5 + 3.5 is observed to be six almost all of the time without actually running the calculation. What matters with artificial intelligence today is the pattern found in the data, not the deterministic calculation. \n    <br /><br />\nThe result of this predictive problem solving is that AI calculations can be done with single precision calculations. So while CPUs and GPUs can both do it very well, they are in fact overkill for the task. A single-precision chip can do the work and do it in a much smaller, lower power footprint.</p>\n\n<p class="quote">Intel "can deliver on CPU functionality, which has dropped in performance, but still lags on GPUs and modems," noted Rob Enderle, principal analyst at the Enderle Group.\n\n"Much of the performance these days is gated by the modem and the GPU, not the CPU, which just isn\'t as importance as it once was," he told TechNewsWorld.\n\nDevelopers may not benefit much from the new processors, Enderle said, because "with IDF shut down, Intel\'s developer efforts are largely moot."\n</p> ';

  var blogcite6 = ' \n    <p class="cite">1. <a href="https://www.technewsworld.com/story/85252.html"   target="_blank">https://www.technewsworld.com/story/85252.html\n    </a>\n    </p>\n    \n    <p class="cite">2. <a href="https://www.cnet.com/news/intel-core-i9-9900k-may-boost-to-5ghz/"   target="_blank">https://www.cnet.com/news/intel-core-i9-9900k-may-boost-to-5ghz/\n    </a>\n    </p>\n     ';
  var blogpost5 = '<p class="firstparagraph">Batteries optimized by machine learning is a feature in the latest version of Android OS, Pie. Some may roll theirs, but the only of desserts that share nameship with the great constant, pi. <i>Mystical 3-1-4 also features A.I.-empowered Textual Analysis, which opens to multiple new possibilities:</i></p>\n    <p class="quote">The other new machine learning-powered feature is the smart text selection tool that recognizes the meaning of the text you selected and then allows you to suggest relevant actions like opening Google Maps or bringing up the share dialog for an address.<sup>1</sup></p>\n    <p>Further, Android Pie\'s <i>Digital Wellness</i> features offer all the trending self-obedience features--not the least of which FitBit\'s guilt-inducing, and highly effective,<strong>walk prompts--already the bots are running my life and I obey!</p></strong>';
  var blogcite5 = ' \n    <p class="cite">1. <a href="https://techcrunch.com/2018/08/06/say-hello-to-android-9-pie/"   target="_blank">https://techcrunch.com/2018/08/06/say-hello-to-android-9-pie/\n    </a>\n    </p>\n     ';
  var blogpost4 = '<p class="quote"><i>Bone is constantly turning over through a process in which cells called osteoclasts dig tunnels through bone, and then cells called osteoblasts re-pave those tunnels with new bone. Econs acknowledges that it sounds like an inefficient system, but it has to work this way because you obviously need to be able to use your bones while those repairs are taking place.</i><br /><br />\n     --Michael Econ, physician and member of the American Society for Bone and Mineral Research   \n     <p class="firstparagraph"><i>Bone loss in space can reach 5 to 10% over the course of a year, however the sure cure is Digital Responsibility, the trending fad of 2018, spans from the upcoming Android Pie\'s in-device digital behavioral tools across the spectrum to Fitbit, Youtube, and others\' timed get-up-and-walk push notifications.       </p>  ';
  var blogcite4 = '<p class="cite">1. <a href="https://tonic.vice.com/en_us/article/ne5zg8/this-is-the-effect-working-out-has-on-your-bones"   target="_blank">https://tonic.vice.com/en_us/article/ne5zg8/this-is-the-effect-working-out-has-on-your-bones\n     </a>\n     </p> \n     ';
  var blogpost3 = '<p class="quote"><i>Responsive experience with real-time inferencing. There are many tasks where speed matters. This includes interactive speech, visual search, and video recommendations. As AI models increase in accuracy and complexity, traditional CPUs can\u2019t keep up, and the Tesla P4 GPUs can cut latency by an order of magnitude.<br /><br />\n  Video decoding. The Tesla P4 has a dedicated hardware-accelerated decode engine that works in parallel with the GPU, enabling it to transcode and infer up to 35 HD video streams in real time. The integration of deep learning into video pipelines lets organizations offer smarter video services.<br /><br />\n  The inferencing engine that the Tesla P4 uses is based on Nvidia\u2019s Pascal architecture and is designed to increase the performance of servers running deep learning workloads. Google didn\u2019t give a date for general availability other than saying it\u2019s \u201Ccoming soon\u201D to its public cloud.</i></p>  \n  <p class="firstparagraph">Toys, if they are offered as presents remain unconditional gifts, and yet the devotion they procure make for a reciprocal gift: Google\'s Developer Tools and little to no cost serve the same purpose as Microsoft\'s free provisions of Integrated Develepment Environments, i.e. VS Code and recent purchase of GitHub. The New Data Economy, applies as much to the developers\' field as it does to consumers\'. </p>  ';
  var blogcite3 = '<p class="cite">1. <a href="https://www.cio.com/article/3293424/artificial-intelligence/more-artificial-intelligence-options-coming-to-google-cloud.html"   target="_blank">https://www.cio.com/article/3293424/artificial-intelligence/more-artificial-intelligence-options-coming-to-google-cloud.html\n  </a>\n  </p> \n  ';
  var blogpost2 = '<p class="quote"><i>Google announced it is making Nvidia\'s Tesla P4 GPU available as a cloud service, enabling more businesses to get started with AI projects quicklyi><sup>1</sup></p>\n  <p class="firstparagraph">API Services &agrave; la Google Cloud have become a new Hallmark--available for 12-month free trial--of <i>Google\'s ambitious  kit: Cloud IoT (Internet of Things) API, Cloud Genomics API, Cloud Machine Learning Engine API, among dozens of others.</i> Rivers of Kubernetes Data,Tensor-Processing-Unit Automotons for Oompah-Loompahs, and the ever-lasting flavor of chewing gum in the name of publicly available data for your tasting pleasure!   </p>';
  var blogcite2 = '<p class="cite">1. <a href="https://www.cio.com/article/3293424/artificial-intelligence/more-artificial-intelligence-options-coming-to-google-cloud.html"   target="_blank">https://www.cio.com/article/3293424/artificial-intelligence/more-artificial-intelligence-options-coming-to-google-cloud.html\n  </a>\n  </p>';

  var blogpost1 = '<p class="quote"><i>In July, Blackrock \u2014 the world\u2019s largest exchange-traded fund (ETF) \u2014 announced that it has launched a working group to assess the potential of investing in Bitcoin.  <br /><br />\n    Blackrock\u2019s move could be described as a preemptive strike to avoid missing the crypto bus. Goldman Sachs is making headway with cryptocurrency involvement and Blackrock is following suit.</i><sup>1</sup></p>\n    <p class="firstparagraph">\n    <p class="quote">Fintech broke onto the scene as a disruptive force following the 2008 crisis, but the industry\'s influence on the broader financial services system is changing.\n  \n    The fintech industry no longer stands clearly apart from financial services proper, and is increasingly growing embedded in mainstream finance. We\'re now seeing the initial stages of this transformation.<br /><br />\n    \n    For instance, funding is growing more internationally distributed, and startups are making necessary adjustments to prove sustainability and secure a seat at the table. Most fintech segments in the ascendant a year ago have continued to rise and grow more valuable to the broader financial system. Meanwhile, several fintech categories have had to make adjustments to stay on top. New subsegments are also appearing on the scene \u2014 such as digital identity verification fintechs \u2014 as new opportunities for innovation are discovered. \n    <br /><br /> ... \n    The rising influence of fintechs is having a dramatic effect on incumbents, from banks to insurers to wealth managers, pushing them to respond proactively to stay relevant. Incumbents are reacting to changes wrought by fintechs on three key fronts: the front end, the back end, and in their core business operations. As such, incumbents and fintechs are converging on a digital middle ground.\n  <br /><br />\n    As this happens, the fintech industry is on the cusp of becoming an integral component of the broader financial services ecosystem. But it will likely first have to go through a complete credit cycle, and survive an economic downturn like the one that set the stage for its arrival in 2008, for this to happen.<sup>2</sup>\n    </p>\n    ';
  var blogcite1 = '\n    <p class="cite">1. <a href="https://cointelegraph.com/news/institutional-investors-and-fintech-will-wall-street-go-head-first-into-crypto"   target="_blank">https://cointelegraph.com/news/institutional-investors-and-fintech-will-wall-street-go-head-first-into-crypto\n    </a>\n    </p> \n    <p class="cite">2. <a href="https://www.businessinsider.com/8-3-2018-fintech-ecosystem-financial-technology-research-and-business-opportunities-2018-8?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+clusterstock+%28ClusterStock%29&r=US&IR=T&IR=T"   target="_blank">https://www.businessinsider.com/8-3-2018-fintech-ecosystem-financial-technology-research-and-business-opportunities-2018-8 \n  </a>\n  </p> \n    ';

  var url = [{
    id: '22',
    did: '08-25-18',
    date: 'August 25-26, 2018<br />Weekend',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'The Quantum Chip for All',
    post: blogpost22,
    blogcite: blogcite22
  }, {
    id: '21',
    did: '08-24-18',
    date: 'August 24, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Air, More Air, and the Tech of Fast Air',
    post: blogpost21,
    blogcite: blogcite21
  }, {
    id: '20',
    did: '08-23-18',
    date: 'August 23, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'The Best Offense is a Good Defense',
    post: blogpost20,
    blogcite: blogcite20
  }, {
    id: '19',
    did: '08-22-18',
    date: 'August 22, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Quantum Data',
    title: 'Quantum Data V:<br />The Bits and Bolts of Zero, One, and the Superposed Third State',
    post: blogpost19,
    blogcite: blogcite19
  }, {
    id: '18',
    did: '08-21-18',
    date: 'August 21, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Quantum Data',
    title: 'Quantum Data IV:<br />The Business of Quantum Data  ',
    post: blogpost18,
    blogcite: blogcite18
  }, {
    id: '17',
    did: '08-20-18',
    date: 'August 20, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Data that Go Up but Do not Go Down',
    post: blogpost17,
    blogcite: blogcite17
  }, {
    id: '16',
    did: '08-18-18',
    date: 'August 18-19, 2018<br />Weekend',
    author: 'by Thomas Maestas',
    cat3: 'Quantum Data',
    title: 'Quantum Data III: Sudden Data ',
    post: blogpost16,
    blogcite: blogcite16
  }, {
    id: '15',
    did: '08-17-18',
    date: 'August 17, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Quantum Data, Part II:<br /> Quantum State-Entanglement across a Solid State',
    post: blogpost15,
    blogcite: blogcite15
  }, {
    id: '14',
    did: '08-16-18',
    date: 'August 16, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: ' ',
    post: blogpost14,
    blogcite: blogcite14
  }, {
    id: '13',
    did: '08-15-18',
    date: 'August 15, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Quantum Data',
    post: blogpost13,
    blogcite: blogcite13
  }, {
    id: '12',
    did: '08-14-18',
    date: 'August 14, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Quantum Data',
    title: '',
    post: blogpost12,
    blogcite: blogcite12
  }, {
    id: '11',
    did: '08-12-18',
    date: 'August 12-13, 2018<br />Weekend',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: ' ',
    post: blogpost11,
    blogcite: blogcite11
  }, {
    id: '10',
    did: '08-11-18',
    date: 'August 11, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'The Good Doctor, Part IV: Good Doctor, Heal Thyself!',
    post: blogpost10,
    blogcite: blogcite10
  }, {
    id: '9',
    did: '08-10-18',
    date: 'August 10, 2018',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'The Good Doctor, Part III: Magneto Encephelop',
    post: blogpost9,
    blogcite: blogcite9
  }, {
    id: '8',
    did: '08-09-18',
    date: 'August 9, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'The Good Doctor, Part II:  <br />About that Second Opinion . . . <br />',
    post: blogpost8,
    blogcite: blogcite8
  }, {
    id: '7',
    did: '08-08-18',
    date: 'August 8, 2018',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'The Good Doctor, Part I: <br /> How A.I.-Driven Predictive Analytics Rewrites Healthcare',
    post: blogpost7,
    blogcite: blogcite7
  }, {
    id: '6',
    did: '08-07-18',
    date: 'August 7, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'New Math &amp; the Speed of Antiquation, a Case Study:<br />Mobile 8th Generation Intel',
    post: blogpost6,
    blogcite: blogcite6
  }, {
    id: '5',
    did: '08-06-18',
    date: 'August 6, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Android Pi(e) Day',
    post: blogpost5,
    blogcite: blogcite5
  }, {
    id: '4',
    did: '08-04-18',
    date: 'August 4-5, 2018<br />Weekend',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'The New Age of Digital Responsibility',
    post: blogpost4,
    blogcite: blogcite4
  }, {
    id: '3',
    did: '08-03-18',
    date: 'August 3, 2018',
    author: 'by Thomas Maestas',
    cat3: ' ',
    title: 'Tour of Google\'s Chocolate Factory, Part II:<br />Glass Elevator into the Cloud',
    post: blogpost3,
    blogcite: blogcite3
  }, {
    id: '2',
    did: '08-02-18',
    date: 'August 02, 2018<br />Weekend',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Tour of Google\'s Chocolate Factory, Part II:<br />Google\'s Golden Ticket',
    post: blogpost2,
    blogcite: blogcite2
  }, {
    id: '1',
    did: '08-01-18',
    date: 'August 1, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Musing Blockchain',
    title: 'Fintech Auchtung!',
    post: blogpost1,
    blogcite: blogcite1
  }];

  for (i = 0; i < url.length; i++) {
    var cat = ' \n    <div id="' + url[i].did + '" class="blogDiv"> \n    <hr />  \n    <a href="#top"><button>Top</button></a>  \n    <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n    <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5> \n    <p id="author" class="  author">' + url[i].author + '</p>   \n    <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n    <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n    <br />\n    <div id="post">' + url[i].post + '\n    </div>\n    <div id="blogcite">' + url[i].blogcite + '\n    </div>';
    document.getElementById("paragraph-aug").innerHTML += cat;
  }

  var i;
  for (i = 0; i < url.length; i++) {
    var catMod = '\n  <div id="mod_' + url[i].did + '" class="blogDivMod"> \n  <hr />  \n  <a href="#top-mod"><button>Top</button></a>   \n  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n  <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5>  \n  <p id="author" class="  author">' + url[i].author + '</p>   \n  <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n  <h6  id="title"   class="dailytitle cha-pternumber">' + url[i].title + '</h6>\n  <br />\n  <div id="post">' + url[i].post + '</div>\n  </div>\n <div id="blogcite">' + url[i].blogcite + '\n </div>';
    document.getElementById("paragraph-aug-mod").innerHTML += catMod;
  }
  console.log('blogger-aug');
  // console.log(angular.toJson(url));
};
bloggerAug();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bloggerJuly = function bloggerJuly() {

  var blogpost24 = '<p class="firstparagraph">Cloud.google.com wins the day for offering the Willy Wonka\'s of Technological Candy at a free tour\'s view: You won the Golden Ticket. Google Cloud CEO Diane Greene explains that prioritizing customers\' needs rather than drifting with market forces offers solid growth moving past technological shifts and drifts with little course correction.</p>\n <p class="quote">While Google is still looking up at Amazon Web Services and Microsoft Azure when it comes to infrastructure cloud computing, it appears to be finding the balance between keeping engineers happy with cloud-native computing tools and courting enterprise company suits with service-level agreements and steak dinners.<sup>1</sup></p>';
  var blogcite24 = '\n \n <p class="cite">1. <a href="https://cloud.google.com"   target="_blank">https://cloud.google.com\n </a>\n </p><p class="cite">1. <a href="https://www.geekwire.com/2018/google-cloud-ceo-diane-greene-wane-cloud-pricing-wars-never-want-win-price/"   target="_blank">https://www.geekwire.com/2018/google-cloud-ceo-diane-greene-wane-cloud-pricing-wars-never-want-win-price/\n </a>\n </p>';

  var blogpost23 = '<p class="firstparagraph">Planet Green dodged a bullet recently, as activists\' climate change research officially gains legitimacy from the Supreme Court, albeit a few of their qualms ... But who could deny that if there is one thing that will save the earth, it\'s knowledge, knowledge far outweighs any other salvo. This is because the more data, the more accurate the models to indicate specific environmental needs and threats--<i>not to mention all the clues the data could reveal toward helping earth regain balance. </i></p><p>A.I. training would starve if the Supreme Court would have allowed administration clamp-downs on knowledge. After all, the overwhelming popular and professional opinions favor earth-friendly policies. \n<p class="quote">The Supreme Court on Monday denied the Trump administration\u2019s plea to halt proceedings in a landmark lawsuit by young people seeking stronger federal action on climate change.<sup>1</sup>\n</p>';
  var blogcite23 = '<p class="footnotes">1. <a href="http://thehill.com/policy/energy-environment/399562-supreme-court-denies-trump-admin-request-to-halt-youth-climate"   target="_blank">http://thehill.com/policy/energy-environment/399562-supreme-court-denies-trump-admin-request-to-halt-youth-climate\n</a>\n</p>\n<p class="cite">1. <a href="http://thehill.com/policy/energy-environment/399562-supreme-court-denies-trump-admin-request-to-halt-youth-climate"   target="_blank">http://thehill.com/policy/energy-environment/399562-supreme-court-denies-trump-admin-request-to-halt-youth-climate\n</a>\n</p>\n ';
  var blogpost22 = '\n<p class="quote"><i>\u201CIt feels like a magical mirror that reflects your moves with images of all kinds of human activity \u2013 from sports and dance to martial arts, acting and beyond.\u201D</i></br></br>\n--Google creative technologist Irene Alvarado \n</p>\n<p class="firstparagraph">Magical Mirror is a wonderful tool for A.I.-powered video imaging and mimicry. Google\'s soon-to-be open source software is freely available for A.I. developers ... now that should be amusing to have life-like personal avatars will certainly make for some interesting uses. \n The power of Big Data really proves itself, but Google\'s algorithm-sharing provides a real democracy of A.I. technology for everyone to use.  On the other side of the coin, accuracy in video and voice mimicry now means A.I.-driven authenticity detectors will soon prove pretty darn useful!\n</p>\n';
  var blogcite22 = '<p class="cite"> \n<p class="footnotes">1. <a href="https://www.standard.co.uk/tech/google-move-mirror-dancing-gif-a3892471.html"   target="_blank">https://www.standard.co.uk/tech/google-move-mirror-dancing-gif-a3892471.html\n</a>\n</p> \n</p>';
  var blogpost21 = '<p class="firstparagraph">Wired.com ...</p>\n<p class="quote"> \n"But big retailers can sell millions of products, so it\'s not feasible to have workers browse each item and manually adjust prices. Instead, the companies employ software to scan rival websites and collect prices, a process called \u201Cscraping.\u201D From there, the companies can adjust their own prices."<br /><br />\n"Retailers want to see what their rivals are doing, but they want to prevent rivals from snooping on them; retailers also want to protect intellectual property like product photos and descriptions, which can be scraped and reused without permission by others. So many deploy defenses to subvert scraping ..." <sup>1</sup></p>';
  var blogcite21 = ' \n<p class="footnotes">1. <a href="https://www.wired.com/story/scraper-bots-and-the-secret-internet-arms-race/"   target="_blank">https://www.wired.com/story/scraper-bots-and-the-secret-internet-arms-race/\n</a>\n</p>   ';

  var blogpost20 = '<p class="firstparagraph">Space.com ...</p>\n  <p class="quote">"NASA\'s Robonaut program and Roscosmos\' FEDOR program seem to share the goal of creating robots that make it safer for humans to accomplish things in space that otherwise would be too dangerous for humans to attempt.<i> Still, the FEDOR androids\' gun-wielding design might raise a few eyebrows."</i><sup>1</sup></p>\n  <img src="dist/img/droid.jpg" class="zoom" width="288px" />\n  ';
  var blogcite20 = ' \n<p class="footnotes">1. <a href="https://www.space.com/41253-russian-robots-fly-to-space.html"   target="_blank">https://www.space.com/41253-russian-robots-fly-to-space.html\n</p>   ';

  var blogpost19 = '<p class="quote">\n  <i> One person familiar with the matter described the office scene as \u201Cchaotic\u201D and said at one point more than 300 people tuned in to an emergency conference call.  \u201CCurrently out of capacity for scaling,\u201D one of the updates said about the status of Amazon\u2019s servers, roughly an hour after Prime Day\u2019s launch. \u201CLooking at scavenging hardware.\u201D <sup>1</sup></i> </p>\n  <p class="firstparagraph">Prime Day\'s saga of cascading failures stemming from an internal software reveals the <i> relentless challenge of Scalability</i>. In their words, the root cause was a "breakdown in auto-scaling, a critical component when dealing with unexpected traffic spikes"<sup>1</sup>. So the exponential spikes may be hard to expect because their nature is both spontaneous, but the inflection is calculable! ...only dramatically represented as the folding a sheet of paper 42 times to reach the moon ...\n  </p>\n  <img src="dist/img/paper.png" width="340px" class="zoom" />\n  <p><small>Image Credits: Coder\'s Revolution</small></p>\n  <p class="quote">  Amazon wasn\'t able to handle the traffic surge and failed to secure enough servers to meet the demand on Prime Day, according to expert review of internal documents obtained by CNBC.<br /><br />\n  That led to a cascading series of failures, including a slowdown in its internal computation and storage service called Sable and other services that depend on it, including Prime, authentication and video playback.\n  Amazon immediately launched a scaled-down "fallback" front page to reduce workload and temporarily killed all international traffic too. \n  </p><p>And so, the same Bezosian leadership that manages space exploration\'s <strong>Blue Origin</strong> inspired a system of fall-back redundencies to get back up to speed dramatically within 80 minutes. Perhaps the quick, albeit unconventional recovery strategy deserves great respect--because chance happens to all!   \n  </p>\n  ';

  var blogcite19 = ' \n  <p class="footnotes">Image Credit: <a href="http://wwvv.codersrevolution.com/blog/will-a-piece-of-paper-folded-42-times-reach-the-moon"   target="_blank">http://wwvv.codersrevolution.com/blog/will-a-piece-of-paper-folded-42-times-reach-the-moon\n  </a>\n  </p>   \n<p class="footnotes">1. <a href="https://www.cnbc.com/2018/07/19/amazon-internal-documents-what-caused-prime-day-crash-company-scramble.html"   target="_blank">https://www.cnbc.com/2018/07/19/amazon-internal-documents-what-caused-prime-day-crash-company-scramble.html\n</a>\n</p>   \n ';
  var blogpost18 = '\n  <p class="firstparagraph">Business models of all shapes and sizes, and the diversity of tech that comes with them, are the natural consequence of<i> unlimited <strong>creative</strong> potential in Tech. So, a small business with few resources now has unlimited resources in the cloud with game-changing access to A.I.</i> Luckily, investments in smaller tech sources cover all sectors:</p>\n \n  <p class="quote">The Energy Department has announced that it will award 95 grants worth a total of $95 million to 80 small businesses located in 26 states as part of its Small Business Innovation Research and Small Business Technology Transfer programs. <sup>1</sup>\n  </p>\n  <p>So, for as much as tech giants grow out of proportion, so do smaller businesses; because not only is the economic horizon  not a zero-sum tech pie, but growing. Secondly, the pace of evolving needs and tech capabilities favor smaller, more maneuvrable entrepreneur-producers.';

  var blogcite18 = ' \n<p class="footnotes">1. <a href="http://www.executivegov.com/2018/07/doe-to-award-rd-grant-for-innovative-tech-to-80-small-businesses/\n  "   target="_blank">http://www.executivegov.com/2018/07/doe-to-award-rd-grant-for-innovative-tech-to-80-small-businesses/\n  \n</a>\n</p>   \n ';

  var blogpost17 = '\n  <p class="firstparagraph"> Cloud computing has never offered more convenience--especially in e-commerce. Walmart ramps up online presence, Amazon\'s Whole Foods ramps up offline presence. More importantly, everything and all businesses in between these two vortices has the opportunity to ride the same wave of platform and supply chain integration. </p>\n  <p class="quote"> \n  </p>\n  <p class="quote"> Retail giant Walmart Inc said on Tuesday it entered into a strategic partnership with Microsoft Corp for wider use of cloud and artificial intelligence technology, in a sign of major rivals of Amazon.com Inc coming together.\n<br /><br />\n  The five-year agreement will leverage the full range of Microsoft\'s cloud solutions, including Microsoft Azure and Microsoft 365, to make shopping faster and easier for customers, the Bentonville Arkansas-based company said.\n  \n  As part of the partnership, Walmart and Microsoft engineers will collaborate to migrate a significant portion of walmart.com and samsclub.com to Azure, Walmart added. <sup>1</sup>\n  </p>';

  var blogcite17 = ' \n<p class="footnotes">1. <a href="https://www.usnews.com/news/technology/articles/2018-07-17/walmart-microsoft-in-partnership-to-use-cloud-tech\n  "   target="_blank">https://www.usnews.com/news/technology/articles/2018-07-17/walmart-microsoft-in-partnership-to-use-cloud-tech\n  \n</a>\n</p>   \n ';

  var blogpost16 = '\n  <p class="firstparagraph">Alibaba--a Chinese search giant akin to Google--dwarfs the market value of Amazon. So much so, that Alibaba\'s earnings last year don\'t compete with Amazon\'s year, <i>but  past several years</i>.<sup>1</sup> Their success isn\'t a haphazard event, but years of strategy that focused on integrating services, whether online or offline origins, a true supply chain no longer discriminating marketplaces, logistics, cloud computing and payments. With unlimited global reach, big gets bigger and bigger. </p>\n \n  <p class="quote">  "Alibaba Cloud has always been dedicated to empower enterprises of different sizes to tap into opportunities in the digital age. With digital transformation poised to add close to $154 billion to India\'s GDP, this is a great opportunity for us to do business in India," Alex Li, General Manager of Alibaba Cloud Asia Pacific, said in a statement.<sup>2</sup> \n   </p>\n   <p>\n   Ultimately, what goes up does not necessarily come back down with cloud computing. And the further integrated systems become, the less feasible to divide, no matter which part of the globe.<sup>3</sup></p>';

  var blogcite16 = '\n  <p class="footnotes">1. <a href="\n  https://www.lemonde.fr/idees/article/2018/07/10/comment-alibaba-va-tuer-amazon_5329170_3232.html"   target="_blank">https://www.lemonde.fr/idees/article/2018/07/10/comment-alibaba-va-tuer-amazon_5329170_3232.html\n  </a>\n  </p>    \n  \n  <p class="footnotes">2. <a href="https://economictimes.indiatimes.com/small-biz/startups/newsbuzz/india-presents-great-business-opportunities-alibaba-cloud/articleshow/64974989.cms"   target="_blank">https://economictimes.indiatimes.com/small-biz/startups/newsbuzz/india-presents-great-business-opportunities-alibaba-cloud/articleshow/64974989.cms\n  </a>\n  </p>      <p class="footnotes">3. <a href="https://www.wsj.com/articles/breaking-up-big-tech-is-hard-to-do-1532290123"   target="_blank">https://www.wsj.com/articles/breaking-up-big-tech-is-hard-to-do-1532290123\n  </a>\n  </p>    \n ';

  var blogpost15 = '\n  <p class="firstparagraph">Ethereum Architect Vitalik Buterin\'s unwavering commitment to the Crypto-contract currency finally pays off. In my February blogposts, I recounted the technical challenges that Ethereum still faced: As a "Proof of Work" currency that requires Ether (in <i>Wei</i>) currency for each transaction hindered more widespread adoption. After the big boost from last month\'s Switzerland\'s Crypto Valley Conference, Ethereum walked away handily with scores of investors and renewed momentum. The 23-year old hero of the platform almost appears precocious for the recent feature in Fortune Magazine\'s Top 40 Under 40.</p>\n  <p class="quote">\n  [Buterin\'s] visionary project has rocketed to a market cap of nearly $30 billion\u2014as high as the private valuations Airbnb and Snapchat achieved\u2014from $1 billion a year ago, when Fortune first placed him on its 40 under 40 list.<sup>2</sup>\n  </p>\n  <p>To recap the enormous advantages of Ethereum functions as a <i> global operating system--The Ethereum Virtual Machine--</i>  the platform upon which shared, distributed applications can be designed and deployed. Unlike Bitcoin\'s function-less platform, contracts from banking to betting to real-estate can easily be drawn up in Solidity code, into the DAPP, <i>Distributed Application  deployed onto a Fintech network so expansive</i>, no wonder that even a crypto-currency needs a Swiss bank account!\n  </p>\n  ';

  var blogcite15 = '<p class="footnotes">1. <a href="\nhttps://www.cnbc.com/2018/07/18/ethereum-is-a-leading-driver-in-blockchain-says-circle-ceo.html\n"   target="_blank">\nhttps://www.cnbc.com/2018/07/18/ethereum-is-a-leading-driver-in-blockchain-says-circle-ceo.html\n</a> \n</p>\n<p class="footnotes">2. <a href="\nhttp://fortune.com/40-under-40/vitalik-buterin-10/"   target="_blank">http://fortune.com/40-under-40/vitalik-buterin-10/\n</a>\n</p>   \n ';

  var blogpost14 = '\n <p class="firstparagraph">Prime\'s Allure begins with the greatest deals, the most convenient deliveries, and a new Accessibility of Whole Foods Breads, Pastries, and HoneyCrisp Apples to every citizen!</p>\n <p>On a darker note, many articles and studies focus on the vendors\' side of the Amazon effect, i.e. the push to remote shopping;<sup>1</sup> But the consumer side of the Amazon effect is more insidious: the sheer off-scale underpricing of goods, mock holidays, and shopping-memberships push new spending habits. <i>The more convenient shopping with \'one-click buy\' becomes, the \'less convenient\' becomes the explorative, exciting-/debate-filled shopping experiences that reward the Creative Entrepreneurs\'</i> cultural interaction with consumers  \n\n';
  var blogcite14 = '\n<p class="footnotes">1. <a href="\nhttps://www.statista.com/chart/10295/shopping-on-amazon/\n"   target="_blank">\nhttps://www.statista.com/chart/10295/shopping-on-amazon/\n</a>\n</p>   \n';
  var blogpost13 = '\n<p class="firstparagraph"> Now that 49% of American e-commerce passes through Amazon\'s gates, it\'s official: <i>50% market share signifies a balance of power shifting underneath the commercial strata of Amerian Culture.</i> From the remaining 50% of the Online Shopping pie goes to  the next top nine, 22%: \n</p>\n<p class="quote">\neBay (EBAY): 6.6%<br /><br />\nApple (AAPL): 3.9%<br /><br />\nWalmart (WMT): 3.7%<br /><br />\nHome Depot (HD): 1.5%<br /><br />\nBest Buy (BBY) 1.3%<br /><br />\nQVC Group (QVCA): 1.2%<br /><br />\nMacy\'s (M): 1.2%<br /><br />\nCostco (COST): 1.2%<br /><br />\nWayfair (W): 1.1%<br /><br />\n<small style="align:right;">Business Insider, July 2018 </small></p>\n</p>\n<p>There are many more organizations, as you still have the lofty, beautify Apple products, and who doesn\'t love the umbrella-cane only available on QVC limited quantities do apply!</p>\n<p>\nOf course, the remaining free birds, the 28%, comprise the millions of home-office,brick-and-mortars, and online market entrepreneurs. (These do not include the independent vendor sales using Amazon\'s Marketplace). </p><p>So why does this 28-percentile slice of e-commerce represent the integral core of American Culture? The Creative Spirit always survives and adapts, even thrives when anything other--other than pure Zeitgeist--will fail; but it changes, and <i> creative verve takes on a reshaped form and a new pace, fitting to bureaucratic constraints and pricing schema. </p>   ';

  var blogcite13 = '\n  <p class="footnotes">1. <a href="\n  http://www.businessinsider.com/amazon-is-closing-in-on-owning-half-of-the-e-commerce-market-2018-7?utm_source=feedburner&amp%3Butm_medium=referral&utm_medium=feed&utm_campaign=Feed%3A+businessinsider%2Ftravel+%28Business+Insider%29&r=US&IR=T&IR=T\n  "   target="_blank">\n  http://www.businessinsider.com/amazon-is-closing-in-on-owning-half-of-the-e-commerce-market-2018-7 \n  </a>\n  </p>     \n\n  ';
  var blogpost12 = '\n  \n  <p class="firstparagraph">Fintech\'s revered "Crypto Valley Conference on Blockchain Technology" in Zug, Switzerland, featured blockchain expertise from all corners, including Keynote Speakers, Stefan Thomas CTO of Ripple [cryptocurrency] and Professor Emin G&uuml;n Sirer of Cornell University, along with Economists and Swiss Government officials. World-class economists, investors, and Regulation authorities aside, the host-countries whole-hearted commitment to cryptocurrency is evident: </p>\n  <p class="quote">\u201CThey want Switzerland to be the place to make it happen \u2014 but they don\u2019t want to be seen\n  as the \u2018wild west\u2019. It is Swiss pragmatism,\u201D says Martin Eckert, partner at MME, a Swiss law firm. <br /><br /> \n  Digital pioneers say Switzerland emerged as an ICO hub because it has a cluster of rich\n  investors and technology specialists. The small canton of Zug, near Zurich, has unofficially\n  Switzerland embraces cryptocurrency culture Seite 2 von 7\n  25.01.2018\n  become \u201CCrypto Valley\u201D.<sup>4</sup>\n  </p>\n  <img src="dist/img/swissBlockchain.png" width="350" class="zoom" />\n  <p><small>Image Credit: Source Lykke, Coindesk</small></p>\n';
  var blogcite12 = '<p class="footnotes">3. <a href="\n  https://www.cryptovalleyconference.com\n  "   target="_blank">\n  \n  https://www.cryptovalleyconference.com\n  </a>\n  </p>\n  <p class="footnotes">4. <a href="\n  https://www.crypto-finance-conference.com/resources/public/lava3/media/switzerland-embraces-cryptocurrency-culture.pdf\n  "   target="_blank">\n  \n  https://www.crypto-finance-conference.com/resources/public/lava3/media/switzerland-embraces-cryptocurrency-culture.pdf\n  </a>\n  </p>\n';
  var blogpost11 = '\n  <p class="firstparagraph"><i>Zen of Python: "Beautiful is better than ugly.<i> Explicit is better than implicit.</i>  Simple is better than complex.  Complex is better than complicated. Flat is better than nested.  Sparse is better than dense"<br /></i> -- Pythoneer Tim Peters<p> In my April 19th post, I recount Python\'s near-mystical author and leader of language\'s development up to this month\'s retirement:  About Guido van Rossum, </p>\n  <p class="quote">After almost 30 years of overseeing the development of the world\'s<i> most popular language, Python, its founder and Benevolent Dictator For Life" (BDFL), Guido van Rossum,</i> has decided he would like to remove myself entirely from the decision process.<sup>2</sup> </p><p>\nPython is NASA\'s drug-of-choice because of the language\'s superior handling of precision mathematics, and yet the syntax and module libraries makes the language easy for anyone to pick up. Few could argue against Guido van Rossum\'s reductionist philosophy that inspires the clear, expansive structure. So, farewell to the great Guido van Rossum\'s official leadership and Thank You! \n</p>\n';
  var blogcite11 = ' <p class="footnotes"><a>1. Tim Peters <p class="footnotes">2. <a href="https://www.zdnet.com/article/python-language-founder-steps-down/  "   target="_blank">\n  https://www.zdnet.com/article/python-language-founder-steps-down/ </a>\n  </p>\n\n';
  var blogpost10 = '<p class="quote">\n...The colossal shift in the chip world came with the advent of artificial intelligence (AI) and machine learning (ML). With these emerging technologies, a flood of new processors has arrived\u2014and they are coming from unlikely sources. <br /><br />\nMicrosoft is preparing an AI chip for its HoloLens VR/AR headset, and there\u2019s potential for use in other devices. \n<i> Google has a special AI chip for neural networks called the Tensor Processing Unit, or TPU, which is available for AI apps on the Google Cloud Platform. </i>Apple is working on an AI processor called the Neural Engine that will power Siri and FaceID.  <sup>1</sup></p>\n<p class="firstparagraph">All ... All the A.I. Tools a busy bee could ask for!\n</p>\n ';
  var blogcite10 = '\n<p class="footnotes">1. <a href="\nhttps://arstechnica.com/gadgets/2018/07/the-ai-revolution-has-spawned-a-new-chips-arms-race/\n"   target="_blank">\nhttps://arstechnica.com/gadgets/2018/07/the-ai-revolution-has-spawned-a-new-chips-arms-race/\n</a>\n</p>     \n';

  var blogpost9 = ' \n<p class="firstparagraph">Moore\'s Law--a function of transistor count--has guided CPU bench-mark expectations along a fairly linear path year-by-year. However, computing requirements have multiplied while the mathematical relevence of the law wanes. <br /><br />\n<img src="dist/img/moores_law.jpg" width="400px" class="zoom" title="Moore\'s Law Graphic" /><br />Image Credit: ourworldindata.org <br /><br /> <i>Enter the Decision Tree, the Random Forest, Na&iuml;ve Bayes, and K-Nearest Neighbors</i>: The machine learning tools and theoretical building blocks to get more bang for the buck from all that computing power. How? <i> Teaching software to teach itself, which is the pathway out of computing-power deficits and the move from theoretical to practical</i> ...</p> \n<p class="quote">\nEvery technology follows a similar path of diszcovery, engineering, and transformation. In the case of electricity, Faraday uncovered new principles, but no one really knew how to make them useful. They first had to be understood well enough that people such as Edison, Westinghouse, and Tesla could figure out how to make things that people would be willing to buy.\n \n<br /><br />  The digital revolution, for all of its charms, has had a fairly limited economic impact, compared with earlier technologies such as electricity and the internal combustion engine. Even now, information technologies make up only about 6% of GDP in advanced economies. Compare that to manufacturing, health care, and energy, which make up 17%, 10%, and 8% of global GDP, respectively, and you can see how there is vastly more potential to make an impact beyond the digital world.\n<sup>2</sup></p>\n<p>As the saying goes, <i>One crowded hour of glorious life is worth an age without a name.</i><sup>3</sup> And now the tide is high for Tech to venture out into the world and make a name for herself!\n';
  var blogcite9 = '<p class="footnotes">2. <a href="https://ourworldindata.org/wp-content/uploads/2013/05/Transistor-Count-over-time.pngArticle"   target="_blank">https://ourworldindata.org/wp-content/uploads/2013/05/Transistor-Count-over-time.png</a>\n</p>\n<p class="footnotes">2. <a href="https://hbr.org/2018/07/the-industrial-era-ended-and-so-will-the-digital-era"   target="_blank">https://hbr.org/2018/07/the-industrial-era-ended-and-so-will-the-digital-era</a>\n</p>\n\n<p class="footnotes">3. Thomas Osbert Mordaunt';

  var blogpost8 = '<p class="firstparagraph">Advances in computer science and data research follow the path of the tools that pave a developer\'s path: The tools make the worker, and therefore the work. For example, any of the Industrial Revolutions leaped forward with every new tool. <i>Now, Artificial Intelligence research and design  lurches forward by the tooling, but in a new fashion: Open source tools owned and operated by the community, the work by and for any community.</i>\n</p>\n<p> Neural network tools like TensorFlow.js, a "JavaScript library for training and deploying Machine Learning models in the browser and on Node.js" <sup>1</sup>  along with other programming-library frameworks, abstract away a layer of the visible mechanics. On the one hand, it is the democratization of cutting-edge technology, formerly siloed apart and under government, corporate or university controls. </p>\n<p>\nThe genie is definitely out of the bottle, yet he or she is now at the keyboards across the globe. This has a clear effect in bringing technological innovation to the community, to the coffeeshops and meet-up groups, instead of clearly defined, bureaucratically-directed research ends. </p>\n<p>Therefore,  bootstrapping open-source projects brings the community to the forefront of technological innovation! Though the common mobile app has grown familiar for changing landscapes, those apps chiefly leverage the social network (links) of friends and professionals; while the common-use spread of machine-learning research provides leverage to the actual work (nodes) of progress</p>\n<p>Therefore, the tools provide one dimension of A.I.\'s path, while the democratized distribution of tools across social networks provides a second dimensional path. This alters the A.I. evolution in the long-term, by means of short-term and frequent tooling revolutions.   </p>\n';
  var blogcite8 = '\n<p class="footnotes">1. <a href=" https://js.tensorflow.org/"   target="_blank"> https://js.tensorflow.org/</a>\n</p>   \n';
  var blogpost7 = '\n<p class="firstparagraph">Panic and anxiety cover the Snapchat countries across far-flung locales from Latvia to Denver to Spain--</i>and in one case blighting the entire island of the United Kingdom...</i></p>\n<p class="quote">Some users went to Twitter and shared their frustration.\n"I\'ve been sending people abuse on snapchat for not replying to me only to discover its down. Oops?" one user tweeted.<br /><br />\n"Snapchat just went down. I can literally feel the panic of a thousand generations in my bones. #snapchat," another user posted.\nSnapchat currently has 166 million users globally. <sup>2</sup>\n</p>\n<p> A chronic technical problem before May 2018 when SnapCrash went public   dating to October. <sup>1</sup> -- scalability challenges strike again!</p> \n<img src="dist/img/snapchat.jpg" width="350" class="zoom" /><br /><br />\n<p>But inquiring minds want to know, <i>What\'s the Story with Snapchat? </i>Not to mention the Conspiracy Theorists that blame Snapchat\'s devotion to Advertisers--too many distractions?</p>\n<p class="quote">\n[Snapchat] tweeted: \u201CSome Snapchatters are having trouble with the app. We\u2019re aware of the issue and working on a fix! We recommend staying logged into your account.\u201D\n<br /><br />\nSnapchat recently confirmed that it is testing six-second long ads in Shows on its Discover section that won\u2019t budge no matter how many times a user tries to tap to skip them.<br /><br />\n\nThis development has been coming for some time as Snapchat looks to placate advertisers who have grown frustrated by users who, on average, only stay on an ad for two seconds before skipping.</p> \n<p>Every kind of Server malfunction pales in comparison to the Affordable Healthcare Act web-app\'s abysmal first few months.<i> Get Well Soon, Snapchat--you\'re breaking our heart!</i></p>';
  var blogcite7 = '\n<p class="footnotes">1. <a href=" https://www.independent.co.uk/life-style/gadgets-and-tech/snapchat-down-not-working-android-broken-message-snap-inc-help-a8443236.html"   target="_blank"> https://www.independent.co.uk/life-style/gadgets-and-tech/snapchat-down-not-working-android-broken-message-snap-inc-help-a8443236.html</a>\n</p>    \n\n<p class="footnotes">2. <a href=" http://www.tribuneindia.com/news/science-technology/snapchat-outage-hits-users-globally/480068.html"   target="_blank"> http://www.tribuneindia.com/news/science-technology/snapchat-outage-hits-users-globally/480068.html</a>\n</p>    \n<p class="footnotes">3. <a href="https://outage.report/snapchat" target="_blank">https://outage.report/snapchat</a></p>\n ';
  var blogpost6 = '\n <p class="quote"><sup>0</sup><strong><small>\n The term \u201Cextropy,\u201D coined in 1967, is generally used to describe life\u2019s capacity to reverse the spread of entropy across space and time. </small></strong><sup>1</sup>\n </p>\n <p class="firstparagraph">\n Philosophies of A.I. range from the Aloof to Alarmed, from Punch-drunk Optimism to Harrowing Paranoia: A few vantage points from a Legacy New Yorker:</p>\n <p class="quote">\n Last summer, Oren Etzioni, the C.E.O. of the Allen Institute for Artificial Intelligence, in Seattle, referred to the fear of machine intelligence as a \u201CFrankenstein complex.\u201D Another leading researcher declared, \u201CI don\u2019t worry about that for the same reason I don\u2019t worry about overpopulation on Mars.\u201D<sup>1</sup></p>\n <p class="quote">\n Jaron Lanier, a Microsoft researcher and tech commentator, told me that even framing the differing views as a debate was a mistake. \u201CThis is not an honest conversation,\u201D he said. \u201CPeople think it is about technology, but it is really about religion, people turning to metaphysics to cope with the human condition. They have a way of dramatizing their beliefs with an end-of-days scenario\u2014and one does not want to criticize other people\u2019s religions.\u201D\n <sup>1</sup></p>\n <p class="quote">\n Bostrom had little interest in conventional philosophy\u2014not least because he expected that superintelligent minds, whether biologically enhanced or digital, would make it obsolete. \u201CSuppose you had to build a new subway line, and it was this grand trans-generational enterprise that humanity was engaged in, and everybody had a little role,\u201D he told me. \u201CSo you have a little shovel. But if you know that a giant bulldozer will arrive on the scene tomorrow, then does it really make sense to spend your time today digging the big hole with your shovel? Maybe there is something else you could do with your time. Maybe you could put up a signpost for the great shovel, so it will start digging in the right place.\u201D He came to believe that a key role of the philosopher in modern society was to acquire the knowledge of a polymath, then use it to help guide humanity to its next phase of existence\u2014a discipline that he called \u201Cthe philosophy of technological prediction.\u201D \n <sup>1</sup></p>\n <p>At the end of the day, we can ask "are we there yet?" over again, but a more pointed query asks not about time, but about place: "It may be highly unpredictable where a traveller will be one hour after the start of her journey, yet predictable that after five hours she will be at her destination.\u201D\n ';
  var blogcite6 = '\n \n<p class="footnotes">1. <a href=" https://www.newyorker.com/magazine/2015/11/23/doomsday-invention-artificial-intelligence-nick-bostrom"   target="_blank"> https://www.newyorker.com/magazine/2015/11/23/doomsday-invention-artificial-intelligence-nick-bostrom</a>\n</p>    \n<p class="footnotes">1. <a href="https://nickbostrom.com/"   target="_blank"> https://nickbostrom.com/</a>\n</p>  \n\n ';
  var blogpost5 = '\n <p class="firstparagraph">It turns out that data is unevenly distributed between sectors, leading to monopoles of dominance: After all, who controls the data, controls the commanding heights. And yet, the very substance of Big Data derives from and belongs precisely to  individuals, aggregated, that checked "Agree" to a given app\'s Privacy Policy, from a given Internet Service Provider, using a given Browser ....</p>\n <p>Now that physical products lose relative value for many reasons (not to mention easy downloads for 3-D printing), and alternately<i> informational data products gain value in the digital economy: hence the problem of allocating the value of personal data back to the person </i>... To this, the Canadian A.I. Mafia chimes in:</p>\n  <p class="quote">A persistent challenge for Element is the dearth of good data. The simplest way to train A.I. models is to feed them lots of well-labeled examples\u2014thousands of cat images, or translated texts. Big Tech has access to so much consumer-oriented data that it\u2019s all but impossible for anyone else to compete at building large-scale consumer products. But businesses, governments, and other institutions own huge amounts of private information. Even if a corporation uses Google for email, or Amazon for cloud computing, it doesn\u2019t typically let those vendors access its internal databases about equipment malfunctions, or sales trends, or processing times. <br />\n  <br />That\u2019s where Element sees an opening. If it can access several companies\u2019 databases of, say, product images, it can then\u2014with customers\u2019 permission\u2014use all of that information to build a better product-recommendation engine. Big Tech companies are also selling A.I. products and services to businesses\u2014IBM is squarely focused on it\u2014but no one has cornered the market. Element\u2019s bet is that if it can embed itself in these organizations, it can secure a corporate data advantage similar to the one Big Tech has in consumer products.<sup>1.</sup></p>\n  <p>\n   <p>So will this kind of data democratization work? Not only so, but the Cambridge Analytica fiasco only briefly awakened public attention to the deep science underlying each of our "online digital signatures" ... the race is on among the Tech Giants to use A.I. to understand our lives, our keystrokes, our buying preferences better than we understand. And in turn, provide a great utility, and win our financial allegiance!\n';

  var blogcite5 = '\n\n<p class="footnotes">1. <a href="http://fortune.com/longform/element-ai-startup-tech/"   target="_blank">http://fortune.com/longform/element-ai-startup-tech/</a>\n</p>    \n\n';

  var blogpost4 = ' \n  <p class="quote">In the Modern Field of Artiificial Intelligence, all roads seem to lead to three researchers with ties to Canadian universities. The first, Geoffrey Hinton, a 70-year-old Brit who teaches at the University of Toronto, pioneered the subfield called deep learning that has become synonymous with A.I. The second, a 57-year-old Frenchman named Yann LeCun, worked in Hinton\u2019s lab in the 1980s and now teaches at New York University. The third, 54-year-old Yoshua Bengio, was born in Paris, raised in Montreal, and now teaches at the University of Montreal. The three men are close friends and collaborators, so much so that people in the A.I. community call them the Canadian Mafia.<sup>1.</sup></p>\n\n  <p class="firstparagraph">A curious path of punctuated advancement due to insufficient memory and cpu power, characterized late 20th century A.I. development: Deep Learning development   lulls interrupted by rapid growth with each successive technological period.\n   Toronto\'s Dr. Geoff Hinton\'s single-layered A.I. algorithm gained brief fame, yet A.I. research no longer advanced  for ten years. </p>\n   <p class="quote">\n   Programs that performed well in the laboratory were useless in everyday situations; a simple act like picking up a ball turned out to require an overwhelming number of computations.\n\nThe research fell into the first of several \u201CA.I. winters.\u201D As Bostrom notes in his book, \u201CAmong academics and their funders, \u2018A.I.\u2019 became an unwanted epithet.\u201D<sup>1</sup> \n</p>\n<p>\nThen came the GPU with Alex Khreshinski\'s famous image-recognition competition-winning penmanship detector, which notably is still in use by the banking system. This novel use of the GPU to accomplish parallel calculations rewrote the the A.I. field overnight. Also known as the "Cambrian Explosion", this event (and really just the algorithm) set off widespread advancements in the weeks and months follwoing, leading to new speciation ranging from the ANN, Neural Network, to a whole alphabet soup from Convolutional Neural Networks (CNN) <i>to far-reaching mutations of Reinforcement Learning</i>.<sup>2</sup>\n  </p>\n \n  <p> Along with Hinton\'s close collaborator throughout the 1980\'s and 90\'s, Dr. Yoshua Bengio of the University of Montr&eacute;al, the researchers remain committed to humanity\'s service:</p>\n   \n  <p class="quote">\n  Hinton moved from the U.S. to Canada in part due to disillusionment with Reagan-era politics and disapproval of military funding of artificial intelligence.[22] He believes political systems will use AI to "terrorize people". Hinton has petitioned against lethal autonomous weapons. Regarding existential risk from artificial intelligence, Hinton has stated that superintelligence seems more than 50 years away, but warns that "there is not a good track record of less intelligent things controlling things of greater intelligence". Asked in 2015 why he continues research despite his grave concerns, Hinton stated "I could give you the usual arguments. But the truth is that the prospect of discovery is too sweet." Hinton has also stated that "It is very hard to predict beyond five years" what advances AI will bring.<sup>1</sup></p>\n  \n  <p>While Hinton and company aren\'t necessarily Mahatma Gandhi-like, their devotion to a science prioritized to humanity\' service and long-term best interest--free from monetary or other influence is admirable. No wonder their outlook on A.I.\'s utility is so much brighter than that of Pessimist Elon Musk and company ... baah-humbug!\n </p>\n   \n \n  ';

  var blogcite4 = '\n\n\n  <p class="footnotes">1. <a href="http://fortune.com/longform/element-ai-startup-tech/"   target="_blank">http://fortune.com/longform/element-ai-startup-tech/</a>\n  </p>    \n  <p class="footnotes">2. <a href="https://www.benzinga.com/pressreleases/18/06/p11846924/join-ai-pioneer-geoffrey-hinton-in-toronto-and-learn-from-global-leade"   target="_blank">https://www.benzinga.com/pressreleases/18/06/p11846924/join-ai-pioneer-geoffrey-hinton-in-toronto-and-learn-from-global-leade</a>\n  </p>     \n\n\n  ';

  var blogpost3 = ' \n  <p class="firstparagraph">Already A.I. has shown its true colors as an ideal tool for solving disproportionately large, complex data problems: Similar to Watson\'s medical recommendations based on millions of pages read, the off-the scale amount of pages from every tech company is the item of interest. This is the flurry-to-snowstorm of Privacy Policies simultaneously released in response to the E.U.\'s May 25th General Data Protection Regulations.  In reference to my June 30th post on A.I. workplace solutions, months of busy-reading-work all distilled to a fraction of the time to analyze those policies. Guess what? The rule-breaking is well under way!</p>\n  <p class="quote">Researchers from the European Union Institute in Florence worked with an EU consumer organization to create the software. They then used the program to examine the privacy policies of 14 major technology businesses, including by Alphabet Inc., Amazon.com Inc., and Facebook Inc.<br /><br />\n \n  They found that a third of those clauses were "potentially problematic" or contained "insufficient information." Another 11 percent of the policy\u2019s sentences used unclear language, the academics said.  The researchers didn\u2019t make public which companies\u2019 policies violated which provisions of the law, publishing only aggregate findings for all of the companies in the study.<sup>1</sup></p>\n \n  <p>Aha! <i>The practices of Tech companies\' use of A.I. to analyze customers\' private data is well-known, but <strong>what do we actually know</strong> beyond just that? Behind the veil of commercial secret, much less is known than is led on ... until now. Now, A.I. becomes increasingly useful as a tattle-tale! </i> So by the same token that tech creates problems, Tech is the first to provide a solution. But A.I. rule-checking sounds good but raises another question: Who owns, or can access by alternate means, the personal data we have strewn across the internet? And what quality of data does each party have, or shares?  </p>\n  ';

  var blogcite3 = '\n  \n<p class="footnotes">1. <a href="https://www.bloomberg.com/news/articles/2018-07-04/new-ai-tips-off-regulators-to-possible-eu-data-privacy-faults"   target="_blank">https://www.bloomberg.com/news/articles/2018-07-04/new-ai-tips-off-regulators-to-possible-eu-data-privacy-faults</a>\n</p>    \n  ';

  var blogpost2 = '\n<p class="quote"><i>Power is \u201Cvarious forms of domination and subordination and the asymmetrical balance of forces which operate whenever and wherever social relations exist.\u201D  </i><sup>1</sup><br /><br />--Michel Foucault</p>\n<p class="firstparagraph">Ties and balances of power, at their fundamental core are constantly changing variations of symmetry between two agents, whether unilateral or bilateral: Two nodes interlinked. Magnified by overlapping networks and layers of relations, it\'s easy to see why long-standing institutions are interlocked, for better or worse ... Clearly the trend of turbulence and power grabs reaches far and wide:\n </p>\n<p class="quote">Poland was once a beacon for countries struggling to escape the yoke of the Soviet Union and embrace Western democracy. But it is now in league with neighboring nations, like Hungary, whose leaders have turned to authoritarian means to tighten their grip on power, presenting a grave challenge to a European Union already grappling with nationalist, populist and anti-immigrant movements.<br /><br />\n\nThe forced retirements of up to 27 of 72 Supreme Court justices, including the top judge, and the creation of a judicial disciplinary chamber were the latest in a series of steps by Poland\u2019s right-wing Law and Justice Party to take over the justice system.\n</p>\n<p>As it always is in film, it is so now that dire situations have to call upon the true Super Man, Technology, to save the day: And what form this time? Blockchain technology, which presents a cryptographic solution to the problem of trust:<i> If two agents can agree on a third cryptographic intermediary, then a bridge of trust is built--the kind that in the past only institutions could broker!</i>. </p>\n<p>And so, two humans devise a new means to exchange without disruption--an indestructable scaffolding firmly set in the foreground from today\'s creaking and swaying institutions. Sounds good, but where\'s the music? There seems to be a subtle interlude between the honeymoon stage of investing and inventing new currencies, and little in the way of micro-transactions and <i> the actual <strong>using</strong> it</i>. It takes a little trust to make trust, so the effort is on to make a bridge from the <i>early adopters</i> stage to <i>mainstream adoption</i>...<sup>3</sup>  \n</p>\n';
  var blogcite2 = '\n<p class="footnotes">2. <a href="https://books.google.com/books?id=6rfP0H5TSmYC&printsec=frontcover"   target="_blank">Foucault, Michel. Discipline and punish: The birth of the prison. Vintage, 2012.</a>\n</p>   \n<p class="footnotes">2. <a href="https://www.nytimes.com/2018/07/03/world/europe/poland-supreme-court-protest.html"   target="_blank">https://www.nytimes.com/2018/07/03/world/europe/poland-supreme-court-protest.html</a>\n</p>   \n<p class="footnotes">3. <a href="https://www.nytimes.com/2018/07/01/technology/cryptocurrency-ripple.html?rref=collection%2Fsectioncollection%2Ftechnology&action=click&contentCollection=technology&region=stream&module=stream_unit&version=latest&contentPlacement=9&pgtype=sectionfront"_blank">https://www.nytimes.com/2018/07/01/technology/cryptocurrency-ripple.html</a>\n</p> \n\n';

  var blogpost1 = '\n  <p class="quote">A vast majority of the half-million bodies in the inner asteroid belt may in fact be shrapnel from as few as five parent bodies called "planetesimals," scientists say. But the tangled orbits of those lost worlds meant they were doomed to collide, producing fragments that also collided, producing still more fragments in a cataclysmic cascade that\'s been going on for more than 4 billion years.<sup>1</sup></p><p> \n</p>\n';

  var blogcite1 = '<p class="footnotes">1. <a href="https://www.washingtonpost.com/news/speaking-of-science/wp/2018/07/03/many-asteroids-might-be-remnants-of-five-destroyed-worlds-scientists-say/?noredirect=on&utm_term=.4f1e000cc632"   target="_blank">https://www.washingtonpost.com/news/speaking-of-science/wp/2018/07/03/many-asteroids-might-be-remnants-of-five-destroyed-worlds-scientists-say/?noredirect=on&utm_term=.4f1e000cc632</a>\n</p> \n';
  var url = [{ id: '24',
    did: '07-28-18',
    date: 'July 28-29, 2018<br />Weekend',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: '',
    post: blogpost24,
    blogcite: blogcite24
  }, {
    id: '23',
    did: '07-27-18',
    date: 'July 27, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Hooray for Planet Green!',
    post: blogpost23,
    blogcite: blogcite23
  }, {
    id: '22',
    did: '07-26-18',
    date: 'July 26, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Bot Mercenaries:<br />',
    title: 'As Long as I Can Feel the Beat, Baby I don\'t Need Dollar Bils to Have Fun Tonight<br /><span class="pull-left"> - Sia',
    post: blogpost22,
    blogcite: blogcite22
  }, {
    id: '21',
    did: '07-25-18',
    date: 'July 25, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Bot Mercenaries:<br />Armies of Secret Shoppers',
    post: blogpost21,
    blogcite: blogcite21
  }, {
    id: '20',
    did: '07-24-18',
    date: 'July 24, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Bot Mercenaries:<br />Warrior Bots in Space',
    post: blogpost20,
    blogcite: blogcite20
  }, {
    id: '19',
    did: '07-23-18',
    date: 'July 23, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Amazon\'s Prime Day Scaling Slip and Recovery:<br />A How-To Guide to Graceful Error Handling',
    post: blogpost19,
    blogcite: blogcite19
  }, {
    id: '18',
    did: '07-21-18',
    date: 'July 21-22, 2018<br />Weekend',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Cloud Wars, Part III:<br />Creativity that Turns on a Dime',
    post: blogpost18,
    blogcite: blogcite18
  }, {
    id: '17',
    did: '07-20-18',
    date: 'July 20, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Cloud Wars, Part II:<br />EZ-Commerce ',
    post: blogpost17,
    blogcite: blogcite17
  }, {
    id: '16',
    did: '07-19-18',
    date: 'July 19, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Cloud Wars, Part I:<br />Behomeths from Across the Sea  ',
    post: blogpost16,
    blogcite: blogcite16
  }, {
    id: '15',
    did: '07-18-18',
    date: 'July 18, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Musing Blockchain',
    title: 'By the Light of Ethereum',
    post: blogpost15,
    blogcite: blogcite15
  }, {
    id: '14',
    did: '07-17-18',
    date: 'July 17, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Annual Prime Day , Part II:<br /> The Credit Card Hangover',
    post: blogpost14,
    blogcite: blogcite14
  }, {
    id: '13',
    did: '07-16-18',
    date: 'July 16, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Prime Day\'s Annual All-You-Can-Eat Buffet, Part I<br />',
    post: blogpost13,
    blogcite: blogcite13
  }, {
    id: '12',
    did: '07-14-18',
    date: 'July 14-15, 2018<br />Weekend',
    author: 'by Thomas Maestas',
    cat3: 'Musing Blockchain',
    title: 'Crypto Valley, Switzerland',
    post: blogpost12,
    blogcite: blogcite12
  }, {
    id: '11',
    did: '07-13-18',
    date: 'July 13, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Simple is better than Complex. Complex is Better than Complicated.<br /><small>--Tim Peters</small>',
    post: blogpost11,
    blogcite: blogcite11
  }, {
    id: '10',
    did: '07-12-18',
    date: 'July 12, 2018',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'Tools of the A.I. Trade, Part III:<br />  Operation Architecture Drilldown',
    post: blogpost10,
    blogcite: blogcite10
  }, {
    id: '9',
    did: '07-11-18',
    date: 'July 11, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Tools of the A.I. Trade, Part II:<br />Machine Learning\'s Pedal to the Metal',
    post: blogpost9,
    blogcite: blogcite9
  }, {
    id: '8',
    did: '07-10-18',
    date: 'July 10, 2018',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'Tools of the A.I. Trade, Part I: <br />The Proliferation of Machine Learning Modeling Libraries ',
    post: blogpost8,
    blogcite: blogcite8
  }, {
    id: '7',
    did: '07-09-18',
    date: 'July 9, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: '187 million Snapchat Users and Enquiring Minds want to Know: Did Multiple Clusters Fail at once?...or is there Foul Play?',
    post: blogpost7,
    blogcite: blogcite7
  }, {
    id: '6',
    did: '07-07-18',
    date: 'July 7-8, 2018<br />Weekend',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Theories of Extropy <sup>0</sup>',
    post: blogpost6,
    blogcite: blogcite6
  }, {
    id: '5',
    did: '07-06-18',
    date: 'July 6, 2018',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'The Canadian Mafia, Part II.<br />Data Better Recollected',
    post: blogpost5,
    blogcite: blogcite5
  }, {
    id: '4',
    did: '07-05-18',
    date: 'July 5, 2018',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'The Canadian Mafia, Part I.<br /> On the Good-Natured Vision of the Godfathers of A.I.',
    post: blogpost4,
    blogcite: blogcite4
  }, {
    id: '3',
    did: '07-04-18',
    date: 'July 4, 2018',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'Training Data, Big and Beloved Data<br />Big Data\s Most Notorious Rule-Breaker and Rule-Enforcer: A.I.',
    post: blogpost3,
    blogcite: blogcite3
  }, {
    id: '2',
    did: '07-03-18',
    date: 'July 3, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Musing Blockchain',
    title: 'What\'s Behind the Rebirth of the Nation-State?<br />There\'s a <i>Blockchain DAPP</i> for that!',
    post: blogpost2,
    blogcite: blogcite2
  }, {
    id: '1',
    did: '07-02-18',
    date: 'July 2, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Celestial Bodies: Always Out to Impress!',
    post: blogpost1,
    blogcite: blogcite1
  }];

  for (i = 0; i < url.length; i++) {
    var cat = ' \n    <div id="' + url[i].did + '" class="blogDiv"> \n    <hr />  \n    <a href="#top"><button>Top</button></a>  \n    <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n    <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5> \n    <p id="author" class="  author">' + url[i].author + '</p>   \n    <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n    <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n    <br />\n    <div id="post">' + url[i].post + '\n    </div>\n    <div id="blogcite">' + url[i].blogcite + '\n    </div>';
    document.getElementById("paragraph-july").innerHTML += cat;
  }

  var i;
  for (i = 0; i < url.length; i++) {
    var catMod = '\n  <div id="mod_' + url[i].did + '" class="blogDivMod"> \n  <hr />  \n  <a href="#top-mod"><button>Top</button></a>   \n  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n  <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5>  \n  <p id="author" class="  author">' + url[i].author + '</p>   \n  <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n  <h6  id="title"   class="dailytitle cha-pternumber">' + url[i].title + '</h6>\n  <br />\n  <div id="post">' + url[i].post + '</div>\n  </div>\n <div id="blogcite">' + url[i].blogcite + '\n </div>';
    document.getElementById("paragraph-july-mod").innerHTML += catMod;
  }
  console.log('blogger-july');
  // console.log(angular.toJson(url));
};
bloggerJuly();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bloggerJune = function bloggerJune() {

  var blogpost14 = '\n<p class="quote"><i>\nAll people going to the International Space Station must do so through Kazakhstan today. Since the space shuttle retired in 2011, there\'s no other ship capable of carrying people up there besides Soyuz, the Russian workhorse of many decades. NASA purchases seats for its astronauts; each mission is worth tens of millions of dollars. But the situation is going to change soon. \nTwo companies \u2014 Boeing and SpaceX \u2014 are developing commercial crew vehicles to carry astronauts to the ISS. They should start flying crews in the next year or two...</i><sup>1</sup>\n</p>\n<p class="firstparagraph">If there is ever a global stage marked by camaderie besides the World Cup, space would have to take a strong 2nd place--ISS collaboration breaks all bounds! But what\'s really going on with that place anyway? Past 2024--apparently not much, but that\'s because the moon is going on ...</p>\n<p class="quote">The latest [Congressional Budget Office\'s] request has no money for the space station past then[2024]. That\'s so that NASA can focus its resources on the Deep Space Gateway, a lunar space station that plays a part in the administration\'s request to send astronauts to the moon again before going on to Mars.\n<br /><br />\nThe Europeans have expressed some interest in the Deep Space Gateway, but as for [Russian] Roscosmos, their direction is unclear. The [Russian] agency could join NASA on another space station, go on its own, or ally itself with newer space powers (such as China) for other work.<sup>1</sup>\n</p>\n<p>Besides the moon, I wouldn\'t be opposed to a year-and-a-half long trip to Mars--so long as I had plenty of reading material, and a round-trip ticket!\n';
  var blogcite14 = '\n<p class="footnotes">1. <a href="https://www.space.com/41038-roscosmos-russian-space-strategy-commercial-crew.html"   target="_blank">https://www.space.com/41038-roscosmos-russian-space-strategy-commercial-crew.html</a>\n</p>   \n';
  var blogpost13 = '\n<p class="firstparagraph">If there was ever a thing called "Continuing Education," that thing has become a learning, thinking mandate in the modern professional world. Learning to work side-by-side with our A.I. "automation workmates" has become a somewhat paradoxical burden whereby the more we learn, the more we get to shovel our work onto our <i>Ever-Cheerful automators</i>, and this is the least onerous burden I have ever had to bear...</i> It\'s called the <i>Abolition of boring tasks!</i> </p>\n<p>Many writers have touched on the freedom that digital automation affords us: The repetitive, mundane (i.e. mindless) tasks that once occupied days and weeks of our time can now be evaporated away in hours when we just ask for help from our digital automotons--but we first have to ask! </p>\n<p>And so, the work is no longer the work we do: <i>Our work is learning new digitally automated short-cuts, hacks, and clever work-arounds to better shovel the work off to our automotons</i>. But we can only be so clever, and so we have to learn to be more clever: hence the latest rage from colleges and universities with programs offering \'perpetual learning.\' The Washington Post reports,</p>\n<p class="quote">\n\nIn the future of work, robots are supposed to wipe out tons of jobs, create a bunch of new ones or deliver some combination of both. Economists predict any of these scenarios will force the average worker to do practically the same thing throughout their careers: keep learning and learning and learning.\n<br /><br />\nSome colleges in the United States are already preparing for this age of perpetual education, including the University of Michigan\u2019s Ross School of Business. The Ann Arbor school launched a scholarship program that pays for graduates to take classes there forever, and the number of students is slowly growing.<sup>1</sup></p>\n<p>\n<p>But what really is the time-scale on this big transformation? Most things operate like they always have, and honestly, maybe we can be a little more picky about what, how, and <strong>why  we "optimize" the things we do. But that kind of old-fashioned Ludditism is not the age we live in. Today, everything has to change to stay compatible!  A more telling detail from the New York Times:</p>\n<p class="quote">And we\u2019ve digitized only about 20 percent of the economy, meaning there\u2019s tremendous technological climate change yet ahead. These climate changes are reshaping the ecosystem of work \u2014 wiping out huge numbers of middle-skilled jobs \u2014 and this is reshaping the ecosystem of learning, making lifelong learning the new baseline for advancement.<sup>2</sup></p>\n<p>20%? Really? So, it sounds like our productivity is <i>inversely proportional to work <strong>we</strong> do</i>, but rather the work--boring, mundane work--that we can effectively hand off to our automon partners--whatever the sector.  \n\n';
  var blogcite13 = '\n\n<p class="footnotes">1. <a href="https://www.nytimes.com/2018/06/26/opinion/political-parties-climate.html"   target="_blank">https://www.nytimes.com/2018/06/26/opinion/political-parties-climate.html</a>\n</p> \n<p class="footnotes">2. <a href="https://www.washingtonpost.com/news/wonk/wp/2018/06/06/in-the-future-college-never-really-ends/?noredirect=on&utm_term=.4d7810952eb7"   target="_blank">https://www.washingtonpost.com/news/wonk/wp/2018/06/06/in-the-future-college-never-really-ends/?noredirect=on&utm_term=.4d7810952eb7</a>\n</p>  \n\n';

  var blogpost12 = '\n<p class="firstparagraph">Obnoxious misuse of A.I.Tech is a rare thing because developers are among the smartest and most humane among all professions, if I my humbly claim.  But <i>Tech consumers are not necessarily bound by such thoughtful solidarity.</i> The following exemplifies the darker side of A.I. tech...                                          </p>\n<p class="quote">Cogito is one of several companies developing analytics tools that give agents feedback about how conversations with customers are going. Its software measures in real time the tone of an agent\u2019s voice, their speech rate, and how much each person is talking, according to Dr. Place. \u201CWe measure the conversational dance,\u201D he says.\n\nThat dance is sometimes out of sync, such as when an agent speaks too quickly or too much, cuts a customer off, has extended periods of silence or sounds tired.\n<br /><br />\nWhen the software detects these mistakes, a notification pops up on a window on an agent\u2019s screen to coax them to change their strategy. The alerts are useful not just for the agents, but also for their supervisors, Cogito says.<sup>1</sup></p>\n<p>For all the fanfare of A.I. and Learning algorithms, let\'s hope that those who wield such power will not yield to obnoxious misuse. Famed Sociologist Max Weber wrote on the over-rationalizing tendencies of bureaucratic devotion to mass production. He calls it the iron shell, and the ... </p>\n<p class="quote">"more complex idea that Weber himself sought to evoke with the "shell as hard as steel": a reconstitution of the human subject under bureaucratic capitalism in which "steel" becomes emblematic of modernity ... Further, whereas a cage confines human agents, but leaves their powers otherwise intact, a "shell" suggests ... a new kind of being.</i>" <sup>2</sup></p>\n<p>This 19th century sociologist Dr. Weber lived in simpler times, pre-dating the 1910\'s  industry-wide adoption of "Tayloristic" calculations in factory settings for optimized and maximum efficiency--all invented by a Factory Supervisor named Frederick Taylor, armed with a pencil and a heavy-duty clipboard!\n</p><p>\nNow imagine starting a new job with a feisty robot, as one proud supervisor proclaims: <i>"One of her 14 agents said the software noticed he wasn\u2019t speaking with enough energy, so it prompted him with a message to pep up plus a coffee-cup icon, she says." </i><sup>1</sup>\n</i> The horror, the horror.</p>\n</p>\n';
  var blogcite12 = '\n\n\n<p class="footnotes">1. <a href="https://www.wsj.com/articles/call-center-agents-get-a-human-touch-1528984801?mod=foesummaries"   target="_blank">https://www.wsj.com/articles/call-center-agents-get-a-human-touch-1528984801?mod=foesummaries</a>\n</p> \n<p class="footnotes">2. <a href="https://www.jstor.org/stable/2678029?seq=1#page_scan_tab_contents"   target="_blank">https://www.jstor.org/stable/2678029?seq=1#page_scan_tab_contents</a>\n</p> \n';
  var blogpost11 = '\n<p class="firstparagraph">As if Apple needed any more money--now Samsung will be writing a half-billion dollar check to right the wrongs of patent infringement and "slavish" copying.<sup>1</sup> Well, history certainly repeats itself as it was IBM that played the relentless copy-cat of Apple\'s technological leadership way-back-when. \n</p>\n\n<p class="quote">Apple Inc and Samsung Electronics Co Ltd on Wednesday settled a seven-year patent dispute over Apple\u2019s allegations that Samsung violated its patents by \u201Cslavishly\u201D copying the design of the iPhone.<br /><br />In May, a U.S. jury awarded Apple $539 million, after Samsung had previously paid Apple $399 million to compensate for patent infringement. Samsung would need to make an additional payment to Apple of nearly $140 million if the verdict was upheld.<sup>1</sup>\n</p><p class="paragraph">Isn\'t it true that Apple is made by and wholly devoted to the Creatives from every sector? And thus the Creator will inevitably create followers ... I guess in retrospect my various Samsung phones and products have been "inspired" by Apple...so close, yet so far away--another case of the six-degrees of connections to a celebrity! \n</p>\n<p>My love affair with Apple products is still riding the pink cloud--less than a year now. I have the good luck to use a Macbook Pro that feels, types, and views like a sports car. You can rev the engine by running some heavy-duty map imaging from data calculations--<i>talk about the MacBook\'s grace and power, when lo, your root is sitting right on top of a Linux Shell. These words come from a 25-year serf to Microsft\'s ownership.</i> The feel of a 1967 Corvette with very little between you and 350 Horse Power. I honestly haven\'t experienced this high quality since the first time I listened to Radiohead on my friend\'s new I-pod in 2007.  \n</p>\n<p>An Ode to Apple products: Apple! You are our Creative Leadership and your Apple Watch is beyond our realm--a postcard from another world. Apple, you alone bear the high standard of quality tech products--because you, Apple, do occupy the highest, and wealthiest, seat among the Tech Giants!\n</p>\n';

  var blogcite11 = '\n<p class="footnotes">1. <a href="https://www.reuters.com/article/us-apple-samsung-elec/apple-samsung-settle-u-s-patent-dispute-idUSKBN1JN2S4"   target="_blank">https://www.reuters.com/article/us-apple-samsung-elec/apple-samsung-settle-u-s-patent-dispute-idUSKBN1JN2S4</a>\n</p> \n\n';
  var blogpost10 = '\n<p class="firstparagraph">5G Technology, ever so close to life-changing implementation, conjures up fantastic musing over how our everyday products will interact in real-time with our personalized data-cloud. Certainly IoT (Internet of Things) products will be carrying a whole lot of machine-to-machine to machine communication. From the IoT edge (encircling a router, for instance) to communicate sensors to mid-range "listeners".</p>\n<p>So, although Sprint-T-Mobile Oneness spells monopoly, the scale of work that needs to be done to convert everything to 5G <i>means we Need a great tech innovator like T-Mobile\'s John Legere to push with fervor the right ways to deliver 5G connectivity to every American, anywhere.</i> My<a href="#18-04-27"> April 27 post</a> talks more on their affair, but the reality is that Sprint doesn\'t contribute value to American innovation; that claimed, <i>Sprint\'s bandwidth rights and spare parts really <strong>will truly</strong>  add value</i> to American Tech!</p>\n';
  var blogcite10 = '<p class="footnotes">1. <a href="https://www.reuters.com/article/us-sprint-corp-m-a-t-mobile-us/sprint-t-mobile-defend-proposed-tie-up-before-u-s-senate-panel-idUSKBN1JN33A"   target="_blank">https://www.reuters.com/article/us-sprint-corp-m-a-t-mobile-us/sprint-t-mobile-defend-proposed-tie-up-before-u-s-senate-panel-idUSKBN1JN33A/a>\n</p> \n';

  var blogpost9 = '\n<p  class="firstparagraph">\nWhy the GPU rather than CPU for speed? 90% of deep learning algorithms use distributed, parallel problem-calculations. So, who needs a steering wheel racing on the Bonneville Salt Flats? Certain kinds of algorithms do, though, such as recursive, tree-traversing kinds. But I\'m just a tourist.\n</p> \n\n<p class="quote"><i>\n[Alex Khrizhevsky] says he recalls reading some paper about matrix multiplication algorithms on the GPU (I don\u2019t know the specific one), and basically the idea he had at the time was just to re-implement the original Lenet architecture[1], but use the GPU to train a network (of unprecedented size in 2012) really fast.\n</i><sup> 1</sup></p>\n\n<p>Evolution of these new AI\'s, and AI\'s designing AIs, require voracious amounts of training data to implement and improve learning designs.  So where would AI research stand if not for the ultra-fast and efficient modern-day Graphical Processing Unit? Better asked, what inspired Krizhevski\'s novel, paradigm-shattering design?  Clearly <i>the Need for Speed!</i> </p>\n \n  ';
  var blogcite9 = '\n<p class="footnotes">1. <a href="https://www.quora.com/How-did-Alex-Krizhevsky-come-up-with-the-idea-of-AlexNet-How-does-the-designer-think"   target="_blank">https://www.quora.com/How-did-Alex-Krizhevsky-come-up-with-the-idea-of-AlexNet-How-does-the-designer-think</a>\n</p>\n\n \n';
  var blogpost8 = '  <p class="quote"><i>\nDeep learning allows computational models that are composed of multiple processing layers to learn representations of data with multiple levels of abstraction. These methods have dramatically improved the state-of-the-art in speech recognition, visual object recognition, object detection and many other domains such as drug discovery and genomics. Deep learning discovers intricate structure in large data sets by using the backpropagation algorithm to indicate how a machine should change its internal parameters that are used to compute the representation in each layer from the representation in the previous layer. Deep convolutional nets have brought about breakthroughs in processing images, video, speech and audio, whereas recurrent nets have shone light on sequential data such as text and speech.</i><sup>1.</sup>\n</p> \n  <p class="firstparagraph">Artificial Intelligence has evolved from a prototypal event known as the "Cambrian Explosion, only five years ago."<sup>1</sup> An architect named Alex Krizhevsky offered a new paradigm for <i>deep learning</i> at an image recognition event, Imagenet Competition. Mr. Krizhevsky\'s "Alex Net" became the pivotal <i>Convolutional Neural Network</i>, with a mere 8 layers\' depth (think of the decision tree mentioned in post 6/20) &amp; millions of parameters. </p>\n\n<p>The handwriting-signature recognition algorithm is still in use today! The design--using a training technique called "Stochastic Gradient Descent", by Geoff Hinton--blew the competition away and revolutioned machine learning. </p>\n<p>Today, neural netwoks boast <i>hundreds of layers and billions of paremeters: The last five years has been busy!</i> And the varied species of designs since the original Convolutional Neural Network (CNN) include Recurrent Neural Networks (RNN), Generative Adverserial Networks (GAN) and Reinforcement Learning.\n</p> \n';
  var blogcite8 = '<p class="footnotes">1. <a href="https://www.nature.com/articles/nature14539"   target="_blank">https://www.nature.com/articles/nature14539</a>\n</p> \n\n<p class="footnotes">2. <a href="https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks"   target="_blank">https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks</a><br />\nPDF:  <a href="https://www.nvidia.cn/content/tesla/pdf/machine-learning/imagenet-classification-with-deep-convolutional-nn.pdf"   target="_blank">https://www.nvidia.cn/content/tesla/pdf/machine-learning/imagenet-classification-with-deep-convolutional-nn.pdf</a>  \n</p> \n';

  var blogpost7 = '  <p class="quote"><i>I sat one evening in my laboratory; the sun had set, and the moon was just rising from the sea; I had not sufficient light for my employment, and I remained idle, in a pause of consideration of whether I should leave my labour for the night, or hasten its conclusion by an unremitting attention to it. As I sat, a train of reflection occurred to me, which led me to consider the effects of what I was now doing. <br />\n  <br />\n  --Victor Frankenstein<sup>1</sup>\n  </i><br /> \n</p>\n<p class="firstparagraph">Nvidia\'s latest 12" by 4" by 4" GPU accelerates algorithmic work from 1<sup>1/2</sup> months to 4 days. The most recent exponential leaps in computing power--most notably for A.I. purposes, are thanks only to the Graphical Processing Unit. Progress followed a linear path in as 1998 world, a world enlightened by the pivotal A.I. publication, "Convolutional Neural Netowrks for Handwritten Digital Recognition" (Lecun, Bottou, <strong>Bengio</strong>, Haffner, 1998) to the present use in blockchain computing and deep learning algorithms, among many other purposes. The technical advantage offered by Nvidia explained by 2012\'s "ImageNet Classification with NVIDIA GPUs (Krizhevsky, Hintou, et al.). Ten years ago, Daniele G. Spamintato and Anne C. Elstery offer a succinct explanation:\n</p>\n<p class="quote">Optimization algorithms are becoming increasingly more important in many areas, such as finance and engineering. Typically, real problems involve several hundreds of variables, and are subject to as many constraints. Several methods have been developed trying to reduce the theoretical time complexity. Nevertheless, when problems exceed reasonable sizes they end up being very computationally intensive. Heterogeneous systems composed by coupling commodity CPUs and GPUs are becoming relatively cheap, highly performing systems.\n<br />\n<br /> Recent developments of GPGPU technologies give even more powerful control over them. In this paper, we show how we use a revised simplex algorithm for solving linear programming problems originally described by Dantzig for both our CPU and GPU implementations. Previously, this approach has showed not to scale beyond around 200 variables. However, by taking advantage of modern libraries such as ATLAS for matrix-matrix multiplication, and the NVIDIA CUDA programming library on recent GPUs, we show that we can scale to problem sizes up to at least 2000 variables in our experiments for both architectures. On the GPU, we also achieve an appreciable precision on large problems with thousands of variables and constraints while achieving between 2X and 2.5X speed-ups over the serial ATLAS-based CPU version. With further tuning of both the algorithm and its implementations, even better results should be achievable for both the CPU and GPU versions.<sup>2</sup></p>\n<p>So, given the exponential development advantages of GPU use, it\'s clear the horizon for more and more developers implicates high computing needs.  So, what exactly is novel yet increasingly a household developer tool? </p>\n<p class="quote">\nCUDA\xAE is a parallel computing platform and programming model developed by NVIDIA for general computing on graphical processing units (GPUs). With CUDA, developers are able to dramatically speed up computing applications by harnessing the power of GPUs.<br /><br />\n\nIn GPU-accelerated applications, the sequential part of the workload runs on the CPU \u2013 which is optimized for single-threaded performance \u2013 while the compute intensive portion of the application runs on thousands of GPU cores in parallel. When using CUDA, developers program in popular languages such as C, C++, Fortran, Python and MATLAB and express parallelism through extensions in the form of a few basic keywords.\n<br /><br />\nThe CUDA Toolkit from NVIDIA provides everything you need to develop GPU-accelerated applications. The CUDA Toolkit includes GPU-accelerated libraries, a compiler, development tools and the CUDA runtime.\n<sup>3</sup></p>\n<p>And, this tech is arriving at both the mainstream PC-optimization level as much as typical university research, the potential of both laid out in a June 2018 Wired Magazine article:</p>\n<p class="quote">PCs that work on smartphone parts. Devices that run all day, but for real this time. A 32-core hellbeast processor. The first GPU shrunk down to a 7nm process. Always-connected 5G laptops. And while not a PC, the ASUS ROG put vapor cooling in gaming-focused smartphone. (Vapor cooling. In a smartphone.) \n<br /> . . .\n<br />And then there\'s arguably the real star of the show, an AMD prototype of the first-ever GPU built on a 7nm process. Unlike some of the other blockbuster announcements out of Taipei this week, this one won\'t make its way to your computer any time soon. It\'ll find a home in data centers, helping AI and machine learning compute at blistering speeds, using a lot less energy to do so.<sup>4</sup>\n  </p>\n  <p>And so, with blistering speed and the joining of disciplines of science, the spear\'s tip of innovation accelerates ... without a spare nanosecond for reflection!\n  ';

  var blogcite7 = '<p class="footnotes">1. Frankenstein, or Modern Prometheus, Mary Shelley, 1818. <br /><a href="https://www.gutenberg.org/files/84/84-h/84-h.htm"   target="_blank"> PDF https://www.gutenberg.org/files/84/84-h/84-h.htm</a>\n  </p>  \n  \n  <p class="footnotes">2.  <a href="https://www.gutenberg.org/files/84/84-h/84-h.htm"   target="_blank">2009 IEEE International Symposium on Parallel & Distributed Processing</a>\n  </p>  \n  <p class="footnotes">3.  <a href="https://developer.nvidia.com/cuda-zone"   target="_blank">https://developer.nvidia.com/cuda-zone</a>\n  </p> \n     <p class="footnotes">4.  <a href="https://www.wired.com/story/computex-2018-new-chips-qualcomm-amd-intel/"   target="_blank">https://www.wired.com/story/computex-2018-new-chips-qualcomm-amd-intel/</a>\n  </p>  \n  \n  ';

  var blogpost6 = '\n  <p class="firstparagraph">\n  <p class="firstparagraph">Small, online businesses face the music today to pay state sales taxes, thanks to the Supreme Court\'s <i>Wayfair V. South Dakota</i>.<sup>2</sup> My <a href="#18-04-14">April 14th var blog</a>, <i>Clash of the Brick &amp; Mortars against Online Stores</i> goes more in depth... </p>\n  <p>What this means is that imminently, 50 variations of newly permitted State internet sales taxes for small businesses.<sup>2</sup> This will inevitably hurt variety, and likely lead to a lot of inter-state confusion: </p>\n  <p class="quote">The new law may seem straightforward, but there are fairly complicated specifics when it comes to different jurisdictions and categorization of goods.\n<br /><br />\n  For example, New Jersey places a tax on marshmallows, which are considered candy and a luxury, but they don\u2019t tax marshmallow fluff which is considered food. In some states Kitkat bars are categorized as food because they contain flour, but a snickers bar is candy. Meanwhile a snickers ice cream bar, which needs to be refrigerated, would be considered food and not taxed.<sup>1</sup></p>\n  <p>Small, online businesses: Get your calculators ready!\n  </p> \n ';

  var blogcite6 = ' \n  <p class="footnotes">1.  <a href="https://www.forbes.com/sites/advisor/2018/06/21/state-sales-tax-which-states-are-most-affected-by-the-supreme-court-online-retail-ruling/#791a05383e66"   target="_blank">https://www.forbes.com/sites/advisor/2018/06/21/state-sales-tax-which-states-are-most-affected-by-the-supreme-court-online-retail-ruling/#791a05383e66</a>\n  </p> \n  \n  <p class="footnotes">2.  <a href="http://money.cnn.com/2018/06/21/technology/wayfair-vs-south-dakota/index.html"   target="_blank">http://money.cnn.com/2018/06/21/technology/wayfair-vs-south-dakota/index.html</a>\n  </p> \n  \n  ';
  var blogpost5 = ' \n  <p class="firstparagraph">What difference does it make for Net Neutrality to morph into 50 different variations now that the neutrality protections leave the federal arena to fall into  state legislation?<sup>1</sup> Who can tell. Unfortunately, a potential micro-balkanization of bandwith rules within an interdependent network doesn\'t spell faster service for anyone. </p>\n  \n  <p>\n  What people seem to forget is that the key win for the 2015 net neutrality laws were merely <i>a small reflection of the larger significance of <strong>the net\'s reclassification as a service, like water, natural gas, and electricity.</i></strong> State legislators need to focus on the air we breathe as critical to providing enough at reasonable cost, to merely survive in the times.</p>\n  <p>After all, the internet venues are what color the web...the last thing we need is the vast and varied imagination of 5 umbrella content-providers. Wired Magazine makes a good point that </p>\n  <p class="quote">California\'s current legislative debates may lead the precedent for others, more influential than Seattle\'s--California\'s economy is equally sized with France at 2.5 trillion. \n  <br />\n  <br />[California State Senator Scott Wiener\'s] original bill included all the major provisions of the FCC\'s old rules, which banned broadband providers from blocking, throttling, or otherwise discriminating against lawful content. But it went further than the FCC rules by banning companies from blocking or throttling content as it enters their network from other networks, under so-called interconnection agreements.<sup>2</sup> </p>   \n  <p>The Internet, after all, is a Network, and a network is by definition a singular entity.</p>\n  ';

  var blogcite5 = ' \n  <p class="footnotes">1.  <a href="http://www.latimes.com/politics/la-na-pol-court-online-taxes-20180621-story.html"   target="_blank">http://www.latimes.com/politics/la-na-pol-court-online-taxes-20180621-story.html</a>\n  </p>\n  <p class="footnotes">2.  <a href="https://www.wired.com/story/california-net-neutrality-bill-was-hijacked-lawmaker-says/"   target="_blank">https://www.wired.com/story/california-net-neutrality-bill-was-hijacked-lawmaker-says/</a>\n  </p>\n    ';

  var blogpost4 = '<p class="quote"><i>\n  They left The Denver Post amid newsroom layoffs and interference in the editorial process by the newspaper\u2019s hedge-fund owners. And now those reporters and editors are creating their own news outlet, The Colorado Sun.  They will be partnering with the Civil Media Company, an ambitious New York start-up that aims to use blockchain technology and crypto economics to start 1,000 publications nationwide by the end of the year. </i>\n  <br /><br />- New York Times, June 17, 2018</p><br />\n  <p class="firstparagraph">Power from the 4th Estate tends to flow in the form of printers\' ink, however Blockchain Tech empowers journalists with  new resources for their trade: free money and data, and more importantly, an empowered readership in Cooperative form: \n  </p>\n  <p class="quote">\n  The new publication will have a conventional website whose data will be written permanently into the secure digital ledger known as the blockchain. Expenses for the fledgling outlet will be covered by a grant from Civil, whose sole investor, for now, is ConsenSys, a Brooklyn-based blockchain software technology company founded by the Canadian entrepreneur Joseph Lubin. Mr. Lubin is also a co-founder of the Ethereum, a virtual currency and blockchain database platform. As part of its plan to fund new media entities, Civil plans to unveil a new token this summer called CVL.\n<br /><br />\nPeople who purchase the CVL token, a form of cryptocurrency, will have a say concerning the projects hosted by Civil \u2014 meaning that they can vote on whether one of its websites violates the company\u2019s journalism standards, which are outlined in the Civil Constitution.<sup>1</sup> \n  </p>\n  <p>Who would have guessed that through Crypto-Currency for money and Distributed Ledger Tables for data, modern Journalism would rise from the ashes of tech-induced impoverishment and so-called \'fake-news\' delegitimization to regain limitless ink for influence, with a renewed and democratized legitimacy.  <br />\n  <br />\n  Thank you, Blockchain, for restoring Truth to Power!\n  </p>\n  ';

  var blogcite4 = '\n  <p class="footnotes">1.  <a href="https://www.nytimes.com/2018/06/17/business/media/denver-post-blockchain-colorado-sun.html"   target="_blank">https://www.nytimes.com/2018/06/17/business/media/denver-post-blockchain-colorado-sun.html</a>\n  </p>\n  \n  ';
  var blogpost3 = '<p class="firstparagraph">Deep Learning--a 70\'s thing--clearly predates   personal computing, the web, and even the 70\'s Show. But the true advances have been a long time in development, and credit belongs to Statistics and Data Science, and specifically quantitative analysis\' ever cleverer classification trees that deliver the goods with greater accuracy, coupled with less intensive computing costs. And this origin is interesting in itself: </p>\n <p class="quote">\nFifty years have passed since the publication of the first regression tree algorithm. New techniques have added capabilities that far surpass those of the early methods. Modern classification trees can partition the data with linear splits on subsets of variables and fit nearest neighbor, kernel density, and other models in the partitions ... <br />\n<br />Classification And Regression Trees (CART) (Breiman et al., 1984) was instrumental in regenerating interest in the subject. It follows the same greedy search approach as  Automatic Interaction Detection (AID) and THeta Automatic Interaction Detection (THAID), but adds several novel improvements. Instead of using stopping rules, it grows a large tree and then prunes the tree to a size that has the lowest cross-validation estimate of error. The pruning procedure itself is ingenious, being based on the idea of weakest-link cutting, with the links indexed by the values of a cost-complexity parameter. This solves the under-fitting and over-fitting problems of  AID and THeta Automatic Interaction Detection (THAID), although with increased computation cost.<sup>1</sup>\n</p>\n<p>Today, Machine Learning curricula usually begin with the same sample datasets on Iris characteristics (pictured below)</p>\n<img style="min-width:300px;"  src="dist/img/learningData.PNG"><br /><br />\n<p>So how does it really work, in oversimplified terms? Contrary to most algorithms\' step-by-step manual decision-making through for- and while-loops, if-else, and so on, the scalability of design clearly falls off. Enter Deep Learning, which is nothing more mystical than simple classification--i.e. decision--trees. Beginning with a million choices, a decision passes through multiple layers that may or may not be activated, and with each activated layer, a decision is narrowed down, until finally a decision is reached between recognizing a dog and a cat!\n</p><img style="min-width:300px;" src="dist/img/classifTree.PNG">\n</p><img style="min-width:300px;" src="dist/img/classifTree2.PNG"><br /><br />\n<p>And yet, for all of this science, up until 2011, the error rate for simple shape recognition, like say a dog from a cat still averaged a 26% error rate! A mere 7 years later? Today, that error rate averages less than 3% error, most recently due to computing, power, and memory advances.   Those come in handy for delivering a warehouse worth of computing onto your smartphone! That\'s a boon for delivering sensors, i.e. training data, into the environment. My last post mentioned Google\'s upcoming, yet unnamed Android OS...but we do know it\'s a candy that starts with "P"...my guess is Peppermint Patties? Or maybe Pez has more of a ring to it.</p>  \n<p  >\nWhatever the new OS is called, it comes with a developing potential to exponentially advance <i>Tree Science</i>:  ML Kit behaves like an API layer connecting the ML software to the app developers\' models, making dev easy to run and deploy with an "experimental model compression flow that aims to reduce model size (up to orders of magnitudes) while maintaining similar accuracy."<sup>3</sup> Talk about maturing exponentially quickly! Now, this origin story can\'t compete with Wolverine\'s nor Han Solo\'s, but this gem carries a mythical and futuristic potential to satisfy screen-goers from all devices, frame-sizes, and platforms!</p>\n';

  var blogcite3 = '\n\n<p class="footnotes">1. Loh, W. Y. (2014). Fifty years of classification and regression trees. International Statistical Review, 82(3), 329-348.\n<a href="https://onlinelibrary.wiley.com/doi/full/10.1111/insr.12016"   target="_blank">https://onlinelibrary.wiley.com/doi/full/10.1111/insr.12016</a>\n</p>\n\n<p class="footnotes">2. Classification and Regression Trees Leo Breiman, Jerome Friedman, Charles J. Stone, R.A. Olshen (1984).\n<a href="https://www.taylorfrancis.com/books/9781351460491"   target="_blank">https://www.taylorfrancis.com/books/9781351460491</a>\n</p> \n\n<p class="footnotes">3. \n<a href="https://developers.google.com/ml-kit/"   target="_blank"> https://developers.google.com/ml-kit/</a>\n</p>\n<p>Images:Maurice Roux\nUniversit\xE9 Marseille 3\nSaint-J\xE9r\xF4me</p>\n';

  var blogpost2 = '\n<p class="firstparagraph">\nThe upcoming Android \'P\' OS--still in beta and only available on Pixel phones, Essential, and a few others--promises a new era in mobile app development<sup>1</sup>  Most features, like expanding Maps\' indoor functionality, inclusive Emojis, and a revamped navigation bar are all nice, but one element of the build empowers app developers\' access to machine-learning code: \n</p>\n<p class="quote"> With  ML, i.e. machine-learning, Kit, app developers can use Google\u2019s machine learning tasks within their own apps. ML Kit allows developers to use the camera for face detection, landmark recognition, text recognition, and a host of other recognition features.<sup>2</sup></p>\n<p>\nSo, in conceptual terms, this means developing app-data models that are <i>optimized for mobile inference</i>. This means that the long process of acquiring enough training data to optimize an app\'s design or behavior (generally or specifically user personalization), can now be shortened with better quantity and quality of training data &aacute; la machine learning. So in concrete terms, the past 15 years\' of Google ML research is now distilled into (again, still beta) an SDK (software developers\' kit) that facilitates dev integration without needing to hand-make a model to access the run-time environment. \n</p>\n<p>In other words, past server-side inferences now jump to the mobile device, and tap into   on-device machine learning library framework and toolkit--i.e. TensorFlowLite. This jump-starts customized application of machine learning already in production--that is, Android devices\' <i>Neural Networks API</i> and <i>iOS\' Metal</i>.  \n</p>\n<p>What makes this new programming horizon most interesting is that an equally new feature, called "Actions" and "Slices",  allows for certain app features to be accessed by the phone itself outside of the app. A May 8th Verge article explains:\n\n</p>\n<p class="quote">\nGoogle is introducing developers to a couple of terms: \u201CActions\u201D and \u201CSlices.\u201D They are essentially deep links into apps that are able to surface in other parts of the operating system. Actions are analogous to Actions on Google Assistant; Slices are a subset that can show the app\u2019s own UI when you type out a global search on the phone.\n<br /><br />\nThe idea behind both of these concepts is to break out the different pieces of the apps you use into the larger operating system. Samat calls it the \u201Cdecomposition of apps,\u201D though without the connotations of death. \u201CYeah, you want to go the app,\u201D he says, \u201Cbut actually what you want to do is go to your house or reorder from Instacart.\u201D\n<br /><br />\nDevelopers will need to build some frameworks into their apps to make Actions and Slices available to the system. When they do, the AI in Android P will try to understand what those apps can actually do and suggest those actions to you. \u201CWhen you modularize the app, it\u2019s not just an API call,\u201D Samat says. \u201CYou have these components that can be understood by the system, predicted by the system, and then rendered by the system.\u201D<sup>3</sup>\n</p>\n<p>So what does this mean? Better, higher-quality time spent with your work or play, rather than hopping from one icon to the next for each and every task...';
  var blogcite2 = '\n\n  <p class="footnotes">1.\n\n  <a href="https://developer.android.com/preview/devices/"   target="_blank"> https://developer.android.com/preview/devices/</a>\n \n  </p>\n  <p class="footnotes">2.\n\n  <a href="https://www.digitaltrends.com/mobile/google-android-p-news/"   target="_blank"> https://www.digitaltrends.com/mobile/google-android-p-news/</a>\n \n  </p>\n  <p class="footnotes">3.\n\n  <a href="https://www.theverge.com/2018/5/8/17327302/android-p-update-new-features-changes-video-google-io-2018"   target="_blank"> https://www.theverge.com/2018/5/8/17327302/android-p-update-new-features-changes-video-google-io-2018</a>\n \n  </p>\n\n  ';
  /*
  var blogpost1 =  `<p class="firstparagraph">Blockchain technologies, i.e. Government contracts, Business contracts, Bitcoin and other
  cryptocurrencies, all rely on network graph theory, both on the low-level programming technology (peer-to-peer global
  ip networks) across the spectrum to high-level interfaces for institutional, corporate, individual needs and uses.
  These blockchain &quot;network&quot; analyses depend on highly variable--and simultaneous--network changes, node
  changes, and link changes; and, the latter three may arbitrarily change interdependantly or not.</p>
  
  <p>Therefore, blockchain technologies must first accomodate  complex node variables, including one- or two-way contracts (relationships) that
   depend on<i> arbitrarily hierarchical mappings and conditional data structures.</i> Secondly, blockchain tech must face analytical
  challenges that arise from informal practices<sup>1</sup><span class="new">--you can survey opinions, but how do you measure whim?</span>
  The organizational nodes (employees) choose to deviate from their employment roles&#39; protocol <span class="new">because it it is sunny outside, or maybe because the traffic was long today, or because a butterfly's wing-swish cooled a rash decision down to reason.  That small detail often trumps statistical patterns of efficiency, convenience, company culture, and multiple other levels of analysis of human factors.</p>
  
  <p>Sociologists Meyer &amp; Rowan&#39;s (1977)
  <i>New Institutionalism</i> explains how employees change practices and decouple
  <i>actual</i> organizational structure from recorded rules, as a function of organizational size, time, convenience,
  etc. Noone can argue against this wall of reason. <span class="new"><i> The problem is not the reason, the problem is the static, frozen wall called Social Science Theory, constructed from a pastiche of different meanings</i> and arbitrary theoretical starting points.  <span class="new">The esteemed Scholar of Comparative Politics, Dr. Ellen M. Immergut, undermined modern sociology concepts in 1998--a logical blow from which Sociology has never recovered (nor yet faced). She writes:</span>
  </p>
  <p class="quote new">
  Further confusion has arisen because the new institutionalists do not propose one generally accepted definition of an institution, nor do they appear to share a common research program or methodology. In fact, three separate branches of scholarship--rational choice, organizational theory, and historical institutionalism -- all lay claim to the label, seemingly without adhering to an overarching theoretical framework.<sup>3</sup></p>
  <p class="new">
  In other words, the long-standing Civil War within the discipline of Sociology (beginning with Functionalists' irreconcilable contradictions of Conflict Theorists' entire World-View--and vice-versa). From this initial schism begins the disassembling of the discipline--as it stands until today. 
  All of that talent and no single vision to harness a lasting explanatory platform.  And this is <i>before</i> addressing--from a Scientific Method Paradigm--the problem of continually new, unknown constraints on data that must be intimately understood without falling back to the old, "USA Today" habits of 'Theoretical Relativism'.</p>
  </span>
  <p>
  So, how do we recognize unwritten, soft rules and behaviors of a bank, a person,
  or a company&#39;s internal bot?</p> 
  <p>The hard sciences domain of Software Engineering, Computer Science, and Mathematics have brilliantly brought the
  world the blockchain tool, based on a <span class="new"><i>technical, numerical aptitude--numeracy--for which the Hard Sciences can and must share and propogate it's technical expertise and higher standard of metric truth</i><s style="color:purple" class="strike-purple"> not contribute everything, especially relating with</s> to the other sciences that are still lagging behind--namely The Discipline of Sociology</s> toward acclimating to the modern age's social priorities and needs. Ask yourself, how well do 1,000 top blockchain-related programmers understand the multi-dimensional layers of hierarchical social, corporate, and governmental relationship networks--probably 700 of the 1,000. And how many social scientists can understand the technological sciences? Probably 200 out of 1,000. This means that <i>a chunk of the scientific displines suffer from acute innumeracy</i>. So how do we bridge this massive knowledge gap between qualitative meaning in the smart-contract?</span></p>
  <p>In the past, the layers of abstraction from raw technological tool to societal use was refined, improved, integrated through multiple layers of &quot;middlemen&quot;, such as lawyers, corporate lawyers, government institutions, non-governmental, non-profit and for-profit actors. Blockchain technology, by its very nature, erases the middlemen. Suddenly, one programmer, for example, is writing the same healthcare insurance crypto-contract, that last month an entire team of hospital employees spent a month writing; then overseeing and managing different facets of this same thing.</p>
  
  <p>However, the crypto-contract, once deployed to the blockchain, auto-manages the rest, forever or for the life of
  the contract. Therefore, rather than redoing the trials and errors of 200 years&#39; Sociology Network Analysts&#39;
  research and analytical development. <span class="new"> Therefore, much of the social scientists have arrived at the end of the line of technology, still shackled to analog methodology relegated to the Sine and Cosine of progress; while the World leaves it behind, led by the Hard Sciences of Software Engineering--the new social fabric of the 21st Century. So, can the anthropological and social domains survive this existential threat to any authority--that depends if the Hard Sciences, Gatekeepers of Empirical Science will extend an open door and pro-actively share technical instructions for the soft sciences.  Therefore, the social sciences are not safe hiding at home, within the academic
  tower--far removed from the pace of societal and technological change.  
  </p>
  
  <p class="new">The point is this: The innumeracy of the Soft Sciences increasingly loses authority, with the less it can prove at the Command Line Interface. So, how will an analog academic field in the early 21st century compete with artifical intelligence? Problems grow exponentially in the modern age, and only the sciences with  machine-learnig on their side can expect to thrive by applying extraordinary applications of machine-learning to network theories. <span class="new">
  Sociologists deal with real-time, logical and hierarchical network mappings that appear arbitrary, yet are characterized by fixed patterns. This implies a higher level of competency to accurately judge a point-of-view without the ability to directly consult machine learning. <i>This is a Code or Be Coded moment in the life trajectory of the social sciences.</i></span></p>
  
  <p>  <i>the Power  of the Social Sciences, even while paraliyzed, cannot be underestimated:</i> No other academic field than sociology has advanced into the details, and endless network rabbit-holes that characterize societal behavior. Not until this second millenial decade could the marriage of Large Number Statistical Theory
  become consumated with the brilliance of early 1900&#39;s Sociological French Network Theories, like Maurice Halbswach&#39;s
  work on the clearly defined network patterns of a society&#39;s Collective Memory.</p>
  
  <p>So, current sociology, having collected and refined knowledge on network arbitrariness, such that Economic&#39;s &quot;irrational
  behaviors&quot; and Mathematical &quot;complexity models&quot; do not
  <i>touch to the bone</i> the meaning, the intersectionality of network analysis, which must incorporate simultaneous
  node changes (person gets job /or/ does not get job), network changes (All get jobs /or/ only 3 of 15 network groups
  get jobs), and most importantly the
  <i>relationship</i> changes (all jobs always useful /or/ half of job groups no longer useful) across time and fixed.</p>
  
  <p>Fine. So, why is Sociology&#39;s network theory so valuable, yet inaccessible, beyond just the network insights gleaned from 19th and
  20th centuries&#39; network problems?  European sociology came of age in the analog social era, while North
  American Sociology only recently come of age (Quebec in the 1960&#39;s [post-1968], U.S. in the 1990&#39;s[post-1999],
  in the digital social era. Therefore, the problem-solving patterns of past sociology are inherently small-data and
  more qualitative analysis, and thus only Sociology incorporates &quot;human-ness&quot; into the billion rows and
  columns of quantitative--numbers-only--analysis.</p>
  
  <p>For example, Oxford-developed S.I.E.N.A. Software accomplishes this task. SIENA--named for Simulation Investigation
  for Empirical Network Analysis--software calculates the real-time values, direction, and conditions of each relationship
  (link) in a network, simultaneously as each node, network, or alter-link changes or is changed; with this, it is
  possible to isolate directional, conditional
  <i>influence change</i> in real-time. Real-time sounds impossible, however, the SIENA documentation
  <sup  >2</sup> describes its program algorithm to the statistical analysis of network data, with the focus on social networks.</p>
  
  <p>An easy example to grasp this is the concept of whether a person
  <i>self-selects </i>(e.g., due to subconscious leanings) into a group and thus matches to fruition the group&#39;s
  behavior with little group influence? Or does this same person join a group and emulates the group&#39;s behavior,
  by the group&#39;s influence over time. Sociological network analysis, using Snjder&#39;s SIENA software, achieves
  the impossible with the closed, directed graph networks that characterize blockchain technology. The network graph
  can be here understood as entire (complete) networks (i.e, the blockchain in its entirety without hard forks), not
  as personal (egocentered) networks: Using this SIENA model allows for the necessary assumptions that a set of nodes
  (social actors) is given, and all ties (links) between these nodes are known - except perhaps for a moderate amount 
  of missing data</p> 
  <p>If, and only if, this level of analysis may be achieved, the blockchain development may follow a linear, directed
  path of maturity with social and world needs.<span class="new"> Until   Social Science Network Theorists stop from basing their numerical analysis on the mutable sand of theory, rather than theory based on the   foundation of numerical science, <i>any attempt at conclusion...you guessed it...cannot be conclusive.</i>So, the social sciences must consult the hard sciences, otherwise they risk squandering countless years of talented theorists' work; <i>the discipline's executive functions are cut off from it's increasingly inaccessible (and increasingly powerful) knowledge base.</i> --Such a talented, powerful Thoroughbred of a Science, that still wanders without a head for technical direction.</span></p>
  `;
  var blogcite1 = `
  <p class="footnotes">1. 
  <a href="http://www.journals.uchicago.edu/doi/abs/10.1086/226550"   target="_blank"> http://www.journals.uchicago.edu/doi/abs/10.1086/226550</a>
  
  </p>
  <p> 
  2. 
  <a href="https://www.stats.ox.ac.uk/~snijders/siena/"  target="_blank"> https://www.stats.ox.ac.uk/~snijders/siena/</a>
  <br />
  <p class="footnotes">3. The Theoretical Core of the New Institutionalism, Ellen M. Immergut: Politics &amp; Society, Vol. 26, Issue I, pp. 5-34 
  <a href="http://journals.sagepub.com/doi/abs/10.1177/0032329298026001002?journalCode=pasa
  "  target="_blank">http://journals.sagepub.com/doi/abs/10.1177/0032329298026001002?journalCode=pasa
  </a>
  </p>
  ` ;
  */
  var url = [{
    id: '14',
    did: '06-30-18',
    date: 'June 30-July 1, 2018<br />Weekend ',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'The Space Powers that Be:<br />When Boeing issues a Ticket to the Moon',
    post: blogpost14,
    blogcite: blogcite14
  }, {
    id: '13',
    did: '06-29-18',
    date: 'July 29, 2018',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now',
    title: 'A.I. &amp; Work, Part II<br />Learning to Learn alongside a Cheerful Automoton Work-Partner',
    post: blogpost13,
    blogcite: blogcite13
  }, {
    id: '12',

    did: '06-28-18',
    date: 'June 28, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now',
    title: 'A.I. &amp; Work, Part I<br />Fighting Obsessive Compulsive Quantitative Optimization Disorder and the Slide into a Weberian Iron Shell',

    post: blogpost12,
    blogcite: blogcite12
  }, {
    id: '11',

    did: '06-27-18',
    date: 'June 27, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Apple: You are our Tech Leader!',

    post: blogpost11,
    blogcite: blogcite11
  }, {
    id: '10',
    did: '06-26-18',
    date: 'June 26, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'T-Nation Makes the Case: Sprint Merger takes on the Senate',

    post: blogpost10,
    blogcite: blogcite10
  }, {
    id: '9',
    did: '06-25-18',
    date: 'June 25, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now',
    title: 'Modern Prometheus, Part III: <br />Accelerating Evolution of Neural Networks &agrave; la Nvidia GPU',
    post: blogpost9,
    blogcite: blogcite9
  }, {
    id: '8',
    did: '06-23-18',
    date: 'June 23-24, 2018<br />Weekend',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now',
    title: 'Modern Prometheus, Part II: <br />Broadening Evolution of Deep Learning Species &agrave; la Neural Network',
    post: blogpost8,
    blogcite: blogcite8
  }, {
    id: '7',
    did: '06-22-18',
    date: 'June 22, 2018',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now',
    title: 'Modern Prometheus, Part I.<br />Made from 8 billion transistors and 1,000 Cuda Cores:<br /> Today\'s Irreplaceable NVidia GPU',
    post: blogpost7,
    blogcite: blogcite7
  }, {
    id: '6',
    did: '06-21-18',
    date: 'June 21, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: '"Taxation Without Representation is Tyranny!"<br /><br />-- James Otis, 1776',
    post: blogpost6,
    blogcite: blogcite6
  }, {
    id: '5',
    did: '06-20-18',
    date: 'June 20, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'A Healthy Internet is a Fast, Cooperative Internet: <br />Net Neutrality Protections move to State-Level Legislation',
    post: blogpost5,
    blogcite: blogcite5
  }, {
    id: '4',
    did: '06-19-18',
    date: 'June 19, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Musing Blockchain',
    title: 'Rise of the Embattled 4th Estate',
    post: blogpost4,
    blogcite: blogcite4
  }, {
    id: '3',
    did: '06-18-18',
    date: 'June 18, 2018',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now',
    title: 'Machine Learning, Democratized:<br />Part II: Deep Learning\'s Origin Story',
    post: blogpost3,
    blogcite: blogcite3
  }, {
    id: '2',
    did: '06-16-18',
    date: 'June 16-17, 2018<br />Weekend',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Machine Learning, Democratized<br />Part I: Google\'s ML Kit',
    post: blogpost2,
    blogcite: blogcite2
    /*
     { 
     id:'1',
     did:'06-15-18',
     date:'June 15, 2018',
     author:'by Thomas Maestas',
     cat3:'Musing Blockchain',
     title:' The Spectre of a Headless Horseman:<br /> Why  Sociologists <i> are<span class="new">n\'t </span></i> Key Players in Data Analysis within the Domain of Blockchain Technologies?<br /><span class="new">A Re-Do of my <s >Feb 10,2018</s> post</span>',
     post:blogpost1,
    blogcite:blogcite1
    }*/

  }];

  for (i = 0; i < url.length; i++) {
    var cat = ' \n    <div id="' + url[i].did + '" class="blogDiv"> \n    <hr />  \n    <a href="#top"><button>Top</button></a>  \n    <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n    <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5> \n    <p id="author" class="  author">' + url[i].author + '</p>   \n    <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n    <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n    <br />\n    <div id="post">' + url[i].post + '\n    </div>\n    <div id="blogcite">' + url[i].blogcite + '\n    </div>';
    document.getElementById("paragraph-june").innerHTML += cat;
  }

  var i;
  for (i = 0; i < url.length; i++) {
    var catMod = '\n  <div id="mod_' + url[i].did + '" class="blogDivMod"> \n  <hr />  \n  <a href="#top-mod"><button>Top</button></a>   \n  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n  <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5>  \n  <p id="author" class="  author">' + url[i].author + '</p>   \n  <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n  <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n  <br />\n  <div id="post">' + url[i].post + '</div>\n  </div>\n <div id="blogcite">' + url[i].blogcite + '\n </div>';
    document.getElementById("paragraph-june-mod").innerHTML += catMod;
  };

  console.log('blogger-june');
  // console.log(angular.toJson(url));
};
bloggerJune();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//Top Vars Above

var bloggerMay = function bloggerMay() {

  var blogpost13 = '\n\n<p class="firstparagraph">Winning and losing millions via a telephone is very James Bond-esque, but the (re)newed legalisation of sports betting merely mimics national models already in long-time use in Europe and elsewhere.<sup>1</sup> In the U.S., mobile carriers and makers will be asked of a lot more when money is on the line ... which implicitly brings up blockchain solutions. Here\'s one example:\n</p>\n<p class="quote"> WinFlow, a sports betting platform that uses ledger technology to offer transparent betting and products, has decided to run its platform, a decentralized application on the Hedera Hashgraph Network.\n\nWinFlow has been created with the intentions of solving three main industry related problems, which are the lack of accountability and transparency, meaningful rewards programs or compensation to losing players and product innovation.<sup>2</sup>\n</p>\n<p>\n So where are we on Mobile solutions now that the stakes have been exponentially raised...Security, Authentication, Instantaneous Speed?  No need to look, the tech doesn\'t exist!</p>\n<p class="quote">\u201CThere is currently no active, fully-functional sportsbook using distributed ledger or blockchain technology, let alone any operator in the sports betting industry at large that redistributes almost all of their profits right back to the players. <sup> 2 </sup> </p>\n<p>What a coincidence that this month, Hedera\'s Hashgraph <i>public</i> ledger was released, the European Union rewrote their internet data policies in General Data Privacy Regulation (GDPR covered in more depth in <a href="#18-04-19">April 19th</a> and <a href="#18-04-16"> 16th posts</a>. However the occurrence of all three events will definitely trigger some technological hot-swapping! From the same example,\n</p>\n<p class="quote">\nthe [WinFlow] project, which is squarely focused on Europe due to the Federal ban on sports betting in the US, will raise money through private placements while it continues to work on developing the betting platform.<br /><br /> \nWinFlow, which claims to have a unique profit sharing model, said breakthroughs in technology and new benefits for players, including unprecedented rewards, security, and transparency, will allow it to disrupt the incumbents in a multi-billion dollar market.\n</p>\n<p>So, the needs for mobile sports betting all depend on speed, for which the newly unveiled Hedera hashgraph specializes <sup>2 </sup> (covered <a href="#may-18-05-02">May 2-5 four-part series</a>). Looks good from afar, let\'s see now that anyone can kick the tires of that thing called DAG!\n</p>\n';
  var blogcite13 = '\n <p class="cite">1. <a href="https://www.theguardian.com/business/nils-pratley-on-finance/2018/may/14/uk-bookies-beware-us-will-look-after-its-own-in-betting-revolution" target="_blank">https://www.theguardian.com/business/nils-pratley-on-finance/2018/may/14/uk-bookies-beware-us-will-look-after-its-own-in-betting-revolution</a></p>\n  <p class="cite">2. <a href="https://bitcoinexchangeguide.com/hedera-hashgraph-dlt-will-power-winflow-profit-sharing-sportsbook/" target="_blank"> https://bitcoinexchangeguide.com/hedera-hashgraph-dlt-will-power-winflow-profit-sharing-sportsbook/</a></p>\n  \n <p class="cite">3. <a href="https://www.forbes.com/sites/jeffkauflin/2018/03/13/hedera-hashgraph-thinks-it-can-one-up-bitcoin-and-ethereum-with-faster-transactions/#63d0806cabcb" target="_blank">https://www.forbes.com/sites/jeffkauflin/2018/03/13/hedera-hashgraph-thinks-it-can-one-up-bitcoin-and-ethereum-with-faster-transactions/#63d0806cabcb</a></p>\n <p class="cite">4. <a href="https://bitsonline.com/mance-harmon-hedera-hashgraph/" target="_blank">https://bitsonline.com/mance-harmon-hedera-hashgraph/</a></p>\n \n ';

  var blogpost12 = '<p class="firstparagraph">Justice Samuel A. Alito Jr. outlined the Supreme Court\'s Majority Opinion on overturning the federal prohibition on sports betting this week.<sup>1</sup> The primary <i>justification was an unconsitutional Federal authority over States\' rights</i>, in overturning the 1992 Professional and Amateur Sports Protection Act.  \n</p>\n<p class="quote">The Supreme Court struck down a 1992 federal law on Monday that effectively banned commercial sports betting in most states, opening the door to legalizing the estimated $150 billion in illegal wagers on professional and amateur sports that Americans make every year.<br /><br />\nThe decision seems certain to result in profound changes to the nation\u2019s relationship with sports wagering. Bettors will no longer be forced into the black market to use offshore wagering operations or illicit bookies.<i> Placing bets will be done on mobile devices, </i> fueled and endorsed by the lawmakers and sports officials who opposed it for so long. <sup>2</sup> \n</p>\n\n<p>And now, <i>the Vegas Strip</i> is but a mere icon\'s hop away from Candy Crush! Uh oh ....</p>\n';
  var blogcite12 = '<p class="cite">1. <a href="https://www.nytimes.com/2018/05/14/us/politics/supreme-court-sports-betting-new-jersey.html" target="_blank">https://www.nytimes.com/2018/05/14/us/politics/supreme-court-sports-betting-new-jersey.html</a></p>';

  var blogpost11 = '<p class="firstparagraph">Jargon is curiously ugly at first sight, but only with time does technical beauty reveal itself. I decided to make my first recipe with WebAssembly and JavaScript, (with yes, a third called <i>Emscripten</i> and no, my eyes aren\'t rolling) ... this waaas amazing, Wow! So I thought to write about the nuts and bolts of it all. </p>\n<p>So,   what exactly <i> is </i> WebAssembly, specifically?? It\'s this:<span style="color:purple"> (And, for the jargon-wary, skip this paragraph </span> :-)</p>\n<p class="cite">\n$ emcc -s WASM=1 -o fib.js fib.c </p><p class="green">\n<i>emcc</i> executes the <i>Emscripten</i> compiler<br />\n<i>-s</i> ensures that Emscripten outputs WebAssembly<br />\n<i>-o fib.js</i> names the output as fib.js<br />\n<i>fib.c</i> And, finally this is the input file\'s name!<br />\n<p>\nThis first part? It\'s like staring into a solar eclipse (I confess I glanced at one recently (but didn\'t we all, secretly?)) ... <br />\nAnyway, this is a simple, classic example using Fibonacci sequence<sup>2</sup> for familiarity. Here\'s the input:<br />\n</p>\n<pre>\nfib.c:\n#include <emscripten.h>\n\nEMSCRIPTEN_KEEPALIVE\nint fib(int n) {\n  int i, , a = 0, b = 1;\n  for  (i = 0; i < n; i++) {\n    t = a + b;\n    a = b;\n    b = t;\n  }\n  return b;\n}</pre> \n<p>\nSo, given the integer absence in JavaScript mentioned in the <a href="#18-05-10">May 10th post</a>, The Fibonacci integer sequence example illustrates the   relationship between WebAssembly and Javascript. Unlike JavaScript\'s lack of integers, WebAssembly\'s math kit is nothing short of luxury! \n</p>  \n<script src="fib.js"></script>\n<script> <span class="green">This part is JavaScript carrying out the instructions receieved from Emscripten:</span>\n  Module.onRuntimeInitialized = _ => {\n    const fib = Module.cwrap(\'fib\', \'number\', [\'number\']);\n    console.log(fib(12));\n  };\n  <script>\n</p>\n<p>So what happened back there is that <i>Emscripten outputs <strong>two </strong>files, one JavaScript (fib.js) and one WebAssembly (fib.wasm)</i>.. Simple enough, and that\'s why massive, intractable application programs like AutoCAD can now be easily deployed on any platform, fast and high-function on our mobile phones. True it is, <i>after first glance, all  this jargon\'s inner beauty shines, a real harbinger of great apps to come!</p>\n\n';
  var blogcite11 = '<p class="cite">1. <a href="https://medium.com/mozilla-tech/why-webassembly-is-a-game-changer-for-the-web-and-a-source-of-pride-for-mozilla-and-firefox-dda80e4c43cb" target="_blank"> https://medium.com/mozilla-tech/why-webassembly-is-a-game-changer-for-the-web-and-a-source-of-pride-for-mozilla-and-firefox-dda80e4c43cb</a></p>\n<p class="cite">2. <a href="https://webassembly.org" target="_blank">https://webassembly.org</a></p>\n<p class="cite quote green ">2. Note on example Fibonacci Sequence: (Wikipaedia Definition):\n<br />\nIn mathematics, an integer sequence is a sequence (i.e., an ordered list) of integers. \nAn integer sequence may be specified explicitly by giving a formula for its nth term, or implicitly by giving a relationship between its terms. For example, the sequence 0, 1, 1, 2, 3, 5, 8, 13, \u2026 <i>(the Fibonacci sequence) is formed by starting with 0 and 1 and then adding any two consecutive terms to obtain the next one: an implicit description.</i>  The sequence 0, 3, 8, 15, \u2026 is formed according to the formula n2 \u2212 1 for the nth term: an explicit definition.</p> ';

  var blogpost10 = '<p class="firstparagraph">WebAssembly,  about a year old, provides a new level of performance to mobile apps and the browser generally, but is it safe? It\'s actually safer than traditional plug-ins for browsers. Here\'s a quick recap from yesterday\'s post on WebAssembly:</p>\n<p class="quote">WebAssembly is one of the biggest advances to the Web Platform over the past decade.\n\nThis new standard will enable amazing video games and high-performance web apps for things like computer-aided design, video and image editing, and scientific visualization. Over time, many existing productivity apps (e.g. email, social networks, word processing) and JavaScript frameworks will likely use WebAssembly to significantly reduce load times while simultaneously improving performance while running. Unlike other approaches that have required plug-ins to achieve near-native performance in the browser, WebAssembly runs entirely within the Web Platform. This means that developers can integrate WebAssembly libraries for CPU-intensive calculations (e.g. compression, face detection, physics) into existing web apps that use JavaScript for less intensive work.<sup>1</sup>\n</p><p>\nBrowsers, <i>despite HTTPS encryption, are growing in security weaknesses</i> with more territory, responsibilities, and new API relationships. However, along with WebAssembly\'s solutions for CPU-intensive browser operations (like AutoCAD example in the previous post), WebAssembly also offers unique security solutions:  \n</p>\n<p class="quote">WebAssembly describes a memory-safe, sandboxed execution environment that may even be implemented inside existing JavaScript virtual machines. When embedded in the web, WebAssembly will enforce the same-origin and permissions security policies of the browser.<sup>2.</sup></p>\n<p>\n This architecture   signifies eventual compatibility with the existing Block Chain apps like MetaMask that use a browser plug-in to set up an API between, for example, the Ethereum blockchain and Web access. So, with WebAssembly\'s great potential with JavaScript, is it a safer, more secure on-line world? No, but <i>there are safer corners </i> ... and certainly a safer niche for drawing space!</p>\n\n';
  var blogcite10 = '<p class="cite">1. <a href="https://medium.com/mozilla-tech/why-webassembly-is-a-game-changer-for-the-web-and-a-source-of-pride-for-mozilla-and-firefox-dda80e4c43cb" target="_blank"> https://medium.com/mozilla-tech/why-webassembly-is-a-game-changer-for-the-web-and-a-source-of-pride-for-mozilla-and-firefox-dda80e4c43cb</a></p>\n<p class="cite">2. <a href="https://webassembly.org" target="_blank">https://webassembly.org</a></p>';

  var blogpost9 = '<p class="firstparagraph" id="05-10-18">AutoCAD, the first name in 3-D engineering, has stepped into a new world in the past month. Recent, unprecedented mobile app advances allow more CPU-intensive laptop applications to hop to the phone with equal interactivity and near-equal functionality. Thanks to third-party languages, JavaScript, the browser\'s language, is broadening in powers: And this is nothing short of exhilarating with just enough of a touch of danger.\n</p><p>AutoCAD\'s recent advances in their mobile platform exemplifies this trend.<sup>1</sup> AutoCAD, the ancient, foundational, ultra-powerful, ever-modernizing programming codebase--celebrates 35 years old, and predates the web! AutoCAD by AutoDesk has historically had difficulty implementing its codebase into mobile platforms. So, their app presence suffered because it had been highly watered down, and suddenly competing with thousands of other 3-D engineering apps...Until now. </p><p>\n\n<p class="quote">Yesterday [March 2, 2018] was a big day for the AutoCAD product. A multi-year engineering project \u2013 started in the AutoCAD team way back when I was part of it \u2013 culminated in its first deliverables getting into the hands (or, in this case, browsers) of customers.  The AutoCAD team has been working on a project codenamed \u201CFabric\u201D for the last several years. It\'s has been a huge amount of work \u2013 something I\u2019ll hopefully get into in a future blog post \u2013 but it\u2019s finally bearing tangible fruit.  In broad strokes the work was to take the core of AutoCAD and make it cross-platform. </p><p class="quote">You might consider the Big Split \u2013 work that was done ostensibly to build AutoCAD for Mac but resulted in a Core Engine that became the mechanism through which developers could run custom code in the cloud via AutoCAD I/O (now part of Forge\u2019s Design Automation API) \u2013 to be the first phase of this effort. At the very least Fabric stood on the shoulders of the Big Split.<sup>2.</sup></p><p>\n\nIn short, AutoDesk\'s latest browser-based AutoCAD Web App and Mobile App have suddenly advanced a quantum step. For example, the mobile app provides nearly all of the full features (not including 3-D rendering), like swapping .DWG files from cloud services using a full mobile interface.  </p>\n<p>\nNot just for AutoCAD, but all apps improve, because <i>third-party languages like WebAssembly can "broker" the API conversation between browser and the operating system\'s machine code for certain tasks</i>.<sup>3</sup> Exceptionally interesting, now WebAssembly performs real-time C++ transpiling allowing any browser to communicate in near-to direct machine-code for certain tasks. \nWebAssembly (Wasm) is a "binary instruction format for a stack-based virtual machine ... designed as a portable target for compilation of high-level languages like C/C++/Rust, enabling deployment on the web for client and server applications."<sup>3</sup> In other words, <i>WebAssembly is the middle-person translating between JavaScript\'s V8 Engine and a device\'s Operating System</i>. Here\'s  a clearer explanation using the AutoCAD example:</p>\n<p class="quote">[AutoCAD\'s] Fabric has done away with #ifdefs, forcing any platform-specific code into a PAL (Platform Abstraction Layer) per targeted platform. And Fabric is able to target more than just Windows and OS X. Some of the main targets were the established mobile platforms (more on that down the line), but one major effort was to target the web platform with the AutoCAD codebase.\nYes, you read that right\u2026 yesterday\u2019s update to AutoCAD Web now runs the same core code as standard AutoCAD, but in a browser. A major part of AutoCAD\u2019s C++ codebase gets run through Emscripten (at least that\u2019s my understanding \u2013 I\u2019ll correct any details I get wrong) to be transpiled into WebAssembly. \n<p>\n<p>So, it looks like our <i>wild, untamed language, JavaScript, has matured to the big-leagues </i> by teaming up with WebAssembly ... After all, JavaScript, among all the languages, was born without a mind for math... literally. It\'s core math library conducts all operations in 64-bit floating point, in the absence of integers! So, this entails occasional anomalies: For example, .1 + .2 does not equal .3! (Try it with the JavaScript calculator below ... ) And so, great things await this partnership between WebAssembly and JavaScript, but every marriage is different... one partner may always need help cooking, and another may always need help with the math, but that\'s what Marriage is for!</p>\n\n\n \n';
  var blogcite9 = ' <p class="cite">1. <a href="https://www.autodesk.com/products/autocad/features" target="_blank"> https://www.autodesk.com/products/autocad/features</a></p>\n<p class="cite">2. <a href="http://through-the-interface.typepad.com/through_the_interface/2018/03/the-future-of-autocad.html" target="_blank"> http://through-the-interface.typepad.com/through_the_interface/2018/03/the-future-of-autocad.html</a></p>\n<p class="cite">3. <a href="https://webassembly.org">https://webassembly.org</a></p>';

  var blogpost8 = '<p class="firstparagraph">For all the fanfare of in-browser apps, i.e. Progressive Web Apps, the picture isn\'t as rosy as appears. After all, we are still talking about the browser window, right? Many of the <i>browser-based</i> apps depend on plugin extensions. This is sort of the Achilles Heel recently exposed while, "over two months, seven [Chrome] extensions stole credentials and installed currency miners."<sup>1</sup> The article cites 100,000 computers that may have lost passwords, and other private data--ouch!\n  </p>\n  <p class="quote">\n  The scam was active since at least March with seven malicious extensions known so far, researchers with security firm Radware reported Thursday. Google\'s security team removed five of the extensions on its own and removed two more after Radware reported them. In all, the malicious add-ons infected more than 100,000 users, at least one inside a "well-protected network" of an unnamed global manufacturing firm, Radware said.\n  </p>\n  <p>As we see the app-in-the-browser taking on more operational, networking, functional roles (the work previously reserved to native Apple/Google/Microsoft app stores), unknown, unconceived threats are increasingly possible. That\'s another reason why Tech is always an edge-of-your-seat spectacle!\n\n  ';
  var blogcite8 = '  <p class="cite">1. <a href="https://arstechnica.com/information-technology/2018/05/malicious-chrome-extensions-infect-more-than-100000-users-again/">https://arstechnica.com/information-technology/2018/05/malicious-chrome-extensions-infect-more-than-100000-users-again/</a></p>\n  <p class="cite">1. <a href="https://blog.radware.com/security/2018/05/nigelthorn-malware-abuses-chrome-extensions/">https://blog.radware.com/security/2018/05/nigelthorn-malware-abuses-chrome-extensions/</a></p>';

  var blogpost7 = '<p class="firstparagraph">Google I/0\'s 2018 revelations also included a focus on the <i>Progressive Web App (PWA)</i>. My <a href="#18-04-11">April 11th</a> and <a href="#18-04-05">April 5th</a> posts introduce a new approach to traditional mobile apps, using new JavaScript techniques including a "manifest" and "service workers" files that instruct the mobile phone what to cache and other specs. Google has pushed use of these PWAs since 2015 with Google Chrome\'s efforts to steer app development toward device-neutral, ultra-fast, and encryption advantages of the Hyper Text Transfer Protocol (HTTP), i.e. the browser. </p>\n  <p class="quote">\n  On the first day of Google I/O 2018 event, Tal Oppenheimer, Chief Product Manager (Chrome) at Google, shared that websites like EconomicTimes.com, Instagram and Starbucks are seeing "incredible results" in user retention and time spent, while using Progressive Web Apps (PWAs) technology.\n<br />\nPWAs are websites that take advantage of modern web platform Application Programming Interfaces (APIs) to build experiences like working offline, sending push notifications and getting added directly to .. \n  </p>\n  <p>Web apps use the browser for viewing and security, while the app\'s "manifest" uses <i>service workers</i> to manage data, networking, caching optimized for off-line ability and other actions that were formally reserved for "Native" apps downloaded from Apple or  Google Play stores. So what the flip? It does mean better speed and utility, features and appearance optimized to device, whether mobile, laptop or tablet, all without sacrificing the personalized, off-line features of "native" app store apps? ... it\'s the best of both worlds! </p>\n  \n\n  ';
  var blogcite7 = '  <p class="cite"><a href="https://www.cnet.com/news/5-best-things-from-google-io-2018/" target="_blank" >https://www.cnet.com/news/5-best-things-from-google-io-2018/</a></p>\n  <p class="cite"><a href="economictimes.indiatimes.com/articleshow/64089365.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst" target="_blank" >economictimes.indiatimes.com/articleshow/64089365.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst</a></p>';

  var blogpost6 = '\n  <p class="firstparagraph">O.K. Google, I\'ll pass on the lemonade, and ... why don\'t you take the afternoon off, I\'m going to be independent for a while, "again". Alas, we are getting some interesting, if not slightly weird, features from this week\'s Google I/O 2018 Developer Conference.<sup>1</sup>  So, wonderful news! I\'m so tired from picking up my phone to order my take-out, now my Google Assistant can just do all that hard work for me!\n  </p><p>This week\'s revelations from Google\'s I/0 2018 offer A.I.-focused new hardware features, yet A.I. stole the show. The better integration of Google\'s assistant <i>with contacts and calling</i> is eyebrow-raising:</p>\n  <p class="quote">The demo is part of what Google calls an "experiment" it plans to launch this summer. With Duplex, a "small" number of people will be able to book restaurant reservations and hair appointments and to check holiday hours, stuff you\'d normally do over the phone. All of that back and forth happens on the back end -- between Google Assistant and, say, the restaurant. You won\'t even hear the conversation taking place. It\'ll come from an unspecified phone number, not your own number.<sup>1</sup></p>\n  <p>The feature raises the question of advantage over Siri and Alexa... Although access to the Google-minutiae of our personal information (data thankfully we are now more empowered to download and even delete) begs the question of individuals\' machines that talk directly to the restaurant\'s voice-activated receptionist (perhaps a french accent?) machine. I\'m all for efficiency and better organization, but I\'d hardly imagine being too busy to place a call myself! \n  </p>\n\n \n  ';
  var blogcite6 = '  <p>\n  also just mean different assistants for different parts of our day!</p>\n  <p class="cite">1. <a href="https://www.cnet.com/features/google-assistant-duplex-at-io-could-become-the-most-lifelike-ai-voice-assistant-yet/" target="_blank">https://www.cnet.com/features/google-assistant-duplex-at-io-could-become-the-most-lifelike-ai-voice-assistant-yet/ </a></p>\n <p class="cite">2. <a href="https://www.techradar.com/news/google-io-2018" target="_blank">https://www.techradar.com/news/google-io-2018</a></p>';

  var blogpost5 = '<p class="firstparagraph">Challenges to the Hashgraph range from mathematical properties of acyclic graphs (think of the 7 Bridges of Koenigsburg, the riddle of crossing town while crossing each bridge exactly once) to the social implications of how to "distribute" data and <i>who actually holds onto the keys at the end of the day.  </i>\n  </p>\n  <p class="quote">While GridAgents\u2122 and in general multi-agent systems (MAS) offered strong models for representing complex and dynamic real-world environments, we were missing something very important that is becoming available today with blockchain and distributed ledger technologies. The missing links include (1) consensus, (2) immutability and (3) ability to operate in trustless environments. Dr. Maxim Orlovsky states:\n\n  \u201CBlockchain will give to Multi-Agent AI\u200A\u2014\u200Athe same thing that written language gave to humans\u200A\u2014\u200AMeans of Cognitive Evolution\u201D\n  \n  Maxim also states that what blockchain brings to multi-agent systems is consensus algorithms for interpreting facts in a trustless multi-agent system. Consensus allows for nodes in the system to be in unanimous agreement on the state of things. Additionally, blockchain creates a permanent memory (immutability) making the vision of multi-agent systems much more complete. I call the addition of blockchain/DLTs to multi-agents system, AI 3.0. This AI 3.0 combines the benefits of over 30 years of research on AI, machine learning, and multi-agent systems with blockchain and DLT technology to finally enable the emerging industry 4.0 where billions of devices will be connected to the internet and will need to coordinate in real-time at the edge of the network.<sup>3</sup> </p>\n\n\n\n  ';
  var blogcite5 = '  <p class="cite">1.  <a href="      https://science.house.gov/legislation/hearings/subcommittee-oversight-and-subcommittee-research-and-technology-hearing-0" target="_blank">   https://science.house.gov/legislation/hearings/subcommittee-oversight-and-subcommittee-research-and-technology-hearing-0</a></p>  \n  <p class="cite">2.  <a href="    https://venturebeat.com/2018/03/13/hedera-hashgraph-and-mz-unveil-next-generation-blockchain-alternative/" target="_blank">    https://venturebeat.com/2018/03/13/hedera-hashgraph-and-mz-unveil-next-generation-blockchain-alternative/</a></p>  \n <p class="cite">3.  <a href=" https://medium.com/hashgraph/ai-3-0-why-hashgraph-and-how-it-will-revolutionize-blockchain-and-ai-86a6ef715c9f" target="_blank">https://medium.com/hashgraph/ai-3-0-why-hashgraph-and-how-it-will-revolutionize-blockchain-and-ai-86a6ef715c9f</a></p> ';

  var blogpost4 = '<p class="firstparagraph">Blockchain challenges, like any field, start with social acceptance on one end, and technical acceptance on the other. The latter is a little more important, but the former usually runs the show because <i>it, financially speaking, <strong> is</strong> the show</i>. I mentioned the curve\n  </p>\n  <p class="quote">First, blockchain benefits from incumbency and familiarity. Why risk replacing it with a less well-tested technology whose vulnerabilities haven\u2019t all been identified? Also, while it can retain as much transactional data as needed, hashgraph typically doesn\u2019t contain as much transactional history as the Bitcoin blockchain does. For many applications, hashgraph would only keep track of users\u2019 latest positive wallet balances.\n\n  Second, the DAG system doesn\u2019t involve the computation-heavy \u201Cproof of work\u201D effort to verify transactions that some blockchains, such as Bitcoin blockchain, require. Having several miners ratify and vote to accept a transaction lends blockchain what some say is a greater degree of security that the ledger contains a single version of the truth than under DAG-based systems. \n  <br />\n  <br />\n  IOTA, the best-known DAG, is already the No. 10 largest cryptocurrency, with $6.6 billion in market capitalization, according to CoinMarketCap. \n  \n  \u201CEven first-year computer science students here at MIT laugh at the code when they see it,\u201D Tadge Dryja, a research scientist at MIT who is working to scale the Bitcoin network, said in an email. \n  \n  The hack MIT came up with \u201Ccan\u2019t happen in practice,\u201D Serguei Popov, one of the founders of IOTA, said in a phone interview.\n  \n  \nHashgraph uses DAG differently: It uses it to record different aspects of transactions than IOTA, and has different security characteristics, according to hashgraph developers.\n<sup>1</sup>\n   \n\n\n\n  ';
  var blogcite4 = '  </p>\n  <p class="cite">1. CoinDesk Source URL being researched. <a href="#" target="_blank">__</a></p>';

  var blogpost3 = '<p class="firstparagraph">The lessons learned from last week\'s Romaine Lettuce Crisis has brought the <i>supply chain management</i> topic to the nation\'s dinner-table conversations. \n  (Quick recap in my <a href="#18-04-25">April 25th post</a>). The big issue is uninterrupted, comprehensive and permissioned data access to those ... mystery Romaine lettuce heads. What could hashgraph tech offer? Everything from real-time temperature sensors and ID\'s to cross-institution, cross-border accuracy from source to supply targets. And, next week Congress will also be talking about it:  \n  </p>\n  <p class="quote">\n  Lawmakers in the U.S. Congress are set to hold a hearing on blockchain tech\'s use in global supply chains next week.\n\nTwo subcommittees of the U.S. House Committee on Science, Space and Technology - for Research and Technology, and Oversight - will meet on May 8, a newly published notice reveals. The hearing is entitled "Leveraging Blockchain Technology to Improve Supply Chain Management and Combat Counterfeit Goods."<sup>1</sup>\n</p>\n<p>Here, the Science, Space, & Technology Committee <sup>2</sup> of Congress will be meeting This Tuesday, May 8th, hearing from Witnesses from Maersk (head of global trade digitization), UPS (global customs brokerage staff), and of course the good ol\' Dept. of Homeland Security, and doubtless an international<sup>3</sup> platoon of lawyers! </p>\n\n  \n  ';
  var blogcite3 = ' <p class="cite">1. <a href="https://www.coindesk.com/us-lawmakers-hear-case-blockchain-supply-chain/" target="_blank">https://www.coindesk.com/us-lawmakers-hear-case-blockchain-supply-chain/</a></p>\n  <p class="cite">2. <a href="https://science.house.gov/legislation/hearings/subcommittee-oversight-and-subcommittee-research-and-technology-hearing-0" target="_blank">https://science.house.gov/legislation/hearings/subcommittee-oversight-and-subcommittee-research-and-technology-hearing-0</a></p> \n   <p class="cite">3. <a href="https://www.mckinsey.com/industries/financial-services/our-insights/global-payments-2017-amid-rapid-change-an-upward-trajectory">https://www.mckinsey.com/industries/financial-services/our-insights/global-payments-2017-amid-rapid-change-an-upward-trajectory</a></p> ';

  var blogpost2 = '<p class="firstparagraph">The most polished, cryptographically stable leader of  <i>third generation</i> blockchain technology is formally released this month, and anticipation is anything but calm. (Some background posts help contextualize this 2-part series on Hashgraph  technology and potential for capturing per-micro-second, real-time financial needs of the globalizing economy: <a href="#18-04-18"> April 18</a> and <a href="#18-04-02">April 2</a>.) The formal release is on May 9th, but this May 1st press release caught my attention as we see a glimpse of this technology on a public* ledger: \n</p>\n<p class="quote"> CULedger and Hedera today announced a partnership whereby CULedger will use Hedera\'s hashgraph platform and public ledger to build a system for cross-border payments. CULedger has already been using the private ledger version of hashgraph, offered by Swirlds, for general purpose, permissioned ledger use.<sup>1</sup> </p>\n<p>The big news is Hedera\'s "public" blockchain ledger service that moves closer to popular usage with it\'s unique <i>directed acyclic graphs</i>, whose speed increases with scale.  Until recently, Blockchain tech has been hamstrung in the domain of micro-transactions, so now that the barrier has been crossed, how many sectors of life will be enhanced? All. But not yet. Once 5G technology (100 times faster, 100 times the capacity of 4G) is rolled out, then we hit the big leagues.</p> \n<p class="quote">A group of U.S. credit unions looking to pool resources considered the Bitcoin and Ethereum blockchains to track their business, but wound up selecting something else entirely: hashgraph.</p>\n<p class="quote">Currently, cross-border payments are painful for all parties involved," said Rick Cranston, COO of CULedger. "They take time, they\'re expensive, and there is limited visibility into the transaction. Hashgraph is fast and it provides visibility between the two parties at a significantly lower cost. It also eliminates concerns regarding fraud and default, since transactions are recorded immutably on the public ledger, and manual processes, since transactions are automated via smart contracts.<sup>1</sup></p>\n<p> ...to be continued...</p> \n\n';
  var blogcite2 = '<p class="cite"><a href="https://www.prnewswire.com/news-releases/culedger-selects-hedera-hashgraph-to-build-global-ledger-for-cross-border-payments-300639874.html" target="_blank">https://www.prnewswire.com/news-releases/culedger-selects-hedera-hashgraph-to-build-global-ledger-for-cross-border-payments-300639874.html</a></p>\n<p class="cite"><a href="https://venturebeat.com/2018/03/13/hedera-hashgraph-and-mz-unveil-next-generation-blockchain-alternative/" target="_blank">https://venturebeat.com/2018/03/13/hedera-hashgraph-and-mz-unveil-next-generation-blockchain-alternative/</a></p>\n\n<p class="cite"><a href="https://medium.com/hashgraph/ai-3-0-why-hashgraph-and-how-it-will-revolutionize-blockchain-and-ai-86a6ef715c9f" target="_blank">https://medium.com/hashgraph/ai-3-0-why-hashgraph-and-how-it-will-revolutionize-blockchain-and-ai-86a6ef715c9f</a></p>';

  var blogpost1 = '<p class="firstparagraph">May. Spring. Exercise. All wonderful things, reacquainting with Nature--if we can and <i>if we let <strong>Tech</strong> let ourselves outside</i>: Let\'s face it, screens  don\'t mix well with the sun! <</p>\n<p>Recently  though,Tech made a real comeback in the Mother Nature department, thanks to the 2016 Pok&eacute;mon rage that drew crowds out in droves and into the streets and haphazard places over countless miles walked.  Technology, at long last assumes a new role:<i> an ever dedicated activity coach</i> According to <i>Behavioralist psychology</i>, the actions frame the state of mind, so it only makes perfect sense to set our tech devices to where we want to go!</p>\n<p>But <i>some</i> of the benefits of exercise ...\n</p>\n<p class="quote"> \n Neurotrophins, endogenous proteins that support brain plasticity likely mediate the beneficial effects of exercise on the brain. In clinical studies, exercise increases brain volume in areas implicated in executive processing, improves cognition in children with cerebral palsy and enhances phonemic skill in school children with reading difficulty. Studies examining the intensity of exercise required to optimize neurotrophins suggest that moderation is important. Sustained increases in neurotrophin levels occur with prolonged low intensity exercise, while higher intensity exercise, in a rat model of brain injury, elevates the stress hormone, corticosterone.<sup>1</sup> \n </p> <p>\n ... more on this later ...</p>\n\n';
  var blogcite1 = '<p class="cite"><a href="https://www.tandfonline.com/doi/abs/10.1080/17518420801997007" target="_blank">https://www.tandfonline.com/doi/abs/10.1080/17518420801997007</a></p> ';

  var url = [{
    id: '13',
    did: 'may-18-05-15',
    date: 'May 15, 2018',
    author: 'by Thomas Maestas, MA',
    cat3: 'Musing Blockchain',
    title: 'Betting on the Mobile Blockchain <br />Part II:  Betting on the Hedera Hashgraph Distributed Ledger',
    post: blogpost13,
    blogcite: blogcite13
  }, {
    id: '12',
    did: 'may-18-05-14',
    date: 'May 14, 2018',
    author: 'by Thomas Maestas, MA',
    cat3: 'Sociology Tomorrow!',
    title: 'Betting on Mobile Blockchain<br /> Part I: The Floodgates of Money have Opened!',
    post: blogpost12,
    blogcite: blogcite12
  }, {
    id: '11',
    did: 'may-18-05-12',
    date: 'May 12-13, 2018<br />Weekend',
    author: 'by Thomas Maestas, MA',
    cat3: 'Web Dev Affairs',
    title: 'The Wedding of JavaScript and WebAssembly: <br />Part III: The Nuts and Bolts of the Relationship',
    post: blogpost11,
    blogcite: blogcite11
  }, {
    id: '10',
    did: 'may-18-05-11',
    date: 'May 11, 2018',
    author: 'by Thomas Maestas, MA',
    cat3: 'Sociology Tomorrow!',
    title: 'The Wedding of JavaScript and WebAssembly: <br />Part II: How Secure and Safe is this New Mobile World?',
    post: blogpost10,
    blogcite: blogcite10
  }, {
    id: '9',
    did: 'may-18-05-10',
    date: 'May 10, 2018',
    author: 'by Thomas Maestas, MA',
    cat3: 'Web Dev Affairs',
    title: 'The Wedding of JavaScript and WebAssembly: <br />Part I: The Opening of a New Mobile App World',
    post: blogpost9,
    blogcite: blogcite9
  }, {
    id: '8',
    did: 'may-18-05-09',
    date: 'May 9, 2018',
    author: 'by Thomas Maestas, MA',
    cat3: 'Musing Blockchain',
    title: 'Google I/O 2018, Part III:<br /> The Browser\'s Achilles Heel Exposed',
    post: blogpost8,
    blogcite: blogcite8
  }, {
    id: '7',
    did: 'may-18-05-08',
    date: 'May 8, 2018',
    author: 'by Thomas Maestas, MA',
    cat3: 'Web Dev Affairs',
    title: 'Google I/O 2018, Part II:<br />   Progressive Web Apps (PWAs) Quietly Taking Over the Mobile App World',
    post: blogpost7,
    blogcite: blogcite7
  }, {
    id: '6',
    did: 'may-18-05-07',
    date: 'May 7, 2018',
    author: 'by Thomas Maestas, MA',
    cat3: 'Web Dev Affairs',
    title: 'Google I/O 2018,  Part I:<br />  Google Duplex, Do We Really Want to be as Lazy as Possible?',
    post: blogpost6,
    blogcite: blogcite6
  }, {
    id: '5',
    did: 'may-18-05-05',
    date: 'May 5-6, 2018<br />Weekend',
    author: 'by Thomas Maestas, MA',
    cat3: 'Musing Blockchain',
    title: '3rd Generation Blockchain: How Fast can the Blockchain Operate? Part IV: Potential Solutions for Blockchain Stability',
    post: blogpost5,
    blogcite: blogcite5
  }, {
    id: '4',
    did: 'may-18-05-04',
    date: 'May 4, 2018',
    author: 'by Thomas Maestas, MA',
    cat3: 'Musing Blockchain',
    title: '3rd Generation Blockchain: How Fast can the Blockchain Operate? Part III: : The Challenges for the Directed Acyclic Graph (DAG) with Ripple and  Iota Coin',
    post: blogpost4,
    blogcite: blogcite4
  }, {
    id: '3',
    did: 'may-18-05-03',
    date: 'May 3, 2018',
    author: 'by Thomas Maestas, MA',
    cat3: 'Musing Blockchain',
    title: '3rd Generation Blockchain: How fast can the blockchain operate? Part II: : Speed Needs of   Supply Chain Management',
    post: blogpost3,
    blogcite: blogcite3
  }, {
    id: '2',
    did: 'may-18-05-02',
    date: 'May 2, 2018',
    author: 'by Thomas Maestas, MA',
    cat3: 'Musing Blockchain',
    title: '3rd Generation Blockchain: How fast can the blockchain operate? nPart I: Speed needs of the Financial Sector',
    post: blogpost2,
    blogcite: blogcite2
  }, {
    id: '1',
    did: 'may-18-05-01',
    date: 'May 1, 2018',
    author: 'by Thomas Maestas, MA',
    cat3: 'Web Dev Affairs',
    title: 'Technology: The Coincidental and Unintended Bane of Exercise',
    post: blogpost1,
    blogcite: blogcite1
  }];

  for (i = 0; i < url.length; i++) {
    var cat = ' \n    <div id="' + url[i].did + '" class="blogDiv"> \n    <hr />  \n    <a href="#top"><button>Top</button></a>  \n    <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n    <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5> \n    <p id="author" class="  author">' + url[i].author + '</p>   \n    <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n    <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n    <br />\n    <div id="post">' + url[i].post + '\n    </div>\n    <div id="blogcite">' + url[i].blogcite + '\n    </div>';
    document.getElementById("paragraph-may").innerHTML += cat;
  }

  var i;
  for (i = 0; i < url.length; i++) {
    var catMod = '\n  <div id="' + url[i].did + '_mod" class="blogDivMod"> \n  <hr />  \n  <a href="#top-mod"><button>Top</button></a>   \n  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n  <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5>  \n  <p id="author" class="  author">' + url[i].author + '</p>   \n  <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n  <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n  <br />\n  <div id="post">' + url[i].post + '</div>\n  </div>\n <div id="blogcite">' + url[i].blogcite + '\n </div>';
    document.getElementById("paragraph-may-mod").innerHTML += catMod;
  }

  console.log('blogger-may');
  // console.log(angular.toJson(url));
};

bloggerMay();

/***/ })
/******/ ]);