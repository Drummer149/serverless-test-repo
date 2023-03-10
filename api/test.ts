import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const test = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "This Worked",
      }
    ),
  };
};
