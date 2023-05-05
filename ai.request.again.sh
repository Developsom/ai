
#!/bin/bash

# Set the API endpoint and engine
API_ENDPOINT="https://api.openai.com/v1/engines/davinci/completions"

# Set the API key authorization header
AUTH_HEADER="Authorization: Bearer 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"

# Set the request parameters
REQUEST_DATA='{"prompt": "Hello, world!", "max_tokens": 5}'

# Send the request to the OpenAI API
curl -X POST \
  -H "Content-Type: application/json" \
  -H "$AUTH_HEADER" \
  -d "$REQUEST_DATA" \
  $API_ENDPOINT