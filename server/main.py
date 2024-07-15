import mindsdb_sdk

# Connect to MindsDB
con = mindsdb_sdk.connect()

# Assuming you already have the connection established correctly
project = con
models = project.models.list()

if models:
    model = models[2]
    print("Model Found:", model)

    # Example query for prediction
    query = {"text": "Seeing cow dung in dream."}

    # Perform prediction
    try:
        prediction = model.predict(query)
        print("Prediction:", prediction)
    except ValueError as e:
        print("Prediction Error:", e)

else:
    print("No models found.")
