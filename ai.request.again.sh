
#!/bin/bash

# Set the API endpoint and engine
API_ENDPOINT="https://api.openai.com/v1/engines/davinci/completions"

# Set the API key authorization header
AUTH_HEADER="Authorization: Bearer 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"

# Set the request parameters
REQUEST_DATA='{"prompt": "Hello, world!", "max_tokens": 500}'

# Send the request to the OpenAI API
curl -X POST \
  -H "Content-Type: application/json" \
  -H "$AUTH_HEADER" \
  -d "$REQUEST_DATA" \
  $API_ENDPOINT