import { Flex, FlexProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { Footer, Header } from '.';

interface PageLayoutProps extends PropsWithChildren, FlexProps {
	useChakra?: boolean;
}

export default function PageLayout({
	children,
	useChakra,
	...props
}: PageLayoutProps) {
	if (useChakra) {
		return (
			<Flex minW="100vw" bg="navy.900" justifyContent="center">
				<Flex
					direction="column"
					alignItems="center"
					w="100%"
					maxW={{
						base: '100vw',
						md: '48rem',
						lg: '62rem',
						xl: '80rem',
						'2xl': '96rem',
					}}
					px={{ base: '16px', md: '24px', lg: '0px' }}
					{...props}
				>
					<Header />
					{children}
					<Footer />
				</Flex>
			</Flex>
		);
	}

	return (
		<Flex
			direction="column"
			alignItems="center"
			bg="navy.900"
			px="2"
			{...props}
		>
			<Header />
			{children}
			<Footer />
		</Flex>
	);
}
