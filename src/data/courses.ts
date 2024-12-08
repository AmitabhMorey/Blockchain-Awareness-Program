export const courses = [
  {
    id: '1',
    title: 'Blockchain Fundamentals',
    description: 'Learn the basic concepts of blockchain technology, including distributed ledgers, consensus mechanisms, and cryptography.',
    level: 'Beginner',
    duration: '1 week',
    modules: [
      {
        id: 'm1',
        title: 'Day 1-2: Introduction to Blockchain',
        completed: false,
        content: 'Understanding blockchain architecture, distributed ledger technology, and how blocks are connected. Hands-on exercise: Create a simple chain of blocks using Python.'
      },
      {
        id: 'm2',
        title: 'Day 3-4: Cryptography Essentials',
        completed: false,
        content: 'Deep dive into hash functions, public-key cryptography, and digital signatures. Practice exercise: Implement basic cryptographic functions and create digital signatures.'
      },
      {
        id: 'm3',
        title: 'Day 5-7: Consensus Mechanisms',
        completed: false,
        content: 'Explore Proof of Work, Proof of Stake, and practical consensus implementations. Final project: Build a basic consensus mechanism simulator.'
      }
    ]
  },
  {
    id: '2',
    title: 'Smart Contracts Development',
    description: 'Master the fundamentals of smart contract development with Solidity and understand best security practices.',
    level: 'Intermediate',
    duration: '1 week',
    modules: [
      {
        id: 'm1',
        title: 'Day 1-3: Solidity Fundamentals',
        completed: false,
        content: 'Learn Solidity syntax, data types, functions, and contract structure. Practice exercise: Create a basic token contract.'
      },
      {
        id: 'm2',
        title: 'Day 4-5: Smart Contract Security',
        completed: false,
        content: 'Understanding common vulnerabilities, security patterns, and best practices. Lab exercise: Identify and fix security issues in sample contracts.'
      },
      {
        id: 'm3',
        title: 'Day 6-7: DApp Integration',
        completed: false,
        content: 'Connect smart contracts with front-end applications, handle events, and manage transactions. Final project: Build a simple decentralized application.'
      }
    ]
  },
  {
    id: '3',
    title: 'Advanced Blockchain Architecture',
    description: 'Deep dive into advanced blockchain concepts, scalability solutions, and enterprise blockchain development.',
    level: 'Advanced',
    duration: '1 week',
    modules: [
      {
        id: 'm1',
        title: 'Day 1-2: Layer 2 Solutions',
        completed: false,
        content: 'Explore state channels, sidechains, rollups, and other scaling solutions. Practice exercise: Implement a basic payment channel.'
      },
      {
        id: 'm2',
        title: 'Day 3-4: Enterprise Blockchain',
        completed: false,
        content: 'Study Hyperledger Fabric architecture, chaincode development, and private networks. Lab work: Set up a private blockchain network.'
      },
      {
        id: 'm3',
        title: 'Day 5-6: Cross-Chain Protocols',
        completed: false,
        content: 'Understanding atomic swaps, bridges, and cross-chain communication protocols. Workshop: Implement a basic bridge mechanism.'
      },
      {
        id: 'm4',
        title: 'Day 7: Advanced Security',
        completed: false,
        content: 'Deep dive into zero-knowledge proofs, secure multi-party computation, and advanced cryptographic concepts. Final project: Implement a privacy-preserving transaction mechanism.'
      }
    ]
  }
];