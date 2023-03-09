import {Button, Input, Link} from "@/components/atoms";
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaLinkedin,
	FaSistrix,
} from "react-icons/fa";
import {
	IoPersonOutline,
	IoBagHandleOutline,
	IoHeartOutline,
	IoCloseOutline,
	IoAddOutline,
	IoRemove,
	IoCaretBackOutline,
} from "react-icons/io5";
import Image, {StaticImageData} from "next/image";
import logo from "../../../assets/logo.svg";

import SubBanner1 from "../../../assets/sub-banner/electronics-banner-1.jpg";
import SubBanner2 from "../../../assets/sub-banner/electronics-banner-2.jpg";
import SubBanner3 from "../../../assets/sub-banner/mens-banner.jpg";
import SubBanner4 from "../../../assets/sub-banner/womens-banner.jpg";
import {Search, SocialList} from "@/components/molecules";
import "./styles.scss";

const Electronics = [
	"Desktop",
	"Laptop",
	"Camera",
	"Tablet",
	"Headphone",
	SubBanner1,
];

const Mens = ["Formal", "Casual", "Sports", "Jacket", "Sunglasses", SubBanner3];

const Womens = ["Formal", "Casual", "Perfume", "Cosmetics", "Bags", SubBanner4];

const Electronics2 = [
	"Smart Watch",
	"Smart TV",
	"Keyboard",
	"Mouse",
	"Microphone",
	SubBanner2,
];

type TCategory = {
	[key: string]: (StaticImageData | string)[];
};

const Categories: TCategory = {
	electronics: Electronics,
	mens: Mens,
	womens: Womens,
	electronics2: Electronics2,
};

type TMenuCategory = {
	[key: string]: string[];
};

const menuCategory: TMenuCategory = {
	men: ["Shirt", "Shorts & Jeans", "Safety Shoes", "Wallet"],
	women: ["Dress & Frock", "Earrings", "Necklace", "Makeup Kit"],
	jewelry: ["Earrings", "Couple Rings", "Necklace", "Bracelets"],
	perfume: [
		"Clothes Perfume",
		"Deodorant",
		"Flower Fragrance",
		"Air Freshener",
	],
};

const menuBottom: TMenuCategory = {
	languages: ["English", "Espa&ntilde;ol", "Fren&ccedil;h"],
	currency: ["USD &dollar;", "EUR &euro;"],
};

export default function Header() {
	return (
		<header className="t-header">
			<div className="t-header-top">
				<div className="container">
					<SocialList className="t-header-top-social" />

					<div className="t-header-top-alert">
						<p>
							<b> Free Shipping </b>
							This Week Order Over - $55
						</p>
					</div>

					<div className="t-header-top-actions">
						<select name="currency">
							<option value="usd">USD &#36;</option>
							<option value="eur">EUR &euro;</option>
						</select>

						<select name="language">
							<option value="en-US">English</option>
							<option value="es-ES">Espa&ntilde;ol</option>
							<option value="fr">Fran&ccedil;ais</option>
						</select>
					</div>
				</div>
			</div>

			{/* header-main */}
			<div className="t-header-main">
				<div className="container">
					<Search
						className="t-header-main-search"
						srcImage={logo}
						altImage="An logo"
						placeholder="Enter your searching ..."
					/>

					<div className="t-header-main-actions">
						<Button className="t-header-main-actions-btn">
							<IoHeartOutline />
							<span className="t-header-main-actions-btn-count">0</span>
						</Button>

						<Button className="t-header-main-actions-btn">
							<IoBagHandleOutline />
							<span className="t-header-main-actions-btn-count">0</span>
						</Button>

						<Button className="t-header-main-actions-btn">
							<IoPersonOutline />
						</Button>
					</div>
				</div>
			</div>

			<nav className="desktop-navigation-menu">
				<div className="container">
					<ul className="desktop-menu-category-list">
						<li className="menu-category">
							<Link to="#"> Home </Link>
						</li>

						<li className="menu-category">
							<Link to="">Categories</Link>

							<div className="dropdown-panel">
								{Object.keys(Categories).map((category: string) => {
									const subCategory = Categories[category];
									return (
										<ul className="dropdown-panel-list" key={category}>
											<>
												<li className="menu-title">
													<Link to=""> {category} </Link>
												</li>

												{subCategory.map((el: any, index: number) => {
													return (
														<li key={el} className="panel-list-item">
															{index === subCategory.length - 1 ? (
																<Link to="">
																	<Image
																		src={el}
																		alt={`image ${el}`}
																		width={250}
																		height={119}
																	/>
																</Link>
															) : (
																<Link to="">{el}</Link>
															)}
														</li>
													);
												})}
											</>
										</ul>
									);
								})}
							</div>
						</li>

						{Object.keys(menuCategory).map(category => {
							const subCategory = menuCategory[category];
							return (
								<li className="menu-category" key={category}>
									<Link to="" className="menu-title">
										{category}
									</Link>

									{subCategory.map(el => (
										<ul className="dropdown-list" key={el}>
											<li className="dropdown-item">
												<Link to="#">{el}</Link>
											</li>
										</ul>
									))}
								</li>
							);
						})}
						<li className="menu-category">
							<Link className="menu-title" to="">
								Blog
							</Link>
						</li>
						<li className="menu-category">
							<Link className="menu-title" to="">
								Hot Offers
							</Link>
						</li>
					</ul>
				</div>
			</nav>

			<nav className="mobile-navigation-menu has-scrollbar">
				<div className="menu-top">
					<h2 className="menu-title">Menu</h2>
					<Button className="menu-close-btn">
						<IoCloseOutline />
					</Button>
				</div>

				<ul className="mobile-menu-category-list">
					<li className="menu-category">
						<Link to="" className="menu-title">
							Home
						</Link>
					</li>

					{Object.keys(menuCategory).map(category => {
						const subCategory = menuCategory[category];
						return (
							<li className="menu-category" key={category}>
								<Button>
									<p className="menu-title">{category}</p>
									<div>
										<IoAddOutline className="add-icon" />
										<IoRemove className="remove-icon" />
									</div>
								</Button>

								<ul className="submenu-category-list">
									{subCategory.map((el, idx) => (
										<li key={idx} className="submenu-category">
											<Link to="" className="submenu-title">
												{el}
											</Link>
										</li>
									))}
								</ul>
							</li>
						);
					})}

					<li className="menu-category">
						<Link to="" className="menu-title">
							Blog
						</Link>
					</li>

					<li className="menu-category">
						<Link to="" className="menu-title">
							Hot Offers
						</Link>
					</li>
				</ul>

				<div className="menu-bottom">
					<ul className="menu-category-list">
						{Object.keys(menuBottom).map(val => {
							const subMenu = menuBottom[val];
							return (
								<li className="menu-category" key={val}>
									<Button className="accordion-menu">
										<p className="menu-title"> {val} </p>
										<IoCaretBackOutline />
									</Button>

									<ul className="submenu-category-list">
										{subMenu.map(el => (
											<li className="submenu-category" key={el}>
												<Link to="">{el}</Link>
											</li>
										))}
									</ul>
								</li>
							);
						})}
					</ul>

					<ul className="menu-social-container">
						<li>
							<Link target to={""}>
								<FaFacebook />
							</Link>
						</li>
						<li>
							<Link target to="">
								<FaTwitter />
							</Link>
						</li>
						<li>
							<Link target to="">
								<FaInstagram />
							</Link>
						</li>
						<li>
							<Link target to="">
								<FaLinkedin />
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}
