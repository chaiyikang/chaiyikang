import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Title from "@/app/projects/project_components/title";
import Heading from "@/app/projects/project_components/heading";
import Paragraph from "@/app/projects/project_components/paragraph";
import Backhome from "@/app/projects/project_components/backhome";
import Figure from "../project_components/figure";
import TechStack from "../project_components/tech_stack";

export default function ProjectPage() {
	return (
		<>
			<Header />
			<main className="container mx-auto px-4 py-8">
				<article className="prose prose-invert lg:prose-xl mx-auto">
					<Title>Unsupervised learning for mapping of spatial gene expression data</Title>
					<Heading>Introduction / Abstract</Heading>
					<Paragraph>
						In this exploratory project, I used a machine learning pipeline to analyse{" "}
						<a className="text-blue-500 underline" href={"https://www.10xgenomics.com/datasets/mouse-brain-section-coronal-1-standard-1-1-0"} target={"_blank"}>
							10x Visium sample data of mouse brain section
						</a>
					</Paragraph>
					<Figure title={"Figure 1: Mouse Brain Coronal Section"} imageSrc={"/visium/fig1.png"}></Figure>
					<Paragraph>
						I used Principal Component Analysis (PCA) for dimensionality reduction of the gene expression features and graph-based clustering algorithms to reconstruct the tissue
						structure, without using spatial labelling data. I used differential expression analysis to validate the proposed structure, which coherently returned C1ql2 as the marker for
						the proposed region corresponding to the Dentate Gyrus.
					</Paragraph>
					<TechStack />
					<Heading>Data Preprocessing</Heading>
					<Paragraph>Spots with less than 500 distinct genes were filtered out as noise.</Paragraph>
					<Paragraph>Spots with at least 20% mitochondrial reads were also filtered out as they are indicative of cell death.</Paragraph>
					<Figure
						title={"Figure 2: Violin plots of genes per spot, RNA counts, and proportion of mitochondrial reads"}
						description={"The dataset did not contain any such low quality data ponts and no spots were removed."}
						imageSrc={"/visium/fig2.png"}
					></Figure>
					<Paragraph>
						Counts were normalised to 10,000 and a natural log + 1 transformation was applied to address heteroscedasticity and effectively coerce multiplicative fold-changes into additive
						changes, necessary for subsequent Euclidean distance calculations.
					</Paragraph>
					<Heading>Dimensionality Reduction</Heading>
					<Paragraph>
						The dataset runs into the issue of the curse of dimensionality since each spot has about 20,000 distinct genes. Therefore, feature selection was performed by selecting the top
						2,000 Highly Variable Genes. Then, Principal Component Analysis was used to compress these feature into 40 &quot;eigen-genes&quot;.
					</Paragraph>
					<Figure
						imageSrc={"/visium/fig3.png"}
						title={"Figure 3: Elbow plot of top 50 PCA component variance ratios"}
						description={'The "elbow" is found at around the 15th PCA component hence the choice of top 40 components is a conservative one that sufficiently captures the relevant signal'}
					></Figure>
					<Heading>Graph-based clustering</Heading>
					<Paragraph>
						With a now tractable dimension, a kNN graph (k = 10) was constructed using the PCA space. Then, the Leiden Algorithm (resolution 0.8) was used for community detection.
					</Paragraph>
					<Figure imageSrc={"/visium/fig4.png"} title={"Figure 4: UMAP visualisation of PCA space with clusters identified by Leiden Algorithm"}></Figure>
					<Heading>Results and validation</Heading>
					<Paragraph>
						In spite of the fact that these steps did not incorporate the use of spatial coordinate information, the algorithms successfully partitioned the tissue into sections visually
						coherent with the histological image. In particular, Cluster 8 forms the distinct C-shaped structure of the Dentate Gyrus.
					</Paragraph>
					<Figure
						imageSrc={"/visium/fig5.png"}
						title={"Figure 5: Proposed clusters superimposed on histological image"}
						description={
							"When the cluster-labelled spots are mapped back to their original position, we observe that the proposed labelling is spatially coherent without the use of spatial information."
						}
					></Figure>
					<Paragraph>
						To further validate the identification of this region, differential expression analysis using a &quot;One vs Rest t-test&quot; was conducted. The C1ql2 gene was identified as
						the most significantly different marker when compared to other clusters. Since C1ql2 is a known marker of the Dentate Gyrus, we can therefore confirm both visually and
						biologically that the algorithm pipeline had correctly identified the Dentate Gyrus.
					</Paragraph>
					<Figure imageSrc={"/visium/fig6.png"} title={"Figure 6: Expression levels of C1ql2 for all spots"}></Figure>
					<Heading>Conclusion</Heading>
					<Paragraph>
						This exploratory project demonstrated that unsupervised machine learning methods have the potential to reconstruct and identify structures in histological images by processing
						sequencing reads. This is an important application in spatial transcriptomics as automated annotation enables the future of automated digital pathology.
					</Paragraph>
				</article>
				<Backhome />
			</main>
			<Footer />
		</>
	);
}
