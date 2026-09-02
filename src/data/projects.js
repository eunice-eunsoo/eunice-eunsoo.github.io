import newsLensGif from "../assets/newslens.gif";
import dailyPoll from "../assets/dailypoll.png";
import documentary from "../assets/documentary.jpg";
import stops from "../assets/traffic stops 0814.webp";
import lnl1 from "../assets/lnl/lnl1.png";
import lnl2 from "../assets/lnl/lnl2.png";
import lnl3 from "../assets/lnl/lnl3.png";
import lnl4 from "../assets/lnl/lnl4.png";
import rainTracker from "../assets/rainstory.png";
import encoreEvanston from "../assets/encoreevanston.png";
import co2029 from "../assets/co2029.png";
import bidWar from "../assets/bidwar.png";
import CCH from "../assets/CCH.png";
import midwayBlitz from "../assets/midwayblitz.png";
import holidayLights from "../assets/daily/holiday-lights.jpg";
import groveGallery from "../assets/daily/grove-gallery.jpeg";
import loveOnCampus from "../assets/daily/love-on-campus.jpg";
import fusionDance from "../assets/daily/fusion-dance.jpg";
import pythia from "../assets/daily/pythia.jpeg";
import theWeekly from "../assets/daily/the-weekly.jpg";
import federalDataRemoval from "../assets/daily/federal-data-removal.png";
import ovoFrito from "../assets/daily/ovo-frito.jpg";
import facultyRestaurants from "../assets/daily/faculty-restaurants.jpg";
import valentinesMatchmaking from "../assets/daily/valentines-matchmaking.jpg";
import michelleBirkett from "../assets/daily/michelle-birkett.jpeg";
import emilyAmesquita from "../assets/daily/emily-amesquita.jpeg";
import graffoniks from "../assets/daily/graffoniks.jpg";
import danceworks from "../assets/daily/danceworks.png";

