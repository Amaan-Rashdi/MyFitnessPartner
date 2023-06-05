/** @format */

import React, { useEffect, useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, getallgym, NFTData } from "../../constants";
import { getAllGymsApi, getHalfGymsApi } from "../redux/gyms/gyms.api";
import { getAllTrainersApi, getTrainerWithGym } from "../redux/trainers/trainers.api";




const Home = () => {
	const [nftData, setNftData] = useState(NFTData);
// 	const [ndata , setndata] = useState();
//   useEffect(()=>{
//     getdata();
// 	tdata();
// 	console.log("gym data")
// 	console.log(getdata())
// 	console.log("trainer data")
// 	console.log(tdata())
// 	// console.log("traineeeeeeeeeeeeeeeeeer data")
// 	// console.log(ndata)
// 	// let format = nftData.map(item => {
// 	// 	item['trainers'] = ndata.map(item => {
// 	// 		return item;
// 	// 	});
// 	// 	return item;
// 	// }
// 	// )
// 	console.log("formmmmmmmmmmmmmattt")
// 	// console.log(format)
//   },[])



//   const getdata = async() => {
//     try {
      
//       const gymdata = await getHalfGymsApi(
//       );
//       const td = gymdata.data.data
//     //   console.log("TDD")
//     //    console.log(td)
//       setNftData(td);
// 	  //tdata();
// 	//   console.log("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLl")
// 	//   console.log(tdata())

//     } catch (error) {
//       console.log(error.message);
//       Alert.alert("Something went wrong!", "Please Try Again.", [
//         { text: "Okay" },
//       ]);
//     }
//   }
  
//   const tdata = async() => {
//     try {
      
// 		const tdata = await getTrainerWithGym(nftData.gymname);
		
// 		setndata(tdata.data.data)
		
//     } 

// 	catch (error) {
//       console.log(error.message);
//       Alert.alert("Something went wrong!", "Please Try Again.", [
//         { text: "Okay" },
//       ]);
//     }
	
//   }

// 	// useEffect(() => {
	
// 	// 	let r = getallgym();
//   //   console.log("Whats new")
    
// 	// 	setNftData(r.data);
// 	// 	console.log(nftData)
// 	// }	)


	const handleSearch = (value) => {
		// console.log(value);
		if (value.length === 0) {
			setNftData(getallgym);
		}

		// const filteredData = getallgym.filter((item) => {
		// 	// console.log(item.name);
		// 	let flag = false;

		// 	if (value) {
		// 		// value = item.name.toLowerCase();
		// 		flag = true;
		// 	}

		// 	if (flag) {
		// 		item.name = value;
		// 		// console.log(item.name);
		// 		return item.name.toLowerCase().includes(value.toLowerCase());
		// 	}
		// });

		const filteredData = getallgym.filter((item) => {
			console.log("item Name:" + item.name);
			{
				item.name == undefined
					? getallgym.at(5)
					: item.name.toLowerCase().includes(value.toLowerCase());
			}
		});

		// console.log("Filtered data length" + filteredData.length);

		if (filteredData.length === 0) {
			setNftData(getallgym);
		} else {
			setNftData(filteredData);
		}
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FocusedStatusBar backgroundColor={"#9932cc"} />
			<View style={{ flex: 1 }}>
				<View style={{ zIndex: 0 }}>
					<FlatList
						data={nftData}
						renderItem={({ item }) => <NFTCard data={item} />}
						keyExtractor={(item) => item.id}
						showsVerticalScrollIndicator={false}
						ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
					/>
				</View>

				<View
					style={{
						position: "relative",
						top: 0,
						bottom: 0,
						right: 0,
						left: 0,
						zIndex: -1,
					}}>
					<View style={{ height: 300, backgroundColor: "#9932cc" }} />
					<View style={{ flex: 1, backgroundColor: "#9932cc" }} />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Home;
