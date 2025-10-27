

// HRMS sidebar content, using string keys that correspond to the 'Icons' object.
export const navItems: Item[] = [
  {
    title: 'Dashboard',
 
  },

  {
    title: 'Certifications',
    url: '/certifications',
    icon: 'post',
    isActive: false,
    shortcut: ['d', 'c'],
    items: [
      {
        title: 'Certificates & Letters',
        url: '/certifications/letters',
        icon: 'page',
        shortcut: ['c', 'l']
      },
      {
        title: 'Document Verification',
        url: '/certifications/verification',
        icon: 'userCheck',
        shortcut: ['d', 'v']
      },
      {
        title: 'ID Card Management',
        url: '/certifications/id-cards',
        icon: 'idCard',
        shortcut: ['i', 'm']
      }
    ]
  },
  {
    title: 'Payroll',
    url: '/payroll',
    icon: 'billing',
    isActive: false,
    shortcut: ['p', 'y'],
    items: [
      {
        title: 'Process Payroll',
        url: '/payroll/process',
        icon: 'dollar',
        shortcut: ['p', 'p']
      },
      {
        title: 'Bonuses & Incentives',
        url: '/payroll/bonuses',
        icon: 'add',
        shortcut: ['b', 'i']
      },
      {
        title: 'Deductions & Taxes',
        url: '/payroll/deductions',
        icon: 'arrowRight',
        shortcut: ['d', 't']
      },
      {
        title: 'Benefits & Insurance',
        url: '/payroll/benefits',
        icon: 'settings',
        shortcut: ['b', 'i']
      }
    ]
  },

  {
    title: 'Statistic Reports',
    url: '/reports',
    icon: 'analytics',
    isActive: false,
    shortcut: ['r', 'p'],
    items: [
      {
        title: 'Recruitment Reports',
        url: '/reports/recruitment',
        icon: 'chart',
        shortcut: ['r', 'r']
      },
      {
        title: 'Employee Reports',
        url: '/reports/employees',
        icon: 'chart',
        shortcut: ['e', 'r']
      },
      {
        title: 'Payroll Reports',
        url: '/reports/payroll',
        icon: 'chart',
        shortcut: ['p', 'r']
      }
    ]
  },

  {
    title: 'Support',
    url: '/support',
    icon: 'headset',
    isActive: false,
    shortcut: ['s', 'u'],
    items: [
      {
        title: 'Help & Guides',
        url: '/support/help',
        icon: 'page',
        shortcut: ['h', 'g']
      },
      {
        title: 'Contact HR/IT',
        url: '/support/contact',
        icon: 'mail',
        shortcut: ['c', 'h']
      }
    ]
  }
];