export const featuredProjects = [
  {
    id: "featured-01",
    title: "Local News Lens",
    description:
      "Designed and built an R Shiny prototype at Northwestern's Knight Lab Studio to help local newsrooms identify geographic and demographic coverage gaps, in collaboration with Block Club Chicago; the project was named an SPJ Mark of Excellence Award finalist.",
    categories: ["Placeholder category"],
    role: "Developer",
    detailIntro: `The Local News Lens was built to help newsrooms identify coverage gaps using data rather than intuition. As part of a five-person team at Northwestern's Knight Lab Studio, I worked on creating a newsroom-facing dashboard that visualizes reporting patterns across neighborhoods, topics and demographic context.`,
    detailImages: [lnl1, lnl2, lnl3, lnl4],
    detailSections: [
      {
        heading: null,
        body: [
          "Grounded in an initial partnership with Block Club Chicago, we designed the tool to reflect Chicago's media landscape while remaining adaptable for newsrooms of any size. Drawing on research from UT Austin's Center for Media Engagement and Stanford's Department of Sociology, we structured the data around three core dimensions—article topic, geography and demographics—and built an interactive dashboard in RStudio using Shiny to reveal patterns of under- and overreporting over time.",
          "The final tool helps editors and reporters see how coverage decisions intersect with structural and financial constraints, supporting more equitable storytelling and data-informed editorial planning. The project strengthened my interest in using data visualization to make journalism more reflective, accountable and actionable.",
        ],
      },
    ],
    tools: ["Northwestern Knight Lab", "R Shiny", "Data cleaning", "AI"],
    image: newsLensGif,
    imageAlt: "Animated preview of the local news lens",
    featured: true,
    projectNumber: "01",
    link: "https://localnewslens.shinyapps.io/knight_lab/",
  },
  {
    id: "featured-02",
    title: "The Daily Northwestern Fall 2025 poll",
    description:
      "Led The Daily Northwestern's Fall 2025 campus poll, collecting student perspectives on issues both on and off campus, cleaning and analyzing the data, and shaping the results into a cohesive feature on how Northwestern students viewed their community and the issues affecting it.",
    categories: ["Placeholder category"],
    role: "Polling desk assistant",
    detailIntro:
      "The Fall 2025 Campus Poll set out to answer a simple question: what is the Northwestern experience? At the polling desk of The Daily Northwestern, I designed and analyzed a campus-wide survey examining how students navigate politics alongside everyday realities like relationships, mental health, academic pressure and financial stress.",
    detailSections: [
      {
        heading: null,
        body: [
          "Over one week, we collected responses from 727 undergraduate students through a mix of digital distribution and in-person polling. I analyzed the data using Python and applied demographic weighting by class year, gender and school to better reflect the undergraduate population. Throughout the process, we made deliberate methodological and editorial choices, including suppressing results from small demographic groups, aggregating open-ended responses and removing a question after changes in federal policy risked misrepresenting student views.",
          "The final poll offered a data-driven snapshot of student sentiment across both the broader campus climate and the everyday pressures shaping student life. The project reinforced my interest in responsible data journalism—rigorous in method, transparent about limitations and focused on telling more honest stories through data.",
        ],
      },
    ],
    tools: ["The Daily Northwestern", "Python", "Flourish", "Writing"],
    image: dailyPoll,
    featured: true,
    projectNumber: "02",
    link: "https://apps.dailynorthwestern.com/f25poll/lifestyle/",
  },
  {
    id: "featured-03",
    title: "To Kyiv & Kakhovka, With Love",
    description:
      "Produced and directed a documentary following Ukrainian international students navigating life amid the war; the film was selected to premiere at the Academy Award-qualifying American Documentary Film Festival in Palm Springs.",
    categories: ["Placeholder category"],
    role: "Producer & Director",
    detailIntro:
      "To Kyiv & Kakhovka, With Love tells the stories of two Ukrainian international students at Northwestern University finding their footing in the U.S. while their homeland remains at war. This 20-minute documentary captures their resilience, loss, and hope, showing how conflict and policy shape not just nations, but the lives of those who carry their country with them. Directed, filmed, edited by Eunice Eunsoo Lee, Misha Manjuran Oberoi, Rahib Taher. Supervised by Professor Brent E. Huffman.",
    detailSections: [
      {
        heading: null,
        body: null,
      },
    ],
    tools: ["Adobe Premiere Pro", "Filming"],
    image: documentary,
    featured: true,
    projectNumber: "03",
    link: "https://www.youtube.com/watch?v=Ua_o-7Ylw7I",
  },
];

