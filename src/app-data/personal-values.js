const personalValues = [
  {
    id: 1,
    name: "certainty",
    description:
      "Stabilization allows you to feel comfortable and safe. People who value certainty do not like to be surprised and prefer a predictable lifestyle. The reality they create is their asylum and provides peace of mind.",
    exerpt: "stability, orderliness, predictability",
    vote: 0,
    loss: 0,
  },
  {
    id: 2,
    name: "control",
    description:
      "People who value control, like to be masters of the situation. No matter what happens, they are ready to make decisions. They are also ready to take responsibility for their actions. Interest in control can arise from a person's need for security or ambition.",
    exerpt: "control of the situation or environment",
    vote: 0,
    loss: 0,
  },
  {
    id: 3,
    name: "security",
    description:
      "The value of security comes from our primary needs. The sense of security allows you to feel comfortable and opens the possibility of further development. People in need of security can do a lot to avoid danger.",
    exerpt: "being free from danger or threat",
    vote: 0,
    loss: 0,
  },
  {
    id: 4,
    name: "peace",
    description:
      "People who value peace tend to avoid conflicts. If they engage in disputes, it is mainly to help resolve them. They are willing to make compromises and sacrifices if it is required to regain peace.",
    exerpt: "calm, freedom from conflict",
    vote: 0,
    loss: 0,
  },
  {
    id: 5,
    name: "health",
    description:
      "Those who value health take conscious actions to maintain physical and mental fitness. They do not shy away from practicing sports and are happy to follow a healthy diet. They are aware of the consequences of insufficient health care.",
    exerpt: "well-being, fitness, not being sick",
    vote: 0,
    loss: 0,
  },
  {
    id: 6,
    name: "discipline",
    description:
      "It is the ability to subordinate one's actions to the realization of a long-term plan. Disciplined people always have a goal in mind. They are also aware of how much they can achieve with their work and persistence if they really want something.",
    exerpt: "obedience, self-control",
    vote: 0,
    loss: 0,
  },
  {
    id: 7,
    name: "job security",
    description:
      "Having a job gives you not only a salary, but also a certain social status. It also determines the role we play in society and our immediate surroundings. Employment security is for many people the foundation on which they build their lifestyle.",
    exerpt: "not worrying about losing your job",
    vote: 0,
    loss: 0,
  },
  {
    id: 8,
    name: "wealth",
    description:
      "Wealth can strongly affect the imagination. It allows us to feel comfortable, safe and exceptional. Although it does not guarantee finding true happiness, it gives a chance to discover the charms of life in any chosen way.",
    exerpt: "money, material goods, luxury lifestyle",
    vote: 0,
    loss: 0,
  },
  {
    id: 9,
    name: "popularity",
    description:
      "Being popular is especially important for people who love being in the company of others. It makes you feel liked and important. Popularity makes it easier to use your contacts or make new friends.",
    exerpt: "being liked or admired by many people",
    vote: 0,
    loss: 0,
  },
  {
    id: 10,
    name: "financial stability",
    description:
      "For people who value financial stability, money is important, but not the most important. It is a medium of exchange and is needed to fulfill your own needs and dreams. It is not an end in itself, but only an instrument needed to achieve it.",
    exerpt: "stable income, financial freedom",
    vote: 0,
    loss: 0,
  },
  {
    id: 11,
    name: "pleasure",
    description:
      "Everyone finds pleasure in something different. Indulging in pleasure allows you to break away from your daily routine. These are the moments when we can feel fulfilled. This is when we renew our energy for the next actions.",
    exerpt: "enjoyment, happiness, satisfaction",
    vote: 0,
    loss: 0,
  },
  {
    id: 12,
    name: "tradition",
    description:
      "Recognition of tradition means respect for customs and rituals practiced by older generations. Attachment to tradition may result from the need for constancy or belonging. Tradition is often associated with the religion professed.",
    exerpt: "respecting customs, practicing rites",
    vote: 0,
    loss: 0,
  },
  {
    id: 13,
    name: "fame",
    description:
      "Fame is often desired by people who love to be the center of attention. The desire for fame can come from the need to be popular or the desire to achieve the benefits of recognition.",
    exerpt: "being known or recognized by many people",
    vote: 0,
    loss: 0,
  },
  {
    id: 14,
    name: "trust",
    description:
      "We all have to rely on something. Sometimes it's family and friends. Sometimes business partners or the government. Trust is a particularly important value because many aspects of our daily life are based on it.",
    exerpt: "a belief in someone or something",
    vote: 0,
    loss: 0,
  },
  {
    id: 15,
    name: "privacy",
    description:
      "In today's world, privacy is still a desired value. Privacy-conscious people only provide information that they want to share publicly. They feel uncomfortable about being watched.",
    exerpt: "the right to have secrets, discretion",
    vote: 0,
    loss: 0,
  },
  {
    id: 16,
    name: "accountability",
    description:
      "Responsibility is a much-appreciated value when talking about relationships with other people. It is important both personally and professionally. We feel safer around people we can rely on. Dependability is often the basis of trust.",
    exerpt: "responsibility, dependability",
    vote: 0,
    loss: 0,
  },
  {
    id: 17,
    name: "challenge",
    description:
      "Taking up challenges is often the result of a strong need to test yourself. These are activities that require us to leave our comfort zone and face something new and unknown. They awaken our imagination and shape our character.",
    exerpt: "testing your own abilities, competition",
    vote: 0,
    loss: 0,
  },
  {
    id: 18,
    name: "adventure",
    description:
      "It is a passion for activities that cause excitement. Adventurers are not afraid to take risks. They are eager to explore and learn about the unknown. Their openness allows them to make new friends easily.",
    exerpt: "looking for exciting or risky activities",
    vote: 0,
    loss: 0,
  },
  {
    id: 19,
    name: "variety",
    description:
      "People who value diversity lead a very varied life, during which they will experience everything that caught their attention even for a moment. In the life of a person who loves diversity, there is only one thing you can be confident about - change.",
    exerpt: "frequent change, diversity",
    vote: 0,
    loss: 0,
  },
  {
    id: 20,
    name: "excitement",
    description:
      "Excitement and enthusiasm can attract people. People with such characteristics are often the spark that initiates many activities. There is always something they are working on or are planning to start. They are not afraid of taking up challenges and adventures.",
    exerpt: "great enthusiasm, eagerness",
    vote: 0,
    loss: 0,
  },
  {
    id: 21,
    name: "courage",
    description:
      "It's about being ready to follow your heart and acting according to your values. Courageous people are seldom satisfied with compromises. They take what they want from life or are determined to find a way to achieve it.",
    exerpt: "fearlessness, bravery",
    vote: 0,
    loss: 0,
  },
  {
    id: 22,
    name: "curiosity",
    description:
      "Curiosity is one of the traits that have had a huge impact on the shape of our civilization. Searching for answers to intriguing questions, in-depth knowledge of a subject, interest in the surrounding world are the characteristics of people who value curiosity.",
    exerpt: "willingness to explore and learn",
    vote: 0,
    loss: 0,
  },
  {
    id: 23,
    name: "creativity",
    description:
      "The imagination of creative people has no limits. They shape the world as we know it. They are never template minded and are not afraid to question the status quo. Creating is their passion, and creativity manifests itself in many aspects of everyday life.",
    exerpt: "imagination, inventiveness",
    vote: 0,
    loss: 0,
  },
  {
    id: 24,
    name: "reputation",
    description:
      "Reputation reflects our value in the eyes of others. It has a great influence on how we are treated by our surroundings. It can take a lot of work and effort to achieve the desired reputation, but it will make it easier for us to achieve our goals in relationships with others.",
    exerpt: "other people's opinion",
    vote: 0,
    loss: 0,
  },
  {
    id: 25,
    name: "respect",
    description:
      "It is a recognition of someone's achievements or attitude. We respect those people who have had a strong and positive impact on our lives. We often adopt them as role models and are eager to learn from them.",
    exerpt: "honor and care shown towards someone",
    vote: 0,
    loss: 0,
  },
  {
    id: 26,
    name: "authority",
    description:
      "Power gives great opportunities, but also requires great responsibility. It gives privileges not available to other people. When used wisely, it allows you to achieve ambitious goals. In bad hands, it can turn out to be destructive.",
    exerpt: "the right to lead and control",
    vote: 0,
    loss: 0,
  },
  {
    id: 27,
    name: "beauty",
    description:
      "Seeing beauty in the world around us gives a lot of joy. Creating beautiful things is sharing this joy with others. People who appreciate beauty usually like to take care of their appearance. They also pay a lot of attention to the appearance of others.",
    exerpt: "aesthetics, attractiveness",
    vote: 0,
    loss: 0,
  },
  {
    id: 28,
    name: "appreciation",
    description:
      "Appreciation is a significant respect for another person. Being appreciated always requires effort. Appreciation is given to people who have brought a lot of good in other people's lives or achieved something special with their own efforts.",
    exerpt: "recognition of value or worth",
    vote: 0,
    loss: 0,
  },
  {
    id: 29,
    name: "acceptance",
    description:
      "Acceptance is one of the most important human needs. It develops self-confidence and makes us feel that we mean something to others. The need for acceptance can have a strong impact on the decisions we make.",
    exerpt: "being included, approval",
    vote: 0,
    loss: 0,
  },
  {
    id: 30,
    name: "influence",
    description:
      "Having influence allows you to shape the mindset of other people. It is a powerful ability and therefore requires a lot of responsibility. Influencers have a unique chance of doing something good for many people.",
    exerpt: "having effect on people or things",
    vote: 0,
    loss: 0,
  },
  {
    id: 31,
    name: "uniqueness",
    description:
      "Each of us is unique, but some people like to emphasize it. Extraordinary people make the world a much more interesting place. They like to be noticed and they like to surprise. They avoid everything that is common and popular in favor of what is unique and unusual.",
    exerpt: "being particularly remarkable or unusual",
    vote: 0,
    loss: 0,
  },
  {
    id: 32,
    name: "authenticity",
    description:
      "Authentic persons do not have to prove anything to others. They are themselves in every situation. When asked for their opinion, they will give an honest answer, even if their opinion is not popular. They do not find themselves in an environment where lying or lack of honesty often occurs.",
    exerpt: "truthfulness, genuineness",
    vote: 0,
    loss: 0,
  },
  {
    id: 33,
    name: "love",
    description:
      "Love manifests itself in the interest and care of another person. Depending on who it is addressed to, it can take various forms. It is one of the most important human needs because everyone wants to love and be loved.",
    exerpt: "deep feeling of affection",
    vote: 0,
    loss: 0,
  },
  {
    id: 34,
    name: "family",
    description:
      "Family is a value that meets many of our needs simultaneously. We find love, security, self-esteem and development in it. Taking care of the family we have a great opportunity to positively influence the lives of our loved ones. In return we are generously endowed with love.",
    exerpt: "caring for loved ones",
    vote: 0,
    loss: 0,
  },
  {
    id: 35,
    name: "honesty",
    description:
      "Honesty is about expressing your true opinion openly. It makes our thoughts and actions coherent. Honesty is based on authenticity, mutual trust and has a huge impact on shaping relationships with other people.",
    exerpt: "sincerity, frankness",
    vote: 0,
    loss: 0,
  },
  {
    id: 36,
    name: "loyalty",
    description:
      "Loyalty is showing constant support to an individual or organization. Loyal people build their relationships based on trust. They conscientiously keep their commitment and expect the same from the other party.",
    exerpt: "faithfulness",
    vote: 0,
    loss: 0,
  },
  {
    id: 37,
    name: "forgiveness",
    description:
      "At the heart of forgiveness lies a deep faith in the goodness of another person. People willing to forgive want to live in harmony. They understand well that we all make mistakes and believe that everyone deserves a second chance.",
    exerpt: "willingness to forgive others",
    vote: 0,
    loss: 0,
  },
  {
    id: 38,
    name: "compassion",
    description:
      "Compassion manifests itself in seeing and understanding the suffering of the other being. People capable of compassion are not indifferent to human problems. When possible, they voluntarily provide help and support.",
    exerpt: "empathy, sympathy",
    vote: 0,
    loss: 0,
  },
  {
    id: 39,
    name: "friendship",
    description:
      "Friendship allows you to enjoy life in the company of kind people. It gives a sense of self-worth, acceptance and belonging. It teaches us to take care of the other person and share what we have to offer.",
    exerpt: "comradeship, companionship",
    vote: 0,
    loss: 0,
  },
  {
    id: 40,
    name: "growth",
    description:
      "Growth is an integral part of every person's life. The power of development lies in the ability to independently decide on its direction. It allows us to achieve personal desires and become what we want to be.",
    exerpt: "physical, intellectual and spiritual development",
    vote: 0,
    loss: 0,
  },
  {
    id: 41,
    name: "passion",
    description:
      "Passion is an activity in which we find real pleasure. People with passion are very excited when their interests are discussed. They can talk about them for hours. The effects of their work can be impressive because they put a lot of heart into it.",
    exerpt: "a vocation or loved hobby",
    vote: 0,
    loss: 0,
  },
  {
    id: 42,
    name: "excellence",
    description:
      "Excellence is a path that only a few follow. Every day they push their limits to improve their workshop and craftsmanship. Good or very good results are not satisfactory enough for them. The improvement process is as important as the end result itself.",
    exerpt: "mastery, perfection",
    vote: 0,
    loss: 0,
  },
  {
    id: 43,
    name: "determination",
    description:
      "It is a constant effort despite numerous difficulties and adversities. Thanks to determination people fulfill their ambitions. It allows them to survive difficult moments and move on in the direction they want to go.",
    exerpt: "persistence, perseverance",
    vote: 0,
    loss: 0,
  },
  {
    id: 44,
    name: "success",
    description:
      "Success confirms that the right decisions were made and effectively implemented. It contributes to building self-esteem and confidence. Achieving success brings a lot of satisfaction and can be a source of pride.",
    exerpt: "achieving desired results",
    vote: 0,
    loss: 0,
  },
  {
    id: 45,
    name: "independence",
    description:
      "Independence gives a sense of security and control. It also creates favourable conditions for growth. Those who value independence are reluctant to give control over their life to someone else.",
    exerpt: "self-reliance, self-sufficiency",
    vote: 0,
    loss: 0,
  },
  {
    id: 46,
    name: "religion",
    description:
      "Religion helps in finding the answer to the question about the meaning of life. Religious people often try to take an active part in the life of the local community centered around their religion, which allows them to experience a strong sense of belonging.",
    exerpt: "devoutness, faith",
    vote: 0,
    loss: 0,
  },
  {
    id: 47,
    name: "wisdom",
    description:
      "Wisdom comes from the knowledge and experience gained in life. It allows to objectively assess the situation and make the right choices. It is also a mature way of looking at the world and other people.",
    exerpt: "making good decisions and judgements",
    vote: 0,
    loss: 0,
  },
  {
    id: 48,
    name: "intelligence",
    description:
      "Intelligent people are guided by logic when making decisions. They are able to assess the situation well and prefer to rely on their own opinions. They are careful with the ideas and advice given to them. Intelligence makes it easier to adapt quickly to a changing situation.",
    exerpt: "logical thinking, quick learning",
    vote: 0,
    loss: 0,
  },
  {
    id: 49,
    name: "competence",
    description:
      "Competence is a high level of knowledge and skills in a given field. Competent people put a lot of effort into ensuring that the quality of their work meets the highest expectations. They are aware of the need for continuous self-improvement.",
    exerpt: "capability, expertise, skill",
    vote: 0,
    loss: 0,
  },
  {
    id: 50,
    name: "spirituality",
    description:
      "Spirituality makes us focus a lot of our attention on immaterial reality. It is a constant search for the meaning of life. It evolves with our inner development and the subsequent stages of life.",
    exerpt: "focusing on intangible aspects of life",
    vote: 0,
    loss: 0,
  },
  {
    id: 51,
    name: "ineer harmony",
    description:
      "Internal harmony and balance allow you to find relief in the hustle and bustle of the surrounding world. Thanks to them, we can still enjoy small things. Self-awareness is an important element on the way to achieving inner balance.",
    exerpt: "balance, self-fulfilment",
    vote: 0,
    loss: 0,
  },
  {
    id: 52,
    name: "ambition",
    description:
      "Ambition comes from a strong self-esteem. It manifests itself in setting goals that are difficult to achieve and their consistent realization. Ambitious people build their image through their own achievements.",
    exerpt: "aspiration, strong desire to succeed",
    vote: 0,
    loss: 0,
  },
  {
    id: 53,
    name: "contribution",
    description:
      "Making your own contribution gives satisfaction from participating in something important and needed by other people. It gives an opportunity to leave something valuable behind. It positively influences self-esteem and life satisfaction.",
    exerpt: "helping others to achieve a common goal",
    vote: 0,
    loss: 0,
  },
  {
    id: 54,
    name: "equality",
    description:
      "It is a belief that we all deserve equal rights and opportunities. Equality is to protect us from injustice and exclusion. Ensuring equality does not come easily and requires breaking down many barriers.",
    exerpt: "equal rights and opportunities for all",
    vote: 0,
    loss: 0,
  },
  {
    id: 55,
    name: "justice",
    description:
      "Social order is based on justice and honesty. Righteous people follow precisely defined principles in their lives. They expect the same from others. They generally have a very well-developed sense of morality.",
    exerpt: "fairness, integrity",
    vote: 0,
    loss: 0,
  },
  {
    id: 56,
    name: "meaningful work",
    description:
      "Having a valuable job allows you to positively influence the lives of others. It gives a sense of being needed and useful to society. Seeing the value in your work gives you a lot of energy to act and avoids professional burnout.",
    exerpt: "positive impact on other people's lives",
    vote: 0,
    loss: 0,
  },
  {
    id: 57,
    name: "teamwork",
    description:
      "Teamwork proves that more can be achieved by working with others than by acting alone. This is a key value for people working on very complex projects. Team problem solving allows you to achieve goals more efficiently.",
    exerpt: "collaboration, synergy",
    vote: 0,
    loss: 0,
  },
  {
    id: 58,
    name: "tolerance",
    description:
      "It is respect for other people, regardless of their views and lifestyle. The basis of tolerance is awareness of your own worth. People with open minds are not afraid of being different, and see value in diversity.",
    exerpt: "acceptance, openness, open-mindedness",
    vote: 0,
    loss: 0,
  },
  {
    id: 59,
    name: "commitment",
    description:
      "Commitment and involvement are very important values in working with other people. They build the image of a good employee and allow you to gain trust and respect. We are most willing to engage in things that are close to us and in line with our values.",
    exerpt: "engagement, support",
    vote: 0,
    loss: 0,
  },
  {
    id: 60,
    name: "ethics",
    description:
      "People who value ethics often stand guard over morality. They actively oppose unethical actions and are able to assess the situation well through a broader perspective. They are excellent at making objective judgments.",
    exerpt: "moral behavior",
    vote: 0,
    loss: 0,
  },
  {
    id: 61,
    name: "helpfulness",
    description:
      "Altruists put other people's needs above their own. They devote a large part of their lives to helping those in need. Thanks to their sensitivity and empathy they are not indifferent to the problems of others.",
    exerpt: "benevolence, service, altruism",
    vote: 0,
    loss: 0,
  },
  {
    id: 62,
    name: "freedom",
    description:
      "It is free will, which can freely manifest itself in actions taken and opinions expressed. People who value freedom want to live according to their own beliefs and principles. They do not like limitations and patterns.",
    exerpt: "liberty, freedom of action and thought",
    vote: 0,
    loss: 0,
  },
];

export default personalValues;
