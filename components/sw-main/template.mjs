const template = document.createElement("template");
// Reference: https://codepen.io/dubsaru/pen/WNwEyaW

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/shadow.css">
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1280">
		<defs>
			<linearGradient id="linear-gradient" x1="1976.31" y1="144.84" x2="2420.03" y2="588.56" gradientTransform="translate(3391.25 1486.3) rotate(-157.52)" gradientUnits="userSpaceOnUse">
				<stop offset="0" stop-color="#fff" stop-opacity="0" />
				<stop offset="0.3" stop-color="#fff" stop-opacity="0.04" />
				<stop offset="0.81" stop-color="#fff" stop-opacity="0.15" />
				<stop offset="1" stop-color="#fff" stop-opacity="0.2" />
			</linearGradient>
			<linearGradient id="linear-gradient-2" x1="2886.29" y1="1027.15" x2="2841.01" y2="498.04" gradientTransform="translate(4246.9 1690.37) rotate(-174.62)" gradientUnits="userSpaceOnUse">
				<stop offset="0" stop-color="#fff" stop-opacity="0" />
				<stop offset="0.26" stop-color="#fff" stop-opacity="0.02" />
				<stop offset="0.6" stop-color="#fff" stop-opacity="0.09" />
				<stop offset="0.97" stop-color="#fff" stop-opacity="0.19" />
				<stop offset="1" stop-color="#fff" stop-opacity="0.2" />
			</linearGradient>
		</defs>
		<g class="lines">
			<line id="Line_8" data-name="Line 8" class="cls-3" x1="596.31" y1="167.95" x2="479.31" y2="285.95" />
			<line id="Line_8-2" data-name="Line 8" class="cls-3" x1="293.31" y1="57.95" x2="176.31" y2="175.95" />
			<line id="Line_11" data-name="Line 11" class="cls-4" x1="865.31" y1="267.95" x2="808.31" y2="324.95" />
			<line id="Line_12" data-name="Line 12" class="cls-4" x1="1040.31" y1="197.95" x2="983.31" y2="254.95" />
			<line id="Line_13" data-name="Line 13" class="cls-4" x1="1606.31" y1="138.95" x2="1549.31" y2="195.95" />
			<line id="Line_14" data-name="Line 14" class="cls-4" x1="1782.31" y1="399.95" x2="1725.31" y2="456.95" />
			<line id="Line_15" data-name="Line 15" class="cls-4" x1="254.31" y1="485.95" x2="197.31" y2="542.95" />
			<line id="Line_9" data-name="Line 9" class="cls-3" x1="1448.69" y1="2.57" x2="1339.31" y2="112.95" />
			<line id="Line_10" data-name="Line 10" class="cls-3" x1="1424.31" y1="381.95" x2="1307.31" y2="499.95" />
			<line id="Line_8-3" data-name="Line 8" class="cls-3" x1="1869.31" y1="958.95" x2="1752.31" y2="1076.95" />
			<line id="Line_8-4" data-name="Line 8" class="cls-3" x1="1337.31" y1="987.95" x2="1220.31" y2="1105.95" />
			<line id="Line_11-2" data-name="Line 11" class="cls-4" x1="176.31" y1="1072.95" x2="119.31" y2="1129.95" />
			<line id="Line_12-2" data-name="Line 12" class="cls-4" x1="351.31" y1="1002.95" x2="294.31" y2="1059.95" />
			<line id="Line_13-2" data-name="Line 13" class="cls-4" x1="783.31" y1="934.95" x2="726.31" y2="991.95" />
			<line id="Line_14-2" data-name="Line 14" class="cls-4" x1="1121.31" y1="1002.95" x2="1064.31" y2="1059.95" />
			<line id="Line_15-2" data-name="Line 15" class="cls-4" x1="1650.31" y1="1183.95" x2="1593.31" y2="1240.95" />
			<line id="Line_9-2" data-name="Line 9" class="cls-3" x1="546.69" y1="911.57" x2="437.31" y2="1021.95" />
			<line id="Line_10-2" data-name="Line 10" class="cls-3" x1="888.31" y1="1088.95" x2="771.31" y2="1206.95" />
			<line id="Line_8-5" data-name="Line 8" class="cls-3" x1="140.31" y1="729.95" x2="23.31" y2="847.95" />
			<line id="Line_11-3" data-name="Line 11" class="cls-4" x1="304.31" y1="847.95" x2="247.31" y2="904.95" />
			<line id="Line_12-3" data-name="Line 12" class="cls-4" x1="479.31" y1="590.95" x2="422.31" y2="647.95" />
			<line id="Line_13-3" data-name="Line 13" class="cls-4" x1="911.31" y1="642.95" x2="854.31" y2="699.95" />
			<line id="Line_14-3" data-name="Line 14" class="cls-4" x1="1394.31" y1="681.95" x2="1337.31" y2="738.95" />
			<line id="Line_9-3" data-name="Line 9" class="cls-3" x1="754.69" y1="541.57" x2="645.31" y2="651.95" />
			<line id="Line_10-3" data-name="Line 10" class="cls-3" x1="1016.31" y1="796.95" x2="899.31" y2="914.95" />
		</g>
		<path class="cls-1" d="M1291.3,323.08C1227.84,450.13,1166.51,470.77,1211,580.8c40,98.91,315.87,148.85,337.73-21.95,22.61-176.55,85.67-185.47,237.53-211.21S1876.1,74,1652.14,87.38c-198.75,11.9-236.52-115.67-314.81-46.68S1354.76,196,1291.3,323.08Z" />
		<path class="cls-2" d="M1394,892.5c-57.31,0-87-83-115-138s-118-66-118-146,181.86-14.39,255-152.74,349-138.26,336,12.74,178.59,336.58-60.71,333.73S1449,892.5,1394,892.5Z" />
	</svg>
    <slot></slot>
    <footer>
        <p>TBA</p>
    </footer>
`;

export default template;