export const archiveProjects = [
  {
    id: "archive-01",
    title:
      "Chicago police traffic stops plunge, again, but Black and Latino drivers still get pulled over far more",
    description:
      "Wrote a data-driven story on Chicago traffic stops by analyzing IDOT data and conducting original reporting, examining persistent racial disparities in who gets pulled over and how pretextual stops affect Black and Latino drivers.",
    categories: ["data", "writing"],
    tools: ["Chicago Public Media", "Excel"],
    image: stops,
    link: "https://chicago.suntimes.com/the-watchdogs/2026/08/14/traffic-stops-racial-disparities-chicago-police-department-illinois-department-transportation-driving-while-black",
  },
  {
    id: "archive-02",
    title:
      "Dallas rain tracker: How much has fallen in 2026 compared to past record years?",
    description:
      "Localized an existing interactive Texas rainfall tracker for the Dallas audience, adapting the code and rewriting content for local coverage.",
    categories: ["writing"],
    tools: ["The Dallas Morning News", "Reporting"],
    image: rainTracker,
    link: "https://www.dallasnews.com/projects/2026/dallas-rain-tracker-texas/",
  },
  {
    id: "archive-03",
    title:
      "Chaotic, crowded Chicago immigration mega court hearings are fueling record deportation orders",
    description: "Created graphics using Datawrapper.",
    categories: ["graphics", "data"],
    tools: ["Chicago Public Media", "Datawrapper"],
    image: midwayBlitz,
    link: "https://chicago.suntimes.com/immigration/2026/07/24/chaotic-crowded-chicago-immigration-mega-court-hearings-are-fueling-record-deportation-orders",
  },
  {
    id: "archive-05",
    title:
      "Cook County Health predicts charity care will soar to highest level in over a decade",
    description: "Created graphics using Datawrapper.",
    categories: ["data", "graphics"],
    tools: ["Chicago Public Media", "Datawrapper"],
    image: CCH,
    link: "https://www.wbez.org/health-medicine/2026/07/31/cook-county-predicts-charity-care-will-soar-to-highest-level-in-more-than-a-decade-medicaid-obamacare",
  },
  {
    id: "archive-04",
    title:
      "Got cash? With few properties on sale, Chicago homebuyers are having bidding wars",
    description: "Created graphics using Datawrapper.",
    categories: ["graphics", "data"],
    tools: ["Chicago Public Media", "Datawrapper"],
    image: bidWar,
    link: "https://chicago.suntimes.com/real-estate/2026/08/01/cash-properties-sale-open-house-chicago-homebuyers-bidding-wars",
  },
  // {
  //   id: "archive-06",
  //   title: "Archive Project Six",
  //   description: "A final placeholder for work that crosses multiple formats.",
  //   categories: ["writing", "photo"],
  //   tools: ["Print", "Photo"],
  //   image: null,
  //   link: "#",
  // },
  {
    id: "archive-13",
    title:
      "Data removal from government websites concerning scientists, including NU researchers",
    description: null,
    categories: ["writing", "data"],
    tools: ["The Daily Northwestern", "Reporting"],
    image: federalDataRemoval,
    link: "https://dailynorthwestern.com/2025/02/27/campus/data-removal-from-government-websites-concerning-scientists-including-nu-researchers/",
  },
  {
    id: "archive-19",
    title:
      "Graffoniks marks 10th anniversary with 'Graffoniks is Out of This World'",
    description:
      "Wrote and photographed a story on Graffoniks' 10th anniversary showcase.",
    categories: ["writing", "photo"],
    tools: ["The Daily Northwestern", "Reporting", "Photography"],
    image: graffoniks,
    link: "https://dailynorthwestern.com/2025/01/26/ae/graffoniks-marks-10th-anniversary-with-graffoniks-is-out-of-this-world/",
  },
  {
    id: "archive-09",
    title: "Poll: Love on campus, in numbers",
    description: null,
    categories: ["data", "writing"],
    tools: ["The Daily Northwestern", "Reporting", "Python"],
    image: loveOnCampus,
    link: "https://dailynorthwestern.com/2025/05/07/campus/poll-romantic-relationships/",
  },
  {
    id: "archive-21",
    title: "Encore! Evanston",
    description:
      "Filmed and produced a news package on Encore! Evanston, a collaboration between Likhaya and Downtown Evanston that brought live music performances to local restaurants and bars.",
    categories: ["video"],
    tools: ["Medill School of Journalism", "Adobe Premiere Pro", "Reporting"],
    image: encoreEvanston,
    link: "https://www.youtube.com/watch?v=5x0Asbbxol4",
  },
  {
    id: "archive-22",
    title:
      "The Daily visits Norris University Center to speak with admitted students",
    description:
      "Short-form video for the Daily Northwestern's social media on admitted students' day.",
    categories: ["video"],
    tools: ["The Daily Northwestern", "Adobe Premiere Pro", "Reporting"],
    image: co2029,
    link: "https://www.instagram.com/reels/DJUrQJWNBWR/",
  },
  {
    id: "archive-07",
    title:
      "Make your spirits bright with these holiday light events in the Chicago area",
    description:
      "Wrote a service story on holiday lights and added an interactive component using StoryMapJS.",
    categories: ["writing", "graphics"],
    tools: ["The Daily Northwestern", "Reporting", "StoryMapJS"],
    image: holidayLights,
    link: "https://dailynorthwestern.com/2025/12/03/lateststories/make-your-spirits-bright-with-these-holiday-light-events-in-the-chicago-area/",
  },
  {
    id: "archive-08",
    title:
      "Grove Gallery wraps up 'Portraits with Impact,' hoping to focus on community, diversity",
    description: null,
    categories: ["writing"],
    tools: ["The Daily Northwestern", "Reporting"],
    image: groveGallery,
    link: "https://dailynorthwestern.com/2025/06/29/ae/grove-gallery-wraps-up-portraits-with-impact-hoping-to-focus-on-community-diversity/",
  },
  {
    id: "archive-10",
    title: "Fusion celebrates 21st birthday with its annual spring show",
    description: null,
    categories: ["writing"],
    tools: ["The Daily Northwestern", "Reporting"],
    image: fusionDance,
    link: "https://dailynorthwestern.com/2025/04/14/lateststories/fusion-celebrates-21st-birthday-with-its-annual-spring-show/",
  },
  {
    id: "archive-11",
    title:
      "Student composed music drama 'Pythia' explores the history of the Oracle of Delphi",
    description: null,
    categories: ["writing"],
    tools: ["The Daily Northwestern", "Reporting"],
    image: pythia,
    link: "https://dailynorthwestern.com/2025/03/11/ae/student-composed-music-drama-pythia-explores-the-history-of-the-oracle-of-delphi/",
  },
  {
    id: "archive-12",
    title:
      "The Weekly: Federal data deletions, Workers' Retention Ordinance, R. F. Kuang",
    description:
      "Spoke on The Weekly, The Daily Northwestern's news podcast, about my reporting on how federal data deletions were affecting Northwestern researchers.",
    categories: ["writing"],
    tools: ["The Daily Northwestern", "Reporting"],
    image: theWeekly,
    link: "https://dailynorthwestern.com/2025/03/03/audio/the-weekly-federal-data-deletions-workers-retention-ordinance-r-f-kuang/",
  },

  {
    id: "archive-14",
    title:
      "Best All-Around and Brunch: Ovo Frito Café delivers tasty brunch favorites",
    description: null,
    categories: ["writing"],
    tools: ["The Daily Northwestern", "Reporting"],
    image: ovoFrito,
    link: "https://dailynorthwestern.com/2025/02/26/featured-stories/best-of-evanston/best-of-evanston-2025/best-all-around-and-brunch-ovo-frito-cafe-delivers-tasty-brunch-favorites/",
  },
  {
    id: "archive-15",
    title:
      "Best of Evanston: NU faculty share their favorite restaurants in downtown Evanston",
    description: null,
    categories: ["writing"],
    tools: ["The Daily Northwestern", "Reporting"],
    image: facultyRestaurants,
    link: "https://dailynorthwestern.com/2025/02/19/featured-stories/best-of-evanston/best-of-evanston-2025/best-of-evanston-nu-faculty-share-their-favorite-restaurants-in-downtown-evanston/",
  },
  {
    id: "archive-20",
    title:
      "'Danceworks 2025' presents cohesive narrative with 'signal::transfer'",
    description: "Photographed Danceworks 2025",
    categories: ["photo"],
    tools: ["The Daily Northwestern", "Photography"],
    image: danceworks,
    link: "https://dailynorthwestern.com/2025/03/11/ae/danceworks-2025-presents-cohesive-narrative-with-signaltransfer/",
  },
  {
    id: "archive-16",
    title:
      "Sparks fly: NU students make matches for one another to celebrate Valentine's Day",
    description: null,
    categories: ["writing"],
    tools: ["The Daily Northwestern", "Reporting"],
    image: valentinesMatchmaking,
    link: "https://dailynorthwestern.com/2025/02/14/ae/sparks-fly-nu-students-make-matches-for-one-another-to-celebrate-valentines-day/",
  },
  {
    id: "archive-17",
    title:
      "Prof. Michelle Birkett presents findings on social causes of HIV prevalence at colloquium",
    description: null,
    categories: ["writing"],
    tools: ["The Daily Northwestern", "Reporting"],
    image: michelleBirkett,
    link: "https://dailynorthwestern.com/2025/02/04/campus/sciencetechnology/prof-michelle-birkett-presents-findings-on-social-causes-of-hiv-prevalence-at-colloquium/",
  },
  {
    id: "archive-18",
    title:
      "Bienen senior Emily Amesquita wins encouragement award at Laffont Competition, eyes opera career",
    description: null,
    categories: ["writing"],
    tools: ["The Daily Northwestern", "Reporting"],
    image: emilyAmesquita,
    link: "https://dailynorthwestern.com/2025/02/02/ae/bienen-senior-emily-amesquita-wins-encouragement-award-at-laffont-competition-eyes-opera-career/",
  },
];
