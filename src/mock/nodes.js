export default [
  {
    position: 'CTO',
    employees: [
      {
        position: 'VP Engineering',
        employees: [
          {
            position: 'Team Lead',
            employees: [
              {
                position: 'Backend Engineer',
                employees: [],
                path: {
                  source: [
                    'Jonas',
                    'employees',
                    'Sophie',
                    'employees',
                    'Nick',
                    'employees',
                    'Pete',
                  ],
                  nodes: [0, 'employees', 0, 'employees', 0, 'employees', 0],
                },
                expanded: true,
                name: 'Pete',
              },
              {
                position: 'Fronted Engineer',
                employees: [],
                path: {
                  source: [
                    'Jonas',
                    'employees',
                    'Sophie',
                    'employees',
                    'Nick',
                    'employees',
                    'Barbara',
                  ],
                  nodes: [0, 'employees', 0, 'employees', 0, 'employees', 1],
                },
                expanded: true,
                name: 'Barbara',
              },
              {
                position: 'Fronted Engineer',
                employees: [],
                path: {
                  source: [
                    'Jonas',
                    'employees',
                    'Sophie',
                    'employees',
                    'Nick',
                    'employees',
                    'Vanessa',
                  ],
                  nodes: [0, 'employees', 0, 'employees', 0, 'employees', 2],
                },
                expanded: true,
                name: 'Vanessa',
              },
            ],
            path: {
              source: ['Jonas', 'employees', 'Sophie', 'employees', 'Nick'],
              nodes: [0, 'employees', 0, 'employees', 0],
            },
            expanded: true,
            name: 'Nick',
          },
          {
            position: 'Team Lead',
            employees: [
              {
                position: 'Backend Engineer',
                employees: [],
                path: {
                  source: [
                    'Jonas',
                    'employees',
                    'Sophie',
                    'employees',
                    'Phill',
                    'employees',
                    'Amanda',
                  ],
                  nodes: [0, 'employees', 0, 'employees', 1, 'employees', 0],
                },
                expanded: true,
                name: 'Amanda',
              },
              {
                position: 'Backend Engineer',
                employees: [
                  {
                    position: 'Backend Engineer',
                    employees: [
                      {
                        position: 'Backend Engineer',
                        employees: [],
                        path: {
                          source: [
                            'Jonas',
                            'employees',
                            'Sophie',
                            'employees',
                            'Phill',
                            'employees',
                            'Christian',
                            'employees',
                            'Ana',
                            'employees',
                            'Katarina',
                          ],
                          nodes: [
                            0,
                            'employees',
                            0,
                            'employees',
                            1,
                            'employees',
                            1,
                            'employees',
                            0,
                            'employees',
                            0,
                          ],
                        },
                        expanded: true,
                        name: 'Katarina',
                      },
                    ],
                    path: {
                      source: [
                        'Jonas',
                        'employees',
                        'Sophie',
                        'employees',
                        'Phill',
                        'employees',
                        'Christian',
                        'employees',
                        'Ana',
                      ],
                      nodes: [
                        0,
                        'employees',
                        0,
                        'employees',
                        1,
                        'employees',
                        1,
                        'employees',
                        0,
                      ],
                    },
                    expanded: true,
                    name: 'Ana',
                  },
                ],
                path: {
                  source: [
                    'Jonas',
                    'employees',
                    'Sophie',
                    'employees',
                    'Phill',
                    'employees',
                    'Christian',
                  ],
                  nodes: [0, 'employees', 0, 'employees', 1, 'employees', 1],
                },
                expanded: true,
                name: 'Christian',
              },
            ],
            path: {
              source: ['Jonas', 'employees', 'Sophie', 'employees', 'Phill'],
              nodes: [0, 'employees', 0, 'employees', 1],
            },
            expanded: true,
            name: 'Phill',
          },
        ],
        path: {
          source: ['Jonas', 'employees', 'Sophie'],
          nodes: [0, 'employees', 0],
        },
        expanded: true,
        name: 'Sophie',
      },
    ],
    path: {
      source: ['Jonas'],
      nodes: [0],
    },
    expanded: true,
    name: 'Jonas',
  },
  {
    position: 'CEO',
    employees: [
      {
        position: 'Backend Engineer',
        employees: [
          {
            position: 'Backend Engineer',
            employees: [],
            path: {
              source: [
                'Fernando',
                'employees',
                'Derik',
                'employees',
                'Jefferson',
              ],
              nodes: [1, 'employees', 0, 'employees', 0],
            },
            expanded: true,
            name: 'Jefferson',
          },
          {
            position: 'Backend Engineer',
            employees: [],
            path: {
              source: ['Fernando', 'employees', 'Derik', 'employees', 'Carina'],
              nodes: [1, 'employees', 0, 'employees', 1],
            },
            expanded: true,
            name: 'Carina',
          },
        ],
        path: {
          source: ['Fernando', 'employees', 'Derik'],
          nodes: [1, 'employees', 0],
        },
        expanded: true,
        name: 'Derik',
      },
      {
        position: 'Backend Engineer',
        employees: [],
        path: {
          source: ['Fernando', 'employees', 'Jasmina'],
          nodes: [1, 'employees', 1],
        },
        expanded: true,
        name: 'Jasmina',
      },
      {
        position: 'Backend Engineer',
        employees: [],
        path: {
          source: ['Fernando', 'employees', 'Natasha'],
          nodes: [1, 'employees', 2],
        },
        expanded: true,
        name: 'Natasha',
      },
    ],
    path: {
      source: ['Fernando'],
      nodes: [1],
    },
    expanded: true,
    name: 'Fernando',
  },
];
