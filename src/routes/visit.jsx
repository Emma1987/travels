import "../assets/visit.scss";
import Header from "../components/Header";
import PlaceToVisitList from "../components/Visit/PlaceToVisitList";

export default function Visit() {
	const places = [
    {
      id: 1,
      title: "Alma College",
			description: "This St. Thomas, Ontario school for girls was originally built in 1878, but the school closed in 1988. The grounds were used for teaching purposes until 1994, when it began being bought and sold like crazy, falling into disrepair. It was used in the movie Silent Hill, until it burned down in a mysterious fire in 2008. All that’s left is the front gate and the chapel.",
			imageName: "alma_college.jpeg",
			location: "St. Thomas, ON, Canada"
    },
    {
      id: 2,
      title: "Aspotogan Hotel",
			description: "In 1993, the Aspotogan Sea Spa was slated to be a beautiful business investment. But, those dreams quickly shattered when the project ran out of money a year later. 20 years later, no new opportunities have presented themselves, and the Aspotogan Sea Spa in Nova Scotia is still a half-built reminder of what almost was.",
			imageName: "aspotogan_hotel.jpeg",
			location: "Aspotogan Peninsula, NS, Canada"
    },
    {
      id: 3,
      title: "Bayer’s Lake Mystery Walls",
			description: "Halifax’s abandoned stonewalls are still a mystery to Nova Scotia residents. No one knows where they came from or who built them, or even how long they’ve been abandoned. The only somewhat sensical explanation is that they were a abandoned military project.",
			imageName: "bayers_lake.jpeg",
			location: "Halifax, NS, Canada"
    },
    {
      id: 4,
      title: "Canol Heritage Trail",
			description: "The Northwest Territories’ Mackenzie Mountains are home to the Canol Heritage Trail, which traces an abandoned World War II pipeline that has since been abandoned. They’re 385km of one of the most difficult hikes in North America, boasting wartime construction gems that make for a beautiful history lesson.",
			imageName: "canol_heritage_trail.jpeg",
			location: "Mackenzie Mountains, YK, Canada"
    },
    {
      id: 5,
      title: "Fort San",
			description: "Fort San, also known as the Fort Qu Appelle Sanitaruim, opened in 1917 to treat and house people with tuberculosis. It had its own power house, livestock, gardens and basically was its own, operable village. It was then used as the Saskatchewan Summer School of the Arts then the HMCS Qu’Appelle Cadet Summer Training Centre in the 1960s. Then, the 90s saw it become the Echo Valley Conference Centre, until that, too, closed in 2004.",
			imageName: "fort_san.jpeg",
			location: "Fort San, SK, Canada"
    },
    {
      id: 6,
      title: "Giant Mine",
			description: "Johnny Baker discovered a goldmine in 1935 just north of Yellowknife, but it took until 1944 for the massive gold deposits to be found. It produced over 220,000 kgs of gold from 1948 to 2004, but in 2005, Miramar Giant Mine Ltd., the company that operated the mine, left the Giant Mine and gave it officially abandoned status.",
			imageName: "giant_mine.jpeg",
			location: "Yellowknife, NT, Canada"
    },
    {
      id: 7,
      title: "Halifax County Rehabilitation Centre",
			description: "Halifax County Rehabilitation Centre was both a municipal and provincial facility from 1941 to 2002. It was abandoned for years until the Trailer Park Boys used it as a film set, but was eventually set to be demolished. But, before that could happen, the building caught fire in 2010, leaving just a shell of its former glory. It was scheduled to come down AGAIN at the end of 2011, but that was set back because of contaminants.",
			imageName: "halifax_county_rehab_centre.jpeg",
			location: "Halifax, NS, Canada"
    },
    {
      id: 8,
      title: "Ireland’s Eye",
			description: "This once thriving fishing village in Newfoundland is now a town perfect for supernatural activity. It operated from the 1880s to the 1960s, with a peak population of 157. By the mid 60s, though, the population fell to a measly 16, and every single one of them left for homes in nearby areas. Legend has it, though, that it was a drug hiding ground for local gangsters in the 80s.",
			imageName: "irelands_eye.jpeg",
			location: "Ireland's Eye, NL, Canada"
    },
    {
      id: 9,
      title: "Kitsault",
			description: "This town in B.C. has been empty and abandoned for almost 3 decades. It was originally built in the 1970s and was supposed to be a mining hub for minerals, and sat closer to the Alaskan border than any other town. It had 94 homes, 200 apartments, a hospital, mall, community centre and even a very necessary curling rink. But, stock prices for molybdenum (a metal used in the construction of steel) eventually fell, and the entire community picked up and moved out. In 2004, an entrepreneur bought the entire town for a cool $5 million in cash, and CBC says it could be re-purposed as a hub for British Columbia’s growing liquid natural gas infrastructure. The picture is an abandoned grocery store.",
			imageName: "kitsault.jpeg",
			location: "Kitsault, BC, Canada"
    },
    {
      id: 10,
      title: "Mirabel Montreal Airport",
			description: "Opened in 1975, Mirabel Montreal Airport was originally named Montreal International Airport and was the biggest airport on the planet. It was built just in time for 1976 Olympics, and meant to eventually replace Pierre Elliott Trudeau Airport. But, because of its less than convenient location, the airport was used less and less until its last commercial flight in October 2004. It’s now used as a cargo airport and a racecar track.",
			imageName: "mirabel_montreal_airport.jpeg",
			location: "Montréal, QC, Canada"
    },
    {
      id: 11,
      title: "Riverview Hospital",
			description: "Coquitlam, B.C.’s Riverview Hospital was originally an asylum, built in 1913. It’s now abandoned, and the West Lawn site is so creepy today that The X-Files filmed an episode here.",
			imageName: "riverview_hospital.jpeg",
			location: "Coquitlam, BC, Canada"
    },
    {
      id: 12,
      title: "The Canada Malting Complex",
			description: "The Canada Malting Complex was built in Montreal, Quebec in the early 1900s, producing a whopping 250,000lbs of malt per year for many years. By the 1980s, it was abandoned for being too small. Vandalism and terribly cold Montreal weather have made the factory a disheveled wreck, but the silo is still part of the Lachine Canal National Historic Site.",
			imageName: "the_canadian_malting_complex.jpeg",
			location: "Montréal, QC, Canada"
    },
    {
      id: 13,
      title: "Uranium City",
			description: "Uranium City is one of the more famous Saskatchewan ghost town. It was almost a city, then fell apart when the Eldorado Mine closed. Today, about 70 people still live there in order to keep it alive.",
			imageName: "uranium_city.jpeg",
			location: "Uranium City, SK, Canada"
    },
    {
      id: 14,
      title: "Val-Jalbert",
			description: "Quebec’s Val-Jalbert was first built way back in 1901. Located at the Ouiatchouan Falls, so it was a successful pulp mill for a long time, but it was closed in 1927 and the town abandoned, leaving only 60 well-preseved, historical buildings.",
			imageName: "val_jalbert.jpeg",
			location: "Val-Jalbert, QC, Canada"
    },
    {
      id: 15,
      title: "White Otter Castle",
			description: "White Otter Castle is a three-storey castle designed by Jimmy McOuat near Atikokan, Ontario. He was a strange fellow, and built the castle between 1903 and 1915 to use as a dowry for a lady he wanted to marry. He drowned in 1918 while fishing, and is buried busied the castle. The property has been abandoned since.",
			imageName: "white_otter_castle.jpeg",
			location: "Atikokan, ON, Canada"
    }
  ];

	return (
		<>
      <Header />

			<main style={{ padding: "3rem" }}>
				<h1>Visit</h1>

				<PlaceToVisitList places={places} />
			</main>
		</>
	);
}
