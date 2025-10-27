import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SignIn as ClerkSignInForm } from '@clerk/nextjs';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { 
    IconStar, 
    IconLock, 
    IconForms, 
    IconPalette, 
    IconDoor, 
    IconServer, 
    IconLayoutKanban, 
    IconTable,
    IconRocket 
} from '@tabler/icons-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Authentication',
    description: 'Authentication forms built using the components.'
};

export default function SignInViewPage({ stars }: { stars: number }) {
    // Define features with corresponding icons and descriptions
    const features = [
  { icon: IconLock, name: 'Clerk Auth', description: 'Secure and seamless Authentication.' },
  { icon: IconForms, name: 'Zod Validation', description: 'Type-safe, clean forms.' },
  { icon: IconPalette, name: 'Dynamic Themes', description: 'Multi-variant colors to match organization styles' },
  { icon: IconDoor, name: 'Role Control', description: 'Multi-level system: Admin, Super-admin & Sub-admins' },
  { icon: IconServer, name: 'Data Center Ready', description: 'Integrate effortlessly to any Sql or NoSql databases' },
  { icon: IconLayoutKanban, name: 'Kanban Dashboard', description: 'Visual workflow management. ' },
  // { icon: IconTable, name: 'TanStack Tables', description: 'Fast, dynamic data views.' },
];


    return (
        <div className='relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
            <Link
                href='/examples/authentication'
                className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'absolute top-4 right-4 hidden md:top-8 md:right-8'
                )}
            >
                Login
            </Link>
            
            {/* -------------------------------------------------------------
              LEFT SIDEBAR: Advertisment Board with 2-Column Table
              -------------------------------------------------------------
            */}
            <div className='bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r'>
                <div className='absolute inset-0 bg-zinc-900' />
                
                {/* Subtle Background Pattern (for texture) */}
                <svg 
                    className="absolute inset-0 z-10 opacity-5" 
                    viewBox="0 0 100 100" 
                    preserveAspectRatio="none" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="100" height="100" fill="url(#pattern0)"/>
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <path d="M0 0H1V1H0V0ZM0 0.5H1V1H0V0.5ZM0.5 0H1V1H0.5V0Z" fill="white" opacity="0.05"/>
                        </pattern>
                    </defs>
                </svg>

                {/* Header/Branding */}
                {/* <div className='relative z-20 flex items-center text-lg font-medium mb-8'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='mr-2 h-6 w-6'
                    >
                        <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
                    </svg>
                    Rohith Saravanan - HRMS Project
                </div> */}
                
                {/* Main Value Proposition */}
                <div className='relative z-20 mt-10 '>
                    <h1 className='text-4xl font-extrabold mb-3 leading-tight mb-10'> 
                        HRMS <span className="text-orange-400">Kick-Starter</span>
                    </h1>
                    <p className='text-base font-light text-gray-300 border-l-4 border-yellow-600 pl-4 mb-8 italic'>
                        The <span className="text-orange-400">free start template </span> for building customized, efficient HRMS solutions for any organization.
                    </p>
                </div>
                
                {/* Feature List as a Table */}
                <div className='relative z-20 mt-6'>
                    <h2 className='text-xl font-bold mb-4 text-gray-200 ml-2'>
                        Prebuild Massive Features
                    </h2>
                    
                    {/* Minimal Table Structure with two explicit columns */}
                    <div className='w-full ml-2'>
                        <table className='w-full border-collapse'>
                            <tbody>
                                {features.map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                        <tr 
                                            key={index} 
                                            className='border-b border-gray-700 last:border-b-0' 
                                        >
                                            {/* Column 1: Icon and Feature Name (40% width) */}
                                            <td className='py-3 pr-4 align-top w-[40%]'>
                                                <div className="flex items-center">
                                                    <Icon className='size-5 text-orange-400 flex-shrink-0' /> 
                                                    <strong className='font-semibold text-white ml-2 text-sm'>{feature.name}</strong> 
                                                </div>
                                            </td>
                                            {/* Column 2: Description (60% width) */}
                                            <td className='py-3 text-sm text-gray-400 align-top w-[60%]'>
                                                {feature.description}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                {/* Footer/Call to Action */}
                <div className='relative z-20 mt-auto pt-10'>
                  
                    <blockquote className='space-y-2'>
                        <footer className='text-base text-right'>
                          <Link
                        className={cn('group inline-flex hover:text-orange-200')}
                        target='_blank'
                        href={'https://github.com/rohith200589'}
                    >
                            
                            <p className='text-sm text-gray-400 mt-1'>Made with Love by <span className="text-orange-400">Rohith Saravanan</span></p>
                        </Link>
                        </footer>
                    </blockquote>
                </div>
            </div>
            
            {/* -------------------------------------------------------------
              RIGHT SIDE: Sign-In Form (Unchanged)
              -------------------------------------------------------------
            */}
            <div className='flex h-full items-center justify-center p-4 lg:p-8'>
                <div className='flex w-full max-w-md flex-col items-center justify-center space-y-6'>
                    {/* github link  */}
                    <Link
                        className={cn('group inline-flex hover:text-orange-200')}
                        target='_blank'
                        href={'https://github.com/rohith200589'}
                    >
                        <div className='flex items-center'>
                            <span className='ml-1 inline'>Connect with me on </span>{' '}
                             <GitHubLogoIcon className='size-5 ml-2' />
                        </div>
                        {/* <div className='ml-2 flex items-center gap-1 text-sm md:flex'>
                            <IconStar
                                className='size-4 text-gray-500 transition-all duration-300 group-hover:text-orange-300'
                                fill='currentColor'
                            />
                            <span className='font-display font-medium'>{stars}</span>
                        </div> */}
                    </Link>
                    <ClerkSignInForm
                        initialValues={{
                            emailAddress: 'your_mail+clerk_test@example.com'
                        }}
                    />

                    <p className='text-muted-foreground px-8 text-center text-sm'>
                        By clicking continue, you agree to our{' '}
                        <Link
                            href='/terms'
                            className='hover:text-primary underline underline-offset-4'
                        >
                            Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link
                            href='/privacy'
                            className='hover:text-primary underline underline-offset-4'
                        >
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}