import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import {
  CardField,
  useStripe,
  StripeProvider,
} from "@stripe/stripe-react-native";
import cardAtm from "../../assets/atm.png";
import { createPaymentApi } from "../redux/user/user.api";
import { useSelector } from "react-redux";

export default function CardPayment({ navigation, route }) {
  const [completeDetails, setCompleteDetails] = useState(false);
  const [cardDetails, setCardDetails] = useState({});

  const { confirmPayment } = useStripe();
  const { currentUser } = useSelector((store) => store.user);

  const handlePay = async () => {
    try {
      let payload = {
        amount: parseFloat(route.params.amount),
        currency: "eur",
        name: currentUser.firstname + " " + currentUser.lastname,
      };

      const { data } = await createPaymentApi(payload);
      console.log("Payment Intent Create Successfully !!!", data);

      if (data?.paymentIntent) {
        let confirmPaymentIntent = await confirmPayment(data?.paymentIntent, {
          type: "Card",
        });
        console.log("Confirm Payment Intent !!!!", confirmPaymentIntent);
      }
    } catch (error) {
      Alert.alert(error.message, "Please Try Again.", [{ text: "Okay" }]);
    }

    navigation.navigate("PaymentSuccessfull", {
      value: "Thankyou for paying Rs. " + route.params.amount,
      title: "Payment Successfull",
      backScreenName: "Home",
    });
  };
  return (
    <StripeProvider
      publishableKey={
        "pk_test_51MCI4ISJT3X6Q6qZfCuSKAWMmWz4SlhQ2N911GZdUko1J8a3odVPNJgT7cL6FiCgwCPx0KDGMiponEZfbOVAzKkr005LRTpIHT"
      }
    >
      <View
        style={{
          height: 100,
        }}
      >
        <Image
          source={cardAtm}
          //   style={styles.logo}
          style={{
            // height: 140,
            width: 350,
            height: 300,
            marginTop: 80,
          }}
          resizeMode="stretch"
        />
        <CardField
          postalCodeEnabled={false}
          placeholders={{
            number: "4242 4242 4242 4242",
          }}
          cardStyle={{
            backgroundColor: "#FFFFFF",
            textColor: "#000000",
          }}
          style={{
            width: "100%",
            height: 50,
            //   marginVertical: 30,
          }}
          onCardChange={(cardDetails) => {
            setCompleteDetails(cardDetails.complete);
            if (cardDetails.complete) {
              setCardDetails(cardDetails);
            }
            // console.log("cardDetails", cardDetails);
          }}
        />
        <Text
          style={{
            textAlign: "center",
            margin: 20,
            fontSize: 20,
            color: "gray",
          }}
        >
          Amount to Pay : Rs. {route.params.amount}{" "}
        </Text>

        <Button
          title="Pay"
          disabled={!completeDetails}
          color={"blue"}
          onPress={handlePay}
        />
      </View>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({});
