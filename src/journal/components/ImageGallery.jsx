import { ImageList, ImageListItem } from "@mui/material";
import { galleryData } from "../data/galleryData";

export const ImageGallery = () => {
	return (
		<ImageList
			sx={{ width: "100%", height: "100%" }}
			cols={3}
			rowHeight={164}
		>
			{galleryData.map((item) => (
				<ImageListItem key={item.img}>
					<img
						src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
						srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
						alt={item.title}
						loading="lazy"
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
};
