from openai import OpenAI

client = OpenAI(
  organization='org-gtZLp3kruvz1UlFHPqIz3rPh',
  project='sk-i-aenxqJtVGzHMK6x4cno4YRxNZPzhr8qXH7f0M2MPT3BlbkFJtkWwF2pdKVBl84u0GrGCyxhky2-nWZFnn6fOZswoMA',
)

stream = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "Say this is a test"}],
    stream=True,
)
for chunk in stream:
    if chunk.choices[0].delta.content is not None:
        print(chunk.choices[0].delta.content, end="")