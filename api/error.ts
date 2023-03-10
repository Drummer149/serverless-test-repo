import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const error = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 500,
    body: JSON.stringify(
      {
        message: "This Didn't Work",
      }
    ),
  };
};
