import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Text } from "@/components/ui/text";
import { AlertCircle, CheckCircle, Terminal } from "lucide-react-native";
import { View } from "react-native";

type Props = {
  name: string;
};

export default function ComponentRegistry({ name }: Props) {
  switch (name) {
    case "accordion":
      return (
        <View className="flex items-center w-full h-full">
          <Accordion
            type="single"
            defaultValue={"productInformation"}
            className="w-full"
          >
            <AccordionItem value="productInformation">
              <AccordionTrigger>
                <Text>Product Information</Text>
              </AccordionTrigger>
              <AccordionContent className="gap-4">
                <Text>
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
                </Text>
                <Text>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and
                  experts.
                </Text>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shippingDetails">
              <AccordionTrigger>
                <Text>Shipping Details</Text>
              </AccordionTrigger>
              <AccordionContent className="gap-4">
                <Text>
                  We offer worldwide shipping through trusted courier partners.
                  Standard delivery takes 3-5 business days, while express
                  shipping ensures delivery within 1-2 business days.
                </Text>
                <Text>
                  All orders are carefully packaged and fully insured. Track
                  your shipment in real-time through our dedicated tracking
                  portal.
                </Text>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="returnPolicy">
              <AccordionTrigger>
                <Text>Return Policy</Text>
              </AccordionTrigger>
              <AccordionContent className="gap-4">
                <Text>
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you're not completely satisfied, simply
                  return the item in its original condition.
                </Text>
                <Text>
                  Our hassle-free process includes free return shipping and full
                  refunds processed within 48 hours of receiving the returned
                  item.
                </Text>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </View>
      );
    case "alert":
      return (
        <View className="flex items-center w-full h-full gap-4">
          <Alert icon={CheckCircle} variant="default">
            <AlertTitle>
              <Text className="leading-none">
                Success! Your changes have been saved
              </Text>
            </AlertTitle>
            <AlertDescription>
              <Text>This is an alert with icon, title and description.</Text>
            </AlertDescription>
          </Alert>
          <Alert icon={Terminal} variant="default">
            <AlertTitle>
              <Text className="leading-none">
                This Alert has no description.
              </Text>
            </AlertTitle>
          </Alert>
          <Alert icon={AlertCircle} variant="destructive">
            <AlertTitle>
              <Text className="leading-none">
                Unable to process your payment.
              </Text>
            </AlertTitle>
            <AlertDescription>
              <Text>Please verify your billing information and try again.</Text>

              {/* Premier item */}
              <View className="flex-row items-start mt-4">
                <Text className="flex-1"></Text>
              </View>

              <View className="flex-row items-start mt-4">
                <Text className="mr-2">{"\u2022"}</Text>
                <Text className="flex-1">Check your card details</Text>
              </View>

              {/* Deuxième item */}
              <View className="flex-row items-start">
                <Text className="mr-2">{"\u2022"}</Text>
                <Text className="flex-1">Ensure sufficient funds</Text>
              </View>

              {/* Troisième item */}
              <View className="flex-row items-start">
                <Text className="mr-2">{"\u2022"}</Text>
                <Text className="flex-1">Verify billing address</Text>
              </View>
            </AlertDescription>
          </Alert>
        </View>
      );

    default:
      break;
  }

  return null;
}
