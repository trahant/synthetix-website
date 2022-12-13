import { Icon, IconProps } from '@chakra-ui/react';

const GasStation = ({ width = '55', height = '55', ...props }: IconProps) => {
	return (
		<Icon
			width="55"
			height="55"
			viewBox="0 0 55 55"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M13.7503 43.5417V8.02083C13.741 7.87749 13.7605 7.73374 13.8076 7.59804C13.8547 7.46235 13.9285 7.33744 14.0245 7.23067C14.1206 7.1239 14.2371 7.03744 14.3671 6.97635C14.4971 6.91527 14.638 6.88081 14.7815 6.875H37.9274C38.0709 6.88081 38.2118 6.91527 38.3418 6.97635C38.4718 7.03744 38.5883 7.1239 38.6844 7.23067C38.7805 7.33744 38.8542 7.46235 38.9013 7.59804C38.9484 7.73374 38.9679 7.87749 38.9586 8.02083V43.5417"
				stroke="#00D1FF"
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M40.8606 43.5417H11.8481C11.6329 43.5417 11.4585 43.7161 11.4585 43.9312V47.7354C11.4585 47.9506 11.6329 48.125 11.8481 48.125H40.8606C41.0757 48.125 41.2502 47.9506 41.2502 47.7354V43.9312C41.2502 43.7161 41.0757 43.5417 40.8606 43.5417Z"
				stroke="#00D1FF"
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M33.9168 11.4583H18.7918C18.5387 11.4583 18.3335 11.6635 18.3335 11.9167V22.4583C18.3335 22.7115 18.5387 22.9167 18.7918 22.9167H33.9168C34.17 22.9167 34.3752 22.7115 34.3752 22.4583V11.9167C34.3752 11.6635 34.17 11.4583 33.9168 11.4583Z"
				stroke="#00D1FF"
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M38.9585 25.2083H42.396C42.6999 25.2083 42.9913 25.3291 43.2062 25.5439C43.4211 25.7588 43.5418 26.0503 43.5418 26.3542V38.9583C43.5418 39.5661 43.7833 40.149 44.213 40.5788C44.6428 41.0086 45.2257 41.25 45.8335 41.25C46.4413 41.25 47.0242 41.0086 47.454 40.5788C47.8837 40.149 48.1252 39.5661 48.1252 38.9583V19.2729C48.1226 18.6717 47.884 18.0956 47.4606 17.6688L43.5418 13.75"
				stroke="#00D1FF"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M48.1252 20.625H45.8335V16.0417"
				stroke="#00D1FF"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Icon>
	);
};

export default GasStation;
