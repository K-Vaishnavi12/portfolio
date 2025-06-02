def ask_question(question, options, correct_answer):
    print("\n" + question)
    for i, option in enumerate(options, start=1):
        print(f"{i}. {option}")
    try:
        answer = int(input("Your answer (1-4): "))
        if options[answer - 1].lower() == correct_answer.lower():
            print("Correct!")
            return True
        else:
            print(f"Wrong! The correct answer is: {correct_answer}")
            return False
    except (ValueError, IndexError):
        print("Invalid input.")
        return False
quiz_questions = [
    {
        "question": "What is the capital of France?",
        "options": ["London", "Berlin", "Paris", "Rome"],
        "answer": "Paris"
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "options": ["Earth", "Mars", "Jupiter", "Venus"],
        "answer": "Mars"
    },
    {
        "question": "What is 5 + 7?",
        "options": ["10", "12", "13", "11"],
        "answer": "12"
    }
]
print("Welcome to the Quiz Game!")
score = 0

for q in quiz_questions:
    if ask_question(q["question"], q["options"], q["answer"]):
        score += 1

print(f"\nYour final score: {score} out of {len(quiz_questions)}")
