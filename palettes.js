/**
 * Peace Mind Theme — Color Palettes
 * Edite este arquivo para personalizar ou adicionar novas paletas ao tema.
 *
 * Cada paleta contém:
 *   light       — cor de acento no modo claro (links, bullets, tags)
 *   dark        — cor de acento no modo escuro (links, bullets, tags)
 *   accentColor — cor de acento vívida usada no menu lateral (hover, borda ativa, ícones)
 *   bgLight     — cor de fundo no modo claro
 *   bgDark      — cor de fundo no modo escuro
 *   name        — nome exibido no seletor de paletas
 */
export const palettes = {
	sage: {
		light: "#8DA399",
		dark: "#A3B5A1",
		accentColor: "#6B9E8A",
		bgLight: "#F9F7F2",
		bgDark: "#23272A",
		sidebarLight: "#F0F4F2",
		sidebarDark: "#1E2224",
		headerLight: "#F0F4F2",
		headerDark: "#1E2224",
		name: "Zen Sage",
	},
	slate: {
		light: "#708090",
		dark: "#9CB4D8",
		accentColor: "#5B8DB8",
		bgLight: "#F2F4F7",
		bgDark: "#20242B",
		sidebarLight: "#E8ECF2",
		sidebarDark: "#1A1D23",
		headerLight: "#E8ECF2",
		headerDark: "#1A1D23",
		name: "Cool Slate",
	},
	sand: {
		light: "#C2B280",
		dark: "#E6D5B8",
		accentColor: "#B89A5A",
		bgLight: "#FDF9F0",
		bgDark: "#282622",
		sidebarLight: "#F7F1E6",
		sidebarDark: "#211F1C",
		headerLight: "#F7F1E6",
		headerDark: "#211F1C",
		name: "Warm Sand",
	},
	rose: {
		light: "#D8AFA9",
		dark: "#E6BEB8",
		accentColor: "#C4827A",
		bgLight: "#FAF2F1",
		bgDark: "#2B2322",
		sidebarLight: "#F5E9E8",
		sidebarDark: "#241D1C",
		headerLight: "#F5E9E8",
		headerDark: "#241D1C",
		name: "Desert Rose",
	},
	horizon: {
		light: "#4A90E2",
		dark: "#82B1FF",
		accentColor: "#1976D2",
		bgLight: "#F5F9FF",
		bgDark: "#1A1F26",
		sidebarLight: "#EBF3FF",
		sidebarDark: "#15191F",
		headerLight: "#EBF3FF",
		headerDark: "#15191F",
		name: "Infinite Horizon",
	},
	moss: {
		light: "#607D3B",
		dark: "#99B27C",
		accentColor: "#4E7A2B",
		bgLight: "#F6F8F2",
		bgDark: "#22281E",
		sidebarLight: "#EDF2E8",
		sidebarDark: "#1C2118",
		headerLight: "#EDF2E8",
		headerDark: "#1C2118",
		name: "Forest Moss",
	},
	clay: {
		light: "#B66A50",
		dark: "#D88C75",
		accentColor: "#A8503A",
		bgLight: "#F9F4F2",
		bgDark: "#28221E",
		sidebarLight: "#F2EAE6",
		sidebarDark: "#211C18",
		headerLight: "#F2EAE6",
		headerDark: "#211C18",
		name: "Soft Clay",
	},
};

/** Paleta ativa por padrão quando nenhuma configuração foi salva */
export const defaultPalette = "sage";
