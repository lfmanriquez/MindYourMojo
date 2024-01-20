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
    name: "certainty",
    description:
      "Stabilization allows you to feel comfortable and safe. People who value certainty do not like to be surprised and prefer a predictable lifestyle. The reality they create is their asylum and provides peace of mind.",
    exerpt: "stability, orderliness, predictability",
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
];

export default personalValues;
