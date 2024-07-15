import mindsdb_sdk

# Connect to MindsDB
con = mindsdb_sdk.connect()

# Assuming you already have the connection established correctly
project = con
models = project.models.list()

if models:
    target_model_name = "dream_weaver_model_pro_max"  # Replace with your model's actual name

    # Find the model by name
    model = next((m for m in models if m.name == target_model_name), None)
    
    # Example query for prediction
    query = {"dream_description": "Interpret this dream: Return result in json form with dream_interpreation, possible meaning{must be list of tags}, insights(tags), symbols(tags), emotions(tags with emoji) :  I was picking papaya and suddenly saw banana on papaya tree."}

    # Restricting to dream-related queries
    if "dream" in query["dream_description"].lower():
        try:
            prediction = model.predict(query)
            
            # Extract the prediction value from the DataFrame
            dream_interpretation = prediction['dream_interpretation'].iloc[0]
            
            # Print out the prediction
            print(dream_interpretation)
            
        except ValueError as e:
            print("Prediction Error:", e)
    else:
        print("Please provide a dream-related description.")
else:
    print("No models found.")
