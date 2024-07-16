

---

# <p align="center">Dream Weaver</span> : Unveil Your Dreams</p>
<p align="center">
    <p align="center">
        <a href="https://github.com/Sujan-Koirala021/dream-weaver" target="blank">
            <img src="https://img.shields.io/github/watchers/Sujan-Koirala021/dream-weaver?style=for-the-badge&logo=appveyor" alt="Watchers"/>
        </a>
        <a href="https://github.com/Sujan-Koirala021/dream-weaver" target="blank">
            <img src="https://img.shields.io/github/forks/Sujan-Koirala021/dream-weaver?style=for-the-badge&logo=appveyor" alt="Forks"/>
        </a>
        <a href="https://github.com/Sujan-Koirala021/dream-weaver/stargazers" target="blank">
            <img src="https://img.shields.io/github/stars/Sujan-Koirala021/dream-weaver?style=for-the-badge&logo=appveyor" alt="Star"/>
        </a>
    </p>
    <p align="center">
        <a href="https://github.com/Sujan-Koirala021/dream-weaver/issues" target="blank">
            <img src="https://img.shields.io/github/issues/Sujan-Koirala021/dream-weaver?style=for-the-badge&logo=appveyor" alt="Issue"/>
        </a>
        <a href="https://github.com/Sujan-Koirala021/dream-weaver/pulls" target="blank">
            <img src="https://img.shields.io/github/issues-pr/Sujan-Koirala021/dream-weaver?style=for-the-badge&logo=appveyor" alt="Open Pull Request"/>
        </a>
    </p>
    <p align="center">
        <a href="https://github.com/Sujan-Koirala021/dream-weaver/blob/master/LICENSE" target="blank">
            <img src="https://img.shields.io/github/license/Sujan-Koirala021/dream-weaver?style=for-the-badge&logo=appveyor" alt="License" />
        </a>
    </p>
</p>

Welcome to Dream-Weaver: Unveil Your Dreams. Explore the mysteries of your dreams with our intuitive dream interpretation app. Dream-Weaver harnesses the power of MindsDB to provide insightful interpretations of your dreams, helping you uncover their hidden meaning.

# Introduction

Dream Weaver is a dream interpretation app designed to help you explore and understand the meanings behind your dreams. With its user-friendly interface and powerful analysis features, Dream Weaver provides insightful interpretations and uncovering the mysteries of your subconscious.

## Features

- **Dream Interpretation**: Receive detailed interpretations of your dreams based on various symbols, emotions, and themes present in your dream.
- **Possible Meanings**: Discover potential meanings and explanations for different elements within your dream.
- **Insights**: Gain deeper insights into your dreams, including personal reflections and psychological analysis.
- **Symbols**: Explore the significance of different symbols that appear in your dreams.
- **Emotions**: Understand the emotional context of your dreams and how they relate to your waking life.

Dream Weaver: Unveil Your Dreams is your ultimate tool for dream analysis and understanding. Start your journey into the world of dreams today!


## Demo
<video src="https://github.com/user-attachments/assets/29767fcb-2bee-47ef-8186-8e811702392b"></video>




## Dependencies
- React
- Tailwind
- Fast API
- MindsDB (Gemini Model)

## Getting Started

### Installation




#### Clone the repository:
```bash
git clone https://github.com/Sujan-Koirala021/dream-weaver.git
```
#### Go to the repository:
```bash
cd dream-weaver
```

### Run mindsdb locally
```bash
docker run --name mindsdb_container -p 47334:47334 -p 47335:47335 mindsdb/mindsdb
```
#### Go to mindsdb editor at http://localhost:47334

#### Go to Settings>Manage Integrations and install Google Gemini

#### Get Gemini Api 
Refer this : https://ai.google.dev/gemini-api/docs/api-key?authuser=1

#### Run following queries step by step to create model
- Replace 'your-gemini-api' with your gemini api key
- You may use your desired model_name, in our case: dream_weaver_model_pro_max
- Make sure you use the same model_name in backend at main.py

```bash
CREATE ML_ENGINE google_gemini_engine
FROM google_gemini
USING
      google_gemini_api_key = 'your-gemini-api';
```
```bash
CREATE MODEL dream_weaver_model_pro_max
PREDICT dream_interpretation, possible_meaning, insights, symbols, emotions
USING
      engine = 'google_gemini_engine',
      column = 'dream_description',
      model = 'gemini-pro',
      template = '{"dream_interpretation": "{dream_interpretation}", "possible_meaning": "{possible_meaning}", "insights": "{insights}", "symbols": "{symbols}", "emotions": "{emotions}"}';
```
#### Query to get response
```bash
SELECT dream_interpretation
FROM dream_weaver_model_pro_max
WHERE dream_description = 'Interpret dream of seeing papaya.';
```


### Setup Frontend 

#### Navigate to the client directory:
```bash
cd client
```

#### Install dependencies:
```bash
npm install
```

#### Start the development server:
```bash
npm start
```





### Setup Backend 

#### Navigate to the server directory:
```bash
cd server
```

#### Set up a virtual environment :
```bash
python -m venv env

source env/bin/activate 

# For Windows use:
env\Scripts\activate # to activate
```

#### Install dependencies:
```bash
pip install -r requirements.txt
```
#### Run backend
```bash
uvicorn main:app --reload 
```

## Usage

#### Visit the frontend application:
Open your browser and navigate to `http://localhost:3000`.



## Screenshots
![1landing](https://github.com/user-attachments/assets/8f8b0843-7d64-4e28-a0e7-e2ac75082519)
![2about](https://github.com/user-attachments/assets/4fc78804-b815-4041-a803-61e51bfc4ff2)
![3contact](https://github.com/user-attachments/assets/03c88f20-d193-42b7-a1c9-c16875350e16)
![4query](https://github.com/user-attachments/assets/23620c41-2e68-495f-813a-15d8867658de)
![5result](https://github.com/user-attachments/assets/b12ad19f-acaa-4610-b7f5-9ee326160e30)



## Contributing

We welcome contributions from the community! If you'd like to contribute to dream-weaver, please follow these steps:

1. **Fork the Repository**: Click the "Fork" button on GitHub to create your copy.

2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/Sujan-Koirala021/dream-weaver.git
   ```

3. **Create a Branch**:
   ```bash
   git checkout -b your-branch-name
   ```

4. **Make Changes**: Implement your changes.

5. **Commit Your Changes**:
   ```bash
   git commit -m "Description of your changes"
   ```

6. **Push Your Changes**:
   ```bash
   git push -u origin your-branch-name
   ```

7. **Create a Pull Request**: Submit your changes for review.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Mindsdb](https://docs.mindsdb.com/what-is-mindsdb) for AI model
- [React](https://reactjs.org/) library for web and native user interfaces
- [Tailwind](https://tailwindcss.com/) for the styling
- [Fast API](https://fastapi.tiangolo.com/) for middleware


---
