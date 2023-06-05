/** @format */

import axios from "axios";

import assets from "./assets";

const NFTData = [
	{
		// id: "NFT-01",
		// name: "Abstracto #312",
		// creator: "Putri Intan",
		// price: 4.25,
		id: 1,
		gymname: "Studio X",
		address: "DHA PHASE 2",
		contact: "+21-111-6573214",
		email: "flexgym@gym.com",
		monthlyFee: 6890,
		registrationfee: 8000,
		website: "wwww.flexgym.com",
		starttiming: "5:00 PM - 12:00 AM",
		description:
			"The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
		image: assets.nft01,
		trainers: [
			{
				id: "BID-11",
				name: "Hamdan",
				price: 4255,
				image: assets.person02,
				rating: "4.5",
			},
			{
				id: "BID-12",
				name: "Ali",
				price: 4508,
				image: assets.person03,
				rating: "4.5",
			},
			{
				id: "BID-13",
				name: "Anikat",
				price: 4000,
				image: assets.person04,
				rating: "4.5",
			},
		],
	},
	{
		id: 2,
		gymname: "Element",
		address: "DHA PHASE 2",
		contact: "+21-111-6573214",
		email: "flexgym@gym.com",
		monthlyFee: 6890,
		registrationfee: 8000,
		website: "wwww.flexgym.com",
		starttiming: "5:00 PM - 12:00 AM",
		description:
			"The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
		image: assets.nft02,
		trainers: [
			{
				id: "BID-11",
				name: "Amaan",
				price: 4255,
				image: assets.person02,
				rating: "4.5",
			},
			{
				id: "BID-12",
				name: "Aman",
				price: 4508,
				image: assets.person03,
				rating: "4.5",
			},
			{
				id: "BID-13",
				name: "jabar",
				price: 4000,
				image: assets.person04,
				rating: "4.5",
			},
		],
	},
	{
		id: 3,
		gymname: "Platinum Fitness Center",
		address: "DHA PHASE 2",
		contact: "+21-111-6573214",
		email: "flexgym@gym.com",
		monthlyFee: 6890,
		registrationfee: 8000,
		website: "wwww.flexgym.com",
		starttiming: "5:00 PM - 12:00 AM",
		description:
			"The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
		image: assets.nft03,
		trainers: [
			{
				id: "BID-11",
				name: "Jamal",
				price: 4255,
				image: assets.person02,
				rating: "4.5",
			},
			{
				id: "BID-12",
				name: "Aziz",
				price: 4508,
				image: assets.person03,
				rating: "4.5",
			},
			{
				id: "BID-13",
				name: "asad",
				price: 4000,
				image: assets.person04,
				rating: "4.5",
			},
		],
	},
	{
		id: 4,
		gymname: "Flex Gym",
		address: "DHA PHASE 2",
		contact: "+21-111-6573214",
		email: "flexgym@gym.com",
		monthlyFee: 6890,
		registrationfee: 8000,
		website: "wwww.flexgym.com",
		starttiming: "5:00 PM - 12:00 AM",
		description:
			"The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
		image: assets.nft04,
		trainers: [
			{
				id: "BID-11",
				name: "Najeeb",
				price: 4255,
				image: assets.person02,
				rating: "4.5",
			},
			{
				id: "BID-12",
				name: "Ali",
				price: 4508,
				image: assets.person03,
				rating: "4.5",
			},
			{
				id: "BID-13",
				name: "amir",
				price: 4000,
				image: assets.person04,
				rating: "4.5",
			},
		],
	},
	{
		id: 5,
		gymname: "Flex Gym",
		address: "DHA PHASE 2",
		contact: "+21-111-6573214",
		email: "flexgym@gym.com",
		monthlyFee: 6890,
		registrationfee: 8000,
		website: "wwww.flexgym.com",
		starttiming: "5:00 PM - 12:00 AM",
		description:
			"The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
		image: assets.nft05,
		trainers: [
			{
				id: "BID-11",
				name: "Ali",
				price: 4255,
				image: assets.person02,
				rating: "4.5",
			},
			{
				id: "BID-12",
				name: "asif",
				price: 4508,
				image: assets.person03,
				rating: "4.5",
			},
			{
				id: "BID-13",
				name: "Farroq",
				price: 4000,
				image: assets.person04,
				rating: "4.5",
			},
		],
	},
	{
		id: 6,
		gymname: "Flex Gym",
		address: "DHA PHASE 2",
		contact: "+21-111-6573214",
		email: "flexgym@gym.com",
		monthlyFee: 6890,
		registrationfee: 8000,
		website: "wwww.flexgym.com",
		starttiming: "5:00 PM - 12:00 AM",
		description:
			"The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
		image: assets.nft06,
		trainers: [
			{
				id: "BID-11",
				name: "Hammad",
				price: 4255,
				image: assets.person02,
				rating: "4.5",
			},
			{
				id: "BID-12",
				name: "hafeez",
				price: 4508,
				image: assets.person03,
				rating: "4.5",
			},
			{
				id: "BID-13",
				name: "Ritika",
				price: 4000,
				image: assets.person04,
				rating: "4.5",
			},
		],
	},
    {
		id: 7,
		gymname: "Flex Gym",
		address: "DHA PHASE 2",
		contact: "+21-111-6573214",
		email: "flexgym@gym.com",
		monthlyFee: 6890,
		registrationfee: 8000,
		website: "wwww.flexgym.com",
		starttiming: "5:00 PM - 12:00 AM",
		description:
			"The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
		image: assets.nft07,
		trainers: [
			{
				id: "BID-11",
				name: "Anikat",
				price: 4255,
				image: assets.person02,
				rating: "4.5",
			},
			{
				id: "BID-12",
				name: "Ritika",
				price: 4508,
				image: assets.person03,
				rating: "4.5",
			},
			{
				id: "BID-13",
				name: "Amaan",
				price: 4000,
				image: assets.person04,
				rating: "4.5",
			},
		],
	},
];
export { NFTData };
