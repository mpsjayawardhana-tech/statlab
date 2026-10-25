window.STAT_COURSE = {
 "chapters": [
  {
   "id": "math-language",
   "title": "00 · Maths language rescue",
   "tag": "FOUNDATION",
   "minutes": 12,
   "source": [],
   "summary": "ජීවිතේ පළවෙනි පාරට symbols දකින කෙනෙක්ට: පද, powers, roots, fractions, Σ, Greek letters, equations. මේවා තේරුණොත් ඉතුරු Stat අඩක් ලේසියි.",
   "concepts": [
    {
     "h": "Variable vs constant",
     "b": "x හෝ θ කියන්නේ වෙනස් විය හැකි/නොදන්නා අගයක්. 3 වගේ ස්ථිර අගය constant. Equation එකේ = දෙපස සමබරයි.",
     "f": "2x + 3 = 11  ⇒  x = (11−3)/2 = 4",
     "k": "දෙපසම එකම operation කරන්න."
    },
    {
     "h": "Powers and roots",
     "b": "x² = x×x. √x යනු square එක ඉවත් කරන opposite operation. σ² = variance නම් σ = √variance.",
     "f": "4² = 16; √16 = 4; x⁻¹ = 1/x",
     "k": "n⁻¹ කියන්නේ −n නොවේ!"
    },
    {
     "h": "Fractions and brackets",
     "b": "a/b means a ÷ b. (a+b)/c යනු a හා b දෙකම c න් බෙදීම.",
     "f": "(3+5)/4 = 2; 1/2 + 1/3 = 5/6",
     "k": "ලබාදෙන දෙය මුලින්ම bracket අනුව සරල කරන්න."
    },
    {
     "h": "Summation Σ",
     "b": "Σ කියන්නේ කෙටි notation එකෙන් බොහෝ අගයන් එකතු කිරීම. i=1 සිට n දක්වා කියන්නේ i=1,2,…,n.",
     "f": "Σᵢ₌₁³ i² = 1² + 2² + 3² = 14",
     "k": "Sample mean, variance, likelihood හැමතැනම Σ එයි."
    },
    {
     "h": "Greek alphabet crash course",
     "b": "μ = population mean; σ = population SD; σ² = variance; θ = unknown parameter; α = error/tail level; β = type II error; Σ = sum; χ² = chi-square; ν = degrees of freedom.",
     "f": "95% confidence ⇒ α = 0.05; each tail = 0.025",
     "k": "සංකේතයට අර්ථයක් තිබේ; අකුර කටපාඩම් කිරීම වෙනුවට role එක මතක තියාගන්න."
    }
   ],
   "examples": [
    {
     "q": "Solve 3x − 5 = 16",
     "steps": [
      "Add 5 on both sides: 3x = 21",
      "Divide by 3: x = 7"
     ],
     "ans": "x = 7"
    },
    {
     "q": "Compute Σᵢ₌₁⁴ (2i)",
     "steps": [
      "2(1)+2(2)+2(3)+2(4)",
      "2+4+6+8 = 20"
     ],
     "ans": "20"
    }
   ],
   "mode": "Prerequisite bridge"
  },
  {
   "id": "functions",
   "title": "01 · Functions, logs & derivatives",
   "tag": "FOUNDATION",
   "minutes": 15,
   "source": [],
   "summary": "Likelihood maximization සඳහා differential calculus මතක් කරන chapter එක. Formula එකට කලින් අදහස බලාගමු.",
   "concepts": [
    {
     "h": "Function f(x)",
     "b": "Input x එකට output එකක් දෙන rule එකයි. y=x² නම් x=3 දුන්නොත් y=9. Graph එක input-output ලකුණු ගොඩක්.",
     "f": "f(x) = x² + 2x; f(3)=15",
     "k": "Likelihood L(θ) ද function එකක්."
    },
    {
     "h": "Slope / derivative",
     "b": "Derivative f′(x) කියන්නේ x අගය ටිකක් වෙනස් කරනකොට y කෙතරම් වේගයෙන් වෙනස් වෙනවාද. Graph එකේ tangent slope.",
     "f": "d/dx(xⁿ) = nxⁿ⁻¹",
     "k": "Derivative positive ⇒ rising; negative ⇒ falling."
    },
    {
     "h": "Useful rules",
     "b": "Constant derivative 0; sum derivatives add; product rule (uv)′=u′v+uv′; chain rule d/dx g(h(x))=g′(h)h′.",
     "f": "d/dx(3x² − 4x + 7) = 6x − 4",
     "k": "Chain rule particularly in ln(1−p)."
    },
    {
     "h": "Natural logarithm ln",
     "b": "ln යනු exponential eˣ හි inverse. Product එක ln අරගෙන sum එකක් වෙයි; optimization පහසුයි.",
     "f": "ln(ab)=ln a+ln b; ln(xⁿ)=n ln x; d(ln x)/dx=1/x",
     "k": "ln valid only for positive input."
    },
    {
     "h": "Finding maxima",
     "b": "Stationary point එක f′(x)=0. එය maximum ද minimum ද කියා f″(x) හරහා බලන්න: f″<0 ⇒ maximum.",
     "f": "f(x)=−(x−3)²+9 ⇒ f′(x)=−2(x−3)=0 ⇒ x=3",
     "k": "Boundary values ද check කරන්න; MLE 0 or 1 වෙන්න පුළුවන්."
    }
   ],
   "examples": [
    {
     "q": "Maximize L(p)=p²(1−p) for 0≤p≤1",
     "steps": [
      "Use log: ℓ(p)=2ln p+ln(1−p)",
      "ℓ′(p)=2/p−1/(1−p)=0",
      "2(1−p)=p ⇒ p=2/3; boundaries L=0"
     ],
     "ans": "p̂=2/3"
    },
    {
     "q": "Differentiate x³ + 2ln x",
     "steps": [
      "d(x³)/dx = 3x²",
      "d(2ln x)/dx = 2/x"
     ],
     "ans": "3x² + 2/x"
    }
   ],
   "mode": "Prerequisite bridge"
  },
  {
   "id": "integration",
   "title": "02 · Integration: 20-minute restart",
   "tag": "FOUNDATION",
   "minutes": 20,
   "source": [],
   "summary": "Exam කලින් ඉක්මනින් integral ගණන් ආපහු හදාගන්න. Definite integral එක probability area එකට සම්බන්ධ වන ආකාරයත් මෙහි.",
   "concepts": [
    {
     "h": "The big idea",
     "b": "Integration = කුඩා slices එකතු කර total area/accumulation සෙවීම. Differentiation එකේ reverse action කියලා හිතන්න.",
     "f": "∫ f(x) dx = F(x) + C, where F′(x)=f(x)",
     "k": "Indefinite integral එකේ +C අමතක කරන්න එපා."
    },
    {
     "h": "Power rule",
     "b": "Exponent එකට 1 එකතු කර අලුත් exponent එකෙන් බෙදන්න. x⁻¹ special case: ln|x|.",
     "f": "∫xⁿ dx = xⁿ⁺¹/(n+1)+C, n≠−1",
     "k": "∫3x² dx = x³ + C."
    },
    {
     "h": "Basic integrals",
     "b": "Constant k නම් ∫k dx=kx+C; ∫eˣ dx=eˣ+C; ∫1/x dx=ln|x|+C; ∫cos x dx=sin x+C; ∫sin x dx=−cos x+C.",
     "f": "∫(2x+3)dx = x²+3x+C",
     "k": "Constant multiplication and sums split freely."
    },
    {
     "h": "Definite integrals",
     "b": "a සිට b දක්වා area = F(b)−F(a). Signed area: x-axis යටදී negative. Density සඳහා total area = 1.",
     "f": "∫₀² 3x² dx = [x³]₀² = 8",
     "k": "Bounds දැමීමට පෙර anti-derivative හදන්න."
    },
    {
     "h": "u substitution",
     "b": "ඇතුළත function එක සහ එහි derivative එක එන විට u දාලා simplify කරන්න.",
     "f": "∫ 2x(x²+1)³ dx: u=x²+1, du=2x dx ⇒ u⁴/4+C",
     "k": "Original variable එකට නැවත convert කරන්න."
    },
    {
     "h": "Integration by parts",
     "b": "Product එකක් නම් ∫u dv=uv−∫v du. log එක u ලෙස ගැනීම බොහෝ විට හොඳයි.",
     "f": "∫x eˣ dx = x eˣ−∫eˣdx = eˣ(x−1)+C",
     "k": "හදාගත්ත result එක differentiate කරලා check කරන්න."
    },
    {
     "h": "Probability and integrals",
     "b": "Continuous RV එකක P(a≤X≤b)=∫ₐᵇ f(x)dx. E[X]=∫x f(x)dx. Normal curve probabilities area බවට පත්වේ.",
     "f": "Uniform(0,2): f(x)=1/2; P(0.5≤X≤1.5)=∫.5^1.5 1/2 dx=.5",
     "k": "PDF value එක probability එකක් නොවේ; area එකයි probability."
    }
   ],
   "examples": [
    {
     "q": "Find ∫(6x²−4x+5)dx",
     "steps": [
      "∫6x²=2x³",
      "∫−4x=−2x²",
      "∫5=5x; add C"
     ],
     "ans": "2x³−2x²+5x+C"
    },
    {
     "q": "Find ∫₁³ 2x dx",
     "steps": [
      "Anti-derivative is x²",
      "Evaluate 3²−1²"
     ],
     "ans": "8"
    },
    {
     "q": "Find ∫ 3x² e^(x³) dx",
     "steps": [
      "Let u=x³; du=3x²dx",
      "∫eᵘdu=eᵘ+C",
      "Replace u with x³"
     ],
     "ans": "e^(x³)+C"
    },
    {
     "q": "Find ∫₀¹ 2x dx as probability",
     "steps": [
      "f(x)=2x for 0≤x≤1",
      "Area = [x²]₀¹=1",
      "Thus f is a valid density on that interval"
     ],
     "ans": "1"
    }
   ],
   "mode": "Prerequisite bridge"
  },
  {
   "id": "probability",
   "title": "03 · Probability from absolute zero",
   "tag": "FOUNDATION",
   "minutes": 17,
   "source": [],
   "summary": "Stat formulas වලට කලින් probability, event, random variable, independence, conditional probability, PMF/PDF හොඳින් තේරුම් ගන්න.",
   "concepts": [
    {
     "h": "Events and probability",
     "b": "Coin එකක් toss කිරීම experiment. H හෝ T outcome. “Head” වගේ outcomes එකතුවක් event. Probability 0 සිට 1 දක්වා.",
     "f": "P(A)∈[0,1]; P(Aᶜ)=1−P(A)",
     "k": "Certain=1, impossible=0."
    },
    {
     "h": "Union/intersection",
     "b": "A∪B means A හෝ B; A∩B means A සහ B. Overlap twice count නොකරන්න.",
     "f": "P(A∪B)=P(A)+P(B)−P(A∩B)",
     "k": "Mutually exclusive නම් overlap 0."
    },
    {
     "h": "Conditional / independent",
     "b": "P(A|B) කියන්නේ B සිදුවූ බව දැනගෙන A ගැන probability. Independent නම් B නිසා A වෙනස් නොවේ.",
     "f": "P(A|B)=P(A∩B)/P(B); independent: P(A∩B)=P(A)P(B)",
     "k": "Independent ≠ mutually exclusive."
    },
    {
     "h": "Random variable & distribution",
     "b": "X යනු random outcome එකට number එකක් දෙන rule. PMF discrete values; PDF continuous density; CDF F(x)=P(X≤x).",
     "f": "Discrete: Σp(x)=1; Continuous: ∫f(x)dx=1",
     "k": "Continuous exact point P(X=x)=0."
    },
    {
     "h": "Expectation & variance",
     "b": "E[X] long-run average; Var(X) spread squared; SD=√Var. E[X²] used in moments.",
     "f": "Var(X)=E[X²]−(E[X])²",
     "k": "Var(aX+b)=a²Var(X)."
    },
    {
     "h": "Distributions preview",
     "b": "Bernoulli one success/failure. Binomial count successes n. Exponential waiting time. Normal continuous bell. χ²,t,F come later.",
     "f": "Bin(n,p): E[X]=np, Var(X)=np(1−p)",
     "k": "Always name distribution and its parameters."
    }
   ],
   "examples": [
    {
     "q": "Fair coin twice: P(at least one head)",
     "steps": [
      "Sample space HH, HT, TH, TT",
      "Complement of at least 1 head is TT",
      "1−1/4=3/4"
     ],
     "ans": "0.75"
    },
    {
     "q": "X is Bernoulli with p=.3. Find E and Var",
     "steps": [
      "E[X]=p=.3",
      "Var(X)=p(1−p)=.3×.7"
     ],
     "ans": "E=.3; Var=.21"
    },
    {
     "q": "If f(x)=2x for 0<x<1, find P(X<.5)",
     "steps": [
      "P=∫₀^.5 2x dx",
      "=[x²]₀^.5=.25"
     ],
     "ans": "0.25"
    }
   ],
   "mode": "Prerequisite bridge"
  },
  {
   "id": "inference",
   "title": "04 · Inductive & deductive inference",
   "tag": "LECTURE 01",
   "minutes": 12,
   "source": [
    "1. Inductive and Deductive Inference.pdf"
   ],
   "summary": "COPAI, descriptive vs inferential statistics, generalizing samples, independent identically distributed random samples, sampling uncertainty.",
   "concepts": [
    {
     "h": "What is statistics?",
     "b": "COPAI = Collection, Organization, Presentation, Analysis and Interpretation. Descriptive statistics summarize data; inference moves from sample to population.",
     "f": "Data → summary → estimate → uncertainty",
     "k": "Example: sample of 100 seeds predicts millions of seeds."
    },
    {
     "h": "Inductive inference",
     "b": "සීමිත observations වලින් general conclusion. තහවුරු නැහැ, probability සහ uncertainty තියෙනවා.",
     "f": "100 sampled bulbs: 7 broken ⇒ estimate ≈7% in batch",
     "k": "New samples may give other percentages."
    },
    {
     "h": "Deductive inference",
     "b": "Accepted premises වලින් logically necessary conclusion. Premises true නම් logical conclusion true.",
     "f": "All squares have 4 sides; A is square ⇒ A has 4 sides.",
     "k": "Deduction ≠ guessing from an observed trend."
    },
    {
     "h": "Population and sample",
     "b": "Population = interest එකේ සෑම element; sample = තෝරාගත් කොටස. Census ≠ sample survey. Random sampling reduces systematic selection bias.",
     "f": "Population parameter θ; statistic T(X₁,…,Xₙ)",
     "k": "Sampling error ≠ measurement error."
    },
    {
     "h": "Random sample & i.i.d.",
     "b": "Notes වල random sample එක independent and identically distributed (i.i.d.) variables ලෙස ගනියි. Independence: results unrelated; identical: same distribution.",
     "f": "X₁,…,Xₙ iid ~ f(x;θ)",
     "k": "Sample mean X̄ is random before you observe data."
    },
    {
     "h": "Sampling variation",
     "b": "Sample 1 mean 62, sample 2 mean 65 වෙන්න පුළුවන්. ඒ නිසා margin of error/CI අවශ්‍යයි.",
     "f": "E[X̄]=μ; Var(X̄)=σ²/n",
     "k": "n වැඩි වුනාම SE අඩු වේ."
    }
   ],
   "examples": [
    {
     "q": "100 items sample shows 8 defective. What is inferred?",
     "steps": [
      "Observed 8/100=.08 is a sample statistic",
      "Estimate population defect proportion by .08",
      "It is an inductive, not certain, conclusion"
     ],
     "ans": "Estimated population p≈0.08"
    },
    {
     "q": "Mean/variance of sample mean for μ=30, σ²=100, n=25",
     "steps": [
      "E[X̄]=μ=30",
      "Var(X̄)=100/25=4; SE=2"
     ],
     "ans": "E=30, Var=4, SE=2"
    }
   ],
   "mode": "Core lecture"
  },
  {
   "id": "moments",
   "title": "05 · Parameters, statistics & moments",
   "tag": "LECTURE 02",
   "minutes": 16,
   "source": [
    "2. Pop Param Statistic Sample Moment etc..pdf"
   ],
   "summary": "Unknown parameters, statistics, raw & central sample moments, population moments and why dividing by n−1 matters.",
   "concepts": [
    {
     "h": "Parameter vs statistic",
     "b": "Population μ,σ²,p unknown constants. Sample X̄,S²,p̂ observable/random statistics. A statistic cannot contain unknown θ.",
     "f": "T=X̄+3 is a statistic; X̄−μ not if μ unknown.",
     "k": "Parameter fixed; estimator random across samples."
    },
    {
     "h": "Raw sample moment",
     "b": "rth raw moment M′ᵣ averages powers of sampled values. At r=1 it is X̄. At r=2, average of squared values.",
     "f": "M′ᵣ=(1/n)ΣXᵢʳ",
     "k": "r=2 is NOT variance unless mean=0."
    },
    {
     "h": "Central sample moment",
     "b": "rth moment about sample mean averages (Xᵢ−X̄)ʳ. For r=2 it is variance with denominator n.",
     "f": "Mᵣ=(1/n)Σ(Xᵢ−X̄)ʳ",
     "k": "Central first moment always zero."
    },
    {
     "h": "Population moments",
     "b": "μ′ᵣ=E[Xʳ]; central μᵣ=E[(X−μ)ʳ]. In particular μ′₁=μ, μ₂=σ².",
     "f": "σ²=E[X²]−(E[X])²",
     "k": "Use these equations in method of moments."
    },
    {
     "h": "Unbiased sample variance",
     "b": "S²=Σ(Xᵢ−X̄)²/(n−1), with E[S²]=σ². n−1 corrects underestimation caused by calculating X̄ from same sample.",
     "f": "S²=(1/(n−1))Σ(Xᵢ−X̄)²",
     "k": "Don’t confuse MOM variance (divide n) with unbiased S² (divide n−1)."
    },
    {
     "h": "Expectations of sample moments",
     "b": "For iid observations E[M′ᵣ]=μ′ᵣ and Var(M′ᵣ)=(μ′₂ᵣ−(μ′ᵣ)²)/n when finite.",
     "f": "E[X̄]=μ; Var(X̄)=σ²/n",
     "k": "Expectation linearity always; variance sum needs independence."
    }
   ],
   "examples": [
    {
     "q": "Sample 2,4,6: raw moments",
     "steps": [
      "M′₁=(2+4+6)/3=4",
      "M′₂=(4+16+36)/3=56/3"
     ],
     "ans": "M′₁=4, M′₂≈18.667"
    },
    {
     "q": "Sample 2,4,6: two variances",
     "steps": [
      "X̄=4; sum squared deviations=4+0+4=8",
      "M₂=8/3≈2.667",
      "S²=8/(3−1)=4"
     ],
     "ans": "MOM variance=2.667; unbiased S²=4"
    }
   ],
   "mode": "Core lecture"
  },
  {
   "id": "mom",
   "title": "06 · Estimators & method of moments",
   "tag": "LECTURE 03",
   "minutes": 16,
   "source": [
    "3. Estimation Point Estiation and Method of Moment Estimation.pdf"
   ],
   "summary": "Estimator vs estimate, point/interval estimation, method of moments (MOM) for one or more population parameters.",
   "concepts": [
    {
     "h": "Estimator vs estimate",
     "b": "T(X₁,…,Xₙ) random rule = estimator. Observed number t(x₁,…,xₙ) = estimate. Point estimate one number; interval estimate range.",
     "f": "μ̂=X̄; if observations average 13 then μ̂=13",
     "k": "Hat ^ means estimated value."
    },
    {
     "h": "Method of moments recipe",
     "b": "k unknown parameters? Equate first k population raw moments E[Xʳ] to sample moments (1/n)ΣXᵢʳ and solve equations.",
     "f": "E[X]=X̄; E[X²]=M′₂; …",
     "k": "Check parameter constraints after solving."
    },
    {
     "h": "Bernoulli MOM",
     "b": "Bernoulli X∈{0,1} with probability p of 1. E[X]=p ⇒ equate sample mean to p.",
     "f": "p̂₍MOM₎=X̄ = number of successes/n",
     "k": "Same as MLE for Bernoulli."
    },
    {
     "h": "Exponential MOM",
     "b": "Rate λ parameter: E[X]=1/λ. So 1/λ=X̄ ⇒ λ̂=1/X̄. Confirm whether question uses rate or scale parameter.",
     "f": "Exponential rate λ: f(x)=λ exp(−λx) for x>0",
     "k": "Symbols θ and λ depend on parametrization."
    },
    {
     "h": "Normal MOM (μ and σ²)",
     "b": "Two moments: μ=X̄ and σ²+μ²=M′₂ ⇒ σ²=M′₂−X̄². Uses denominator n.",
     "f": "μ̂=X̄, σ̂²=(1/n)Σ(Xᵢ−X̄)²",
     "k": "For unbiased variance use n−1 instead."
    }
   ],
   "examples": [
    {
     "q": "Bernoulli sample 1,0,1,1,0: MOM p",
     "steps": [
      "X̄=(1+0+1+1+0)/5=3/5",
      "E[X]=p; set p=X̄"
     ],
     "ans": "p̂=0.6"
    },
    {
     "q": "Exponential rate from mean 4",
     "steps": [
      "Population E[X]=1/λ",
      "Set 1/λ=4",
      "λ̂=1/4"
     ],
     "ans": "λ̂=.25"
    },
    {
     "q": "Normal sample 1,2,3: MOM variance",
     "steps": [
      "X̄=2",
      "M′₂=(1+4+9)/3=14/3",
      "σ̂²=14/3−4=2/3"
     ],
     "ans": "μ̂=2, σ̂²≈0.667"
    }
   ],
   "mode": "Core lecture"
  },
  {
   "id": "mle",
   "title": "07 · Maximum likelihood estimation",
   "tag": "LECTURE 04",
   "minutes": 19,
   "source": [
    "4. Maximum Likelihood Estimation-Student.pdf"
   ],
   "summary": "Sample එක දැක්ක පස්සේ ඒ sample එක වැඩිපුරම explain කරන parameter value එක හොයන method. Logs & differentiation step-by-step.",
   "concepts": [
    {
     "h": "What likelihood means",
     "b": "Observed data x fixed. Parameter θ vary. L(θ|x)=∏f(xᵢ;θ). Maximum value ලැබෙන θ තමයි MLE.",
     "f": "L(θ)=f(x₁;θ)f(x₂;θ)…f(xₙ;θ)",
     "k": "Likelihood is not a probability distribution over θ."
    },
    {
     "h": "Why log-likelihood?",
     "b": "Products difficult; log product becomes sum. ln strictly increasing නිසා max same θ එකේ.",
     "f": "ℓ(θ)=ln L(θ)=Σ ln f(xᵢ;θ)",
     "k": "If density zero, logs/boundaries must be handled."
    },
    {
     "h": "Maximization recipe",
     "b": "1. Distribution + sample ලියන්න. 2. L build. 3. ln take. 4. dℓ/dθ=0. 5. Maximum and parameter boundaries check.",
     "f": "ℓ′(θ̂)=0, often ℓ″(θ̂)<0",
     "k": "Not every stationary point gives maximum."
    },
    {
     "h": "Bernoulli/binomial MLE",
     "b": "n trials k successes: L(p)∝pᵏ(1−p)ⁿ⁻ᵏ. Derivative k/p−(n−k)/(1−p)=0 ⇒ p̂=k/n.",
     "f": "p̂ = successes / trials",
     "k": "If all failures p̂=0, all successes p̂=1 (boundaries)."
    },
    {
     "h": "Exponential rate MLE",
     "b": "iid Exp(λ): L=λⁿe^(−λΣx); ℓ=n ln λ−λΣx. Derivative n/λ−Σx=0.",
     "f": "λ̂=n/Σx=1/X̄",
     "k": "For scale θ=1/λ, θ̂=X̄."
    },
    {
     "h": "Normal MLE",
     "b": "iid N(μ,σ²): μ̂=X̄, σ̂²=(1/n)Σ(Xᵢ−X̄)². Note not n−1.",
     "f": "μ̂₍MLE₎=X̄; σ̂²₍MLE₎=Σ(xᵢ−X̄)²/n",
     "k": "MLE often biased for small-sample σ²."
    }
   ],
   "examples": [
    {
     "q": "10 Bernoulli trials with 7 successes",
     "steps": [
      "L(p)∝p⁷(1−p)³",
      "ℓ′=7/p−3/(1−p)=0",
      "7(1−p)=3p ⇒ p=.7"
     ],
     "ans": "p̂=0.7"
    },
    {
     "q": "Exponential observations 2,4,6",
     "steps": [
      "n=3; Σx=12",
      "ℓ′=3/λ−12=0",
      "λ̂=3/12"
     ],
     "ans": "λ̂=0.25"
    },
    {
     "q": "Three trials: black ball outcomes 0 or 1 successes, p either .25 or .75",
     "steps": [
      "For k=1 and n=3, L(.25)∝.25(.75)²=.140625",
      "L(.75)∝.75(.25)²=.046875",
      "Choose the greater likelihood"
     ],
     "ans": "p̂=.25"
    }
   ],
   "mode": "Core lecture"
  },
  {
   "id": "ci-pivots",
   "title": "08 · Confidence interval & pivots",
   "tag": "LECTURE 05",
   "minutes": 17,
   "source": [
    "5.IntervalEstimationNPivotalQuantityMethod.pdf"
   ],
   "summary": "Point estimate එකක් වෙනුවට meaningful range. Confidence level, α, margin of error, one- vs two-sided intervals, pivotal quantity.",
   "concepts": [
    {
     "h": "Why an interval?",
     "b": "Sample mean 72 might not equal true population μ. Interval [68,76] gives uncertainty. Repeated sampling across 95% intervals would capture μ about 95% of the time.",
     "f": "Estimate ± margin of error",
     "k": "After data, fixed interval either contains μ or not."
    },
    {
     "h": "α and confidence",
     "b": "Confidence γ=1−α. 95% means α=.05. Two-sided equally split tails α/2=.025 each. One-sided interval has one tail α.",
     "f": "Confidence level 100(1−α)%",
     "k": "99% wider than 95% holding data constant."
    },
    {
     "h": "Standard error & margin",
     "b": "SE = standard deviation of an estimator’s sampling distribution. Margin of error = critical value × SE.",
     "f": "For X̄: SE=σ/√n if σ known",
     "k": "Sample size 4× ⇒ SE half."
    },
    {
     "h": "Pivotal quantity",
     "b": "Statistic involving observations + parameter whose probability distribution does NOT depend on unknown parameters. Invert inequality to isolate θ.",
     "f": "Z=(X̄−μ)/(σ/√n) ~ N(0,1) if σ known (normal model)",
     "k": "If Z distribution depends on unknown μ or σ it is not a valid pivot as written."
    },
    {
     "h": "CI by reversing inequality",
     "b": "Start P(−z*≤Z≤z*)=1−α. Replace Z and algebraically isolate μ. This gives X̄ ± z*σ/√n.",
     "f": "μ∈[X̄−z*σ/√n, X̄+z*σ/√n]",
     "k": "For positive quantities like variance, inequalities reverse on reciprocals."
    },
    {
     "h": "Shortest symmetric normal interval",
     "b": "For symmetric bell curve, central tail split produces shortest two-sided interval of a given confidence, with constant SE.",
     "f": "90% z*=1.645; 95% z*=1.960; 99% z*=2.576",
     "k": "Use table appropriate to probability convention."
    }
   ],
   "examples": [
    {
     "q": "x̄=50, σ=10, n=100: 95% CI",
     "steps": [
      "SE=10/√100=1",
      "Margin=1.96×1=1.96",
      "50±1.96"
     ],
     "ans": "[48.04, 51.96]"
    },
    {
     "q": "Find α and tails for 98% CI",
     "steps": [
      "α=1−.98=.02",
      "Two-sided tails=.02/2=.01 each"
     ],
     "ans": "α=.02; each tail=.01"
    }
   ],
   "mode": "Core lecture"
  },
  {
   "id": "distributions",
   "title": "09 · Normal, t, χ², F & gamma",
   "tag": "LECTURE 06",
   "minutes": 24,
   "source": [
    "EMP6.Normal,Chi-Square,F,t-DistnsCIs4Mean.pdf"
   ],
   "summary": "හතරම එක්ක එකවර ලැබෙන්නෙ නෑ. Mean → Normal/t. Variance → chi-square. Variance ratio → F. Why each appears කියන අර්ථය.",
   "concepts": [
    {
     "h": "Normal distribution",
     "b": "Symmetric bell, parameter μ and σ². Standardize X by subtracting μ and dividing σ. Probability = curve යට area.",
     "f": "Z=(X−μ)/σ~N(0,1)",
     "k": "X̄~N(μ,σ²/n) for normal iid observations."
    },
    {
     "h": "t distribution",
     "b": "μ සඳහා σ unknown, S use කරනකොට extra uncertainty නිසා t heavier tails. df=n−1. n grows, t approaches standard normal.",
     "f": "T=(X̄−μ)/(S/√n)~t₍ₙ₋₁₎ under normal sampling",
     "k": "Small n ⇒ critical t > corresponding z."
    },
    {
     "h": "Chi-square",
     "b": "Independent standard normals squared කරලා එකතු කළාම χ². Positive and right skewed. Used for variance under normality.",
     "f": "ΣZᵢ²~χ²₍ₖ₎; (n−1)S²/σ²~χ²₍ₙ₋₁₎",
     "k": "χ² mean=k, variance=2k."
    },
    {
     "h": "F distribution",
     "b": "Two independent chi-square variables divided by dfs gives F. Positive, right skewed. Especially variance ratio.",
     "f": "(U/ν₁)/(V/ν₂)~F₍ν₁,ν₂₎",
     "k": "F critical value needs TWO degrees of freedom."
    },
    {
     "h": "Gamma, exponential link",
     "b": "χ² is Gamma shape k/2, scale 2. Exponential is Gamma shape 1. Gamma Γ(a) generalizes factorial: Γ(n)=(n−1)!.",
     "f": "χ²ₖ~Gamma(k/2, scale=2)",
     "k": "Shape-scale and shape-rate notations differ."
    },
    {
     "h": "Sampling & independence",
     "b": "Sample mean, sample variance, and their distribution relations require assumptions. Independent normal samples make chi-square/t/F pivots valid.",
     "f": "T=Z/√(U/ν), Z~N(0,1), U~χ²ν independent",
     "k": "Do not use a t-test merely because σ is not printed; identify design."
    }
   ],
   "examples": [
    {
     "q": "If X~N(100,15²), find z for x=130",
     "steps": [
      "Z=(130−100)/15"
     ],
     "ans": "z=2"
    },
    {
     "q": "For n=16, what df for one-sample t or χ² on unknown mean?",
     "steps": [
      "df=n−1",
      "16−1=15"
     ],
     "ans": "df=15"
    },
    {
     "q": "If k=5, χ² mean and variance",
     "steps": [
      "E[χ²ₖ]=k",
      "Var(χ²ₖ)=2k"
     ],
     "ans": "Mean=5, Var=10"
    }
   ],
   "mode": "Core lecture"
  },
  {
   "id": "one-mean",
   "title": "10 · Confidence interval for one mean",
   "tag": "LECTURE 06",
   "minutes": 17,
   "source": [
    "EMP6.Normal,Chi-Square,F,t-DistnsCIs4Mean.pdf"
   ],
   "summary": "σ known ද unknown ද? සාමාන්‍යයෙන් ඒ එක ප්‍රශ්නයෙන් z හෝ t තෝරාගත හැක. Assumptions පිළිබඳ සැලකිල්ල අත්‍යවශ්‍යයි.",
   "concepts": [
    {
     "h": "Known σ, two-sided",
     "b": "Population SD σ known, sample n. For normally distributed population (or justified large-sample approximation), z critical.",
     "f": "X̄ ± z₁₋α/₂ × σ/√n",
     "k": "Known variance σ² නම් square root යොදා σ ගන්න."
    },
    {
     "h": "Unknown σ, two-sided",
     "b": "Population SD unknown; compute S from sample. For normal data use t with n−1 degrees of freedom.",
     "f": "X̄ ± t₁₋α/₂,n−1 × S/√n",
     "k": "z vs t choice comes from how uncertainty is modeled."
    },
    {
     "h": "One-sided bounds",
     "b": "Only lower or only upper limit requested means one-sided α rather than α/2.",
     "f": "Lower: X̄−t₁₋α,n−1 S/√n",
     "k": "Pay attention to confidence and tail."
    },
    {
     "h": "Critical value from tables",
     "b": "Table may show cumulative P(T≤t) or upper-tail area. For 95% two-sided, upper tail .025.",
     "f": "z.975=1.96; t.975,9≈2.262",
     "k": "Not all tables use same notation."
    }
   ],
   "examples": [
    {
     "q": "Known σ=12, n=36, x̄=72: 95% CI",
     "steps": [
      "SE=12/6=2",
      "Margin=1.96×2=3.92",
      "72±3.92"
     ],
     "ans": "[68.08,75.92]"
    },
    {
     "q": "Unknown σ, n=10, x̄=20, s=4: 95% CI",
     "steps": [
      "df=9; t.975,9≈2.262",
      "SE=4/√10≈1.2649",
      "ME≈2.861; 20±2.861"
     ],
     "ans": "[17.139,22.861]"
    }
   ],
   "mode": "Core lecture"
  },
  {
   "id": "one-proportion",
   "title": "11 · CI for a population proportion",
   "tag": "LECTURE 07",
   "minutes": 16,
   "source": [
    "7.CIs for Population Proportion and the Difference between two Population Proportions.pdf"
   ],
   "summary": "පාරිභෝගිකයින්/defects/voters වගේ yes-no data එකේ population percentage p estimate කරන case එක.",
   "concepts": [
    {
     "h": "Proportion vs percentage",
     "b": "p in [0,1] while percent=100p. Observed y successes out of n gives p̂=y/n.",
     "f": "p̂ = y/n; q̂=1−p̂",
     "k": "Convert results to percentage only at end."
    },
    {
     "h": "Normal approximation",
     "b": "Y~Bin(n,p). For sufficient expected successes and failures, sampling proportion approximately normal. Notes mention n>30; also inspect np and n(1−p).",
     "f": "p̂ ≈ N(p,p(1−p)/n)",
     "k": "For small/near-edge samples, Wald may be unreliable."
    },
    {
     "h": "Wald confidence interval",
     "b": "Substitute sample p̂ in estimated SE. Source PDF uses this normal approximation formula.",
     "f": "p̂ ± z₁₋α/₂ √[p̂(1−p̂)/n]",
     "k": "Wald can exceed [0,1]; advanced alternatives such as Wilson exist."
    },
    {
     "h": "Interpreting interval",
     "b": "If CI [.12,.18] then estimated population success proportion 12%–18%. Don’t conclude probability parameter moves around after sample.",
     "f": "95% confidence means repeated-interval coverage ≈95%",
     "k": "Statistical inference depends on sampling design."
    }
   ],
   "examples": [
    {
     "q": "Lecture example: 45 defective of 300; 90% CI",
     "steps": [
      "p̂=45/300=.15",
      "SE=√(.15×.85/300)≈.020616",
      "z.95≈1.645, margin≈.03391"
     ],
     "ans": "[0.1161,0.1839] = 11.61%–18.39%"
    },
    {
     "q": "80 of 200 prefer option A; 95% CI",
     "steps": [
      "p̂=.4; SE=√(.4×.6/200)=.034641",
      "ME=1.96×.034641≈.06790"
     ],
     "ans": "[.3321,.4679]"
    }
   ],
   "mode": "Core lecture"
  },
  {
   "id": "two-proportion",
   "title": "12 · Difference of two proportions",
   "tag": "LECTURE 07",
   "minutes": 16,
   "source": [
    "7.CIs for Population Proportion and the Difference between two Population Proportions.pdf"
   ],
   "summary": "Independent populations දෙකක percentages difference p₁−p₂ estimate. Independent groups assumption අත්‍යවශ්‍යයි.",
   "concepts": [
    {
     "h": "Define groups and order",
     "b": "Group 1, group 2 choose first; positive difference means group1 higher. x₁/n₁ and x₂/n₂ individually.",
     "f": "D̂=p̂₁−p̂₂",
     "k": "Group order reversal changes sign."
    },
    {
     "h": "Standard error",
     "b": "Independent samples means the two proportion variances add. For confidence intervals use separately estimated proportions, NOT pooled estimate.",
     "f": "SE=√[p̂₁q̂₁/n₁ + p̂₂q̂₂/n₂]",
     "k": "Pooled p̂ is usually for H₀:p₁=p₂ hypothesis test, not this CI."
    },
    {
     "h": "Confidence interval",
     "b": "Difference plus or minus z*SE. If 0 is inside interval, a zero difference remains plausible at corresponding confidence.",
     "f": "(p̂₁−p̂₂) ± z₁₋α/₂SE",
     "k": "Check sample-success/failure counts in both groups."
    }
   ],
   "examples": [
    {
     "q": "A: 60/100, B: 40/100; 95% CI",
     "steps": [
      "D=.6−.4=.2",
      "SE=√(.6×.4/100+.4×.6/100)=√.0048≈.069282",
      "ME≈1.96×.069282≈.13579"
     ],
     "ans": "[.0642,.3358]"
    },
    {
     "q": "A: 30/100, B: 40/100; difference only",
     "steps": [
      "p̂₁=.3; p̂₂=.4",
      "D=.3−.4"
     ],
     "ans": "−.10"
    }
   ],
   "mode": "Core lecture"
  },
  {
   "id": "two-means-pooled",
   "title": "13 · Two means: unknown, equal variances",
   "tag": "LECTURE 08",
   "minutes": 20,
   "source": [
    "8.CIs for the Difference of Two Population Means-Part1.pdf"
   ],
   "summary": "Independent normal populations, σ₁² and σ₂² unknown but assumed equal. Pooling two sample variances is valid only with equal-variance assumption.",
   "concepts": [
    {
     "h": "Identify scenario",
     "b": "Two groups independent (not before/after). Both σ values unknown and assumed equal. Use pooled t.",
     "f": "df=n₁+n₂−2",
     "k": "Question often explicitly states equal variances."
    },
    {
     "h": "Pooled variance",
     "b": "Combine sums of squares weighted by degrees of freedom. Simple average of variances only when n₁=n₂.",
     "f": "Sₚ²=[(n₁−1)S₁²+(n₂−1)S₂²]/(n₁+n₂−2)",
     "k": "Sₚ=√Sₚ²."
    },
    {
     "h": "CI formula",
     "b": "D=X̄₁−X̄₂; SE=Sₚ√(1/n₁+1/n₂); t critical with df n₁+n₂−2.",
     "f": "D ± t₁₋α/₂,df × Sₚ√(1/n₁+1/n₂)",
     "k": "Variance equality should be supported, not assumed casually."
    },
    {
     "h": "Why add variances?",
     "b": "Var(X̄₁−X̄₂)=Var(X̄₁)+Var(X̄₂) when samples independent (covariance=0).",
     "f": "σ₁²/n₁ + σ₂²/n₂",
     "k": "A difference between means is itself a random variable."
    }
   ],
   "examples": [
    {
     "q": "n₁=n₂=10, x̄₁=50, x̄₂=46, s₁=s₂=5; 95% CI",
     "steps": [
      "Sₚ=5; df=18; t.975,18≈2.101",
      "D=4; SE=5√(.1+.1)=2.236",
      "ME≈4.698"
     ],
     "ans": "[−0.698,8.698]"
    }
   ],
   "mode": "Core lecture"
  },
  {
   "id": "two-means-welch",
   "title": "14 · Two means: unknown, unequal variances",
   "tag": "LECTURE 08",
   "minutes": 20,
   "source": [
    "8.CIs for the Difference of Two Population Means-Part1.pdf"
   ],
   "summary": "Equal variances assume කරන්න බැරි independent samples වලට Welch approach යොදා ගනී.",
   "concepts": [
    {
     "h": "Welch SE",
     "b": "Each sample variance separately contributes its own part.",
     "f": "SE=√(S₁²/n₁+S₂²/n₂)",
     "k": "n large කරද්දී margin typically shrinks."
    },
    {
     "h": "Welch-Satterthwaite df",
     "b": "df generally not integer; effective degrees of freedom estimated from sample variances and sizes.",
     "f": "ν=(a+b)²/[a²/(n₁−1)+b²/(n₂−1)], a=S₁²/n₁,b=S₂²/n₂",
     "k": "For printed tables often conservative rounding or interpolation; follow lecturer rule."
    },
    {
     "h": "Welch CI",
     "b": "Sample mean difference ± t critical at approximate ν multiplied by Welch SE.",
     "f": "(X̄₁−X̄₂)±t₁₋α/₂,ν√(S₁²/n₁+S₂²/n₂)",
     "k": "Do not pool sample variance in this case."
    },
    {
     "h": "Compare with pooled",
     "b": "Equal unknown ⇒ pooled t, df=n₁+n₂−2. Unequal unknown ⇒ Welch t approximate df. Both require independent samples.",
     "f": "Known variance scenarios use z instead.",
     "k": "Case identification gets marks even before calculations."
    }
   ],
   "examples": [
    {
     "q": "n₁=n₂=16, x̄₁=40, x̄₂=36, s₁=4,s₂=8",
     "steps": [
      "a=16/16=1; b=64/16=4",
      "SE=√5≈2.236; ν=(1+4)²/(1²/15+4²/15)=25/(17/15)=22.06",
      "t.975,22≈2.074, ME≈4.637"
     ],
     "ans": "95% CI ≈[−0.637,8.637]"
    }
   ],
   "mode": "Core lecture"
  },
  {
   "id": "two-means-known",
   "title": "15 · Two means: known variances",
   "tag": "LECTURE 09",
   "minutes": 18,
   "source": [
    "9.CIs4theDifferenceofTwoPopulationMeans-Part2-EMPE.pdf"
   ],
   "summary": "σ₁²,σ₂² known ⇒ z method. Equal හෝ unequal cases දෙකේ SE ගණනය formula එක ඒ ඒ variance අගයන්ට අනුව.",
   "concepts": [
    {
     "h": "Known and equal",
     "b": "If σ₁²=σ₂²=σ² known, SE=σ√(1/n₁+1/n₂).",
     "f": "D ± z*σ√(1/n₁+1/n₂)",
     "k": "Common σ² එක problem එකෙන් දෙනවා."
    },
    {
     "h": "Known and unequal",
     "b": "Known but σ₁²≠σ₂², use each known variance.",
     "f": "D ± z*√(σ₁²/n₁ + σ₂²/n₂)",
     "k": "No Sₚ and no t here."
    },
    {
     "h": "Decision table",
     "b": "Known σ? z. Unknown σ? t (equal pooled vs unequal Welch). Paired? paired t.",
     "f": "Four independent-group cases: known-equal, known-unequal, unknown-equal, unknown-unequal.",
     "k": "Each group should be sampled independently."
    }
   ],
   "examples": [
    {
     "q": "n₁=25,n₂=36; x̄₁=80,x̄₂=75; σ₁=10,σ₂=12: 95% CI",
     "steps": [
      "D=5",
      "SE=√(100/25+144/36)=√8≈2.8284",
      "ME=1.96×2.8284≈5.544"
     ],
     "ans": "[−0.544,10.544]"
    },
    {
     "q": "Equal σ=6, n₁=n₂=18, D=3: 90% CI",
     "steps": [
      "SE=6√(1/18+1/18)=2",
      "z.95≈1.645, ME=3.29"
     ],
     "ans": "[−0.29,6.29]"
    }
   ],
   "mode": "Core lecture"
  },
  {
   "id": "paired",
   "title": "16 · Paired observations & differences",
   "tag": "LECTURE 10",
   "minutes": 18,
   "source": [
    "10.CIs4dDifferenceinMeans4PairedObservations-EMPE.pdf"
   ],
   "summary": "Before/after එකම පුද්ගලයාගේ measurements නම් two independent groups වගේ treat කරන්න එපා. First differences calculate කරන්න.",
   "concepts": [
    {
     "h": "What is paired?",
     "b": "Same students before/after revision, same patients before/after, or deliberately matched pairs. Observations within pair related.",
     "f": "Dᵢ=Afterᵢ−Beforeᵢ (choose order!)",
     "k": "Different sign conventions change the CI sign."
    },
    {
     "h": "Turn paired data into one sample",
     "b": "Compute n differences. Then sample mean D̄, sample SD Sᴅ. From here one-sample t interval for population mean change μᴅ.",
     "f": "D̄ ± t₁₋α/₂,n−1 × Sᴅ/√n",
     "k": "n = number of PAIRS, not total measurements."
    },
    {
     "h": "Variance of differences",
     "b": "Sᴅ²=Σ(Dᵢ−D̄)²/(n−1). Paired observations often reduce noise from different baselines.",
     "f": "df=n−1",
     "k": "Pairing only helps when pairing is meaningful."
    },
    {
     "h": "Interpretation",
     "b": "If CI for after−before entirely positive, average after values are higher at corresponding confidence. Check what difference means in the question.",
     "f": "CI across 0 ⇒ zero change not ruled out by interval alone",
     "k": "Do not claim causation from observational data without design."
    }
   ],
   "examples": [
    {
     "q": "Before 10,12,14,16; after 12,13,17,18; 95% CI for after−before",
     "steps": [
      "D=(2,1,3,2), n=4",
      "D̄=2; squared deviations=0+1+1+0=2; Sᴅ=√(2/3)=.8165",
      "SE=.40825; t.975,3≈3.182 ⇒ ME≈1.299"
     ],
     "ans": "[0.701,3.299]"
    },
    {
     "q": "If before−after chosen instead, what changes?",
     "steps": [
      "Each D changes sign",
      "Mean and both CI limits change sign and order"
     ],
     "ans": "[−3.299,−0.701]"
    }
   ],
   "mode": "Core lecture"
  },
  {
   "id": "variance",
   "title": "17 · CI for one population variance",
   "tag": "LECTURE 11",
   "minutes": 21,
   "source": [
    "11.CIs4dVarianceandRatioofVariances-EMPE.pdf"
   ],
   "summary": "Normal population variance σ² confidence interval. Mean known vs unknown වෙනස් නිසා degrees of freedom හොඳින් බලන්න.",
   "concepts": [
    {
     "h": "Variance parameter",
     "b": "Variance σ² measures squared spread. SD σ is positive square root of variance. CI for σ² never negative.",
     "f": "Var(X)=E[(X−μ)²]",
     "k": "Works here under independent NORMAL observations."
    },
    {
     "h": "Unknown population mean",
     "b": "Usual case: Q=(n−1)S²/σ²~χ²ₙ₋₁. Let χ²(q,ν) mean CDF quantile with probability q.",
     "f": "CI=[(n−1)S²/χ²(1−α/2,ν), (n−1)S²/χ²(α/2,ν)]",
     "k": "Big χ² denominator gives lower bound."
    },
    {
     "h": "Known population mean",
     "b": "If true μ is supplied as known, Q=Σ(Xᵢ−μ)²/σ²~χ²ₙ with df=n.",
     "f": "CI=[A/χ²(1−α/2,n), A/χ²(α/2,n)], A=Σ(xᵢ−μ)²",
     "k": "Do not substitute sample x̄ when μ known."
    },
    {
     "h": "Variance vs SD CI",
     "b": "For σ CI take square roots of variance bounds (monotone increasing on positives).",
     "f": "CIσ=[√L,√U]",
     "k": "Normality matters especially strongly for chi-square variance CI."
    },
    {
     "h": "Reading chi-square tables",
     "b": "PDF table uses tail probabilities that may be reversed relative to CDF q. State whether critical value is upper-tail or lower-tail before substitution.",
     "f": "χ²CDF(0.975,ν) > χ²CDF(0.025,ν)",
     "k": "Critical values are generally asymmetric."
    }
   ],
   "examples": [
    {
     "q": "n=11, s²=4: 95% variance CI",
     "steps": [
      "df=10; A=(11−1)×4=40",
      "χ²CDF(.975,10)≈20.483; χ²CDF(.025,10)≈3.247",
      "Lower=40/20.483≈1.953; Upper=40/3.247≈12.319"
     ],
     "ans": "σ² CI ≈[1.953,12.319]"
    },
    {
     "q": "Known μ=5, observations 4,6,5: derive pivot",
     "steps": [
      "A=(4−5)²+(6−5)²+(5−5)²=2",
      "Known μ ⇒ df=n=3",
      "Q=2/σ²~χ²₃"
     ],
     "ans": "A=2; df=3"
    }
   ],
   "mode": "Core lecture"
  },
  {
   "id": "variance-ratio",
   "title": "18 · CI for ratio of two variances",
   "tag": "LECTURE 11",
   "minutes": 21,
   "source": [
    "11.CIs4dVarianceandRatioofVariances-EMPE.pdf"
   ],
   "summary": "Independent normal populations දෙකක spread එක සසඳන ලකුණු ගන්න chapter එක. F table read කරන විදිහත් පැහැදිලියි.",
   "concepts": [
    {
     "h": "Why F?",
     "b": "Independent Q₁~χ²ν₁ and Q₂~χ²ν₂; normalized ratio (Q₁/ν₁)/(Q₂/ν₂)~Fν₁,ν₂.",
     "f": "F = (S₁²/σ₁²)/(S₂²/σ₂²)",
     "k": "Observations within each group normally distributed, independent groups."
    },
    {
     "h": "Ratio parameter",
     "b": "Interest R=σ₁²/σ₂²; observed r=s₁²/s₂². Want plausible values of R.",
     "f": "df₁=n₁−1; df₂=n₂−1",
     "k": "Changing group order changes ratio reciprocal."
    },
    {
     "h": "Two-sided CI for R",
     "b": "Use F CDF quantiles. Lower=r/F(1−α/2;df₁,df₂). Upper=r/F(α/2;df₁,df₂).",
     "f": "[r/Fhigh,r/Flow]",
     "k": "F quantile F(p,ν₁,ν₂) has left-area p."
    },
    {
     "h": "F inverse relation",
     "b": "If swap degrees of freedom and tails: F(p;ν₁,ν₂)=1/F(1−p;ν₂,ν₁). Useful if table only one tail.",
     "f": "Fupper and Flower need not be reciprocal unless dfs swapped",
     "k": "Ratio CI that includes 1 allows equal variances."
    }
   ],
   "examples": [
    {
     "q": "s₁²=9,s₂²=4, n₁=n₂=11; identify inputs",
     "steps": [
      "r=9/4=2.25",
      "df₁=10,df₂=10",
      "At 95% use p=.975 and p=.025 F critical values"
     ],
     "ans": "r=2.25, (ν₁,ν₂)=(10,10)"
    },
    {
     "q": "Variance ratio observed r=1, Fhigh=4, Flow=.25",
     "steps": [
      "Lower=1/4=.25",
      "Upper=1/.25=4"
     ],
     "ans": "[.25,4]"
    }
   ],
   "mode": "Core lecture"
  },
  {
   "id": "tests",
   "title": "19 · Hypothesis testing starter",
   "tag": "SYLLABUS PREVIEW",
   "minutes": 21,
   "source": [
    "Course Overview.pdf"
   ],
   "summary": "Course Overview එකේ Unit 3 topic. මෙයට detailed lecture PDF මෙතෙක් attach වී නැහැ; පහත පාඩම syllabus මත පදනම් වූ beginner extension එකක්.",
   "concepts": [
    {
     "h": "Null and alternative",
     "b": "H₀ default claim (e.g. μ=50), H₁ competing claim (μ≠50, >50 or <50). Two-tailed vs one-tailed depend on H₁.",
     "f": "H₀: μ=50, H₁: μ≠50",
     "k": "Choose alternative BEFORE seeing the sample."
    },
    {
     "h": "Simple/composite hypotheses",
     "b": "Simple hypothesis completely specifies distribution parameter(s); composite permits multiple parameter values. E.g. H₀:μ=50 vs H₁:μ>50 (composite).",
     "f": "Equality null typical; inequalities alternatives",
     "k": "Other nuisance parameters can affect whether H₀ is technically simple."
    },
    {
     "h": "Type I and II errors",
     "b": "Type I reject a true H₀, probability α. Type II fail to reject false H₀, probability β. Power=1−β.",
     "f": "α = significance; Power=1−β",
     "k": "Fail to reject is NOT prove H₀ true."
    },
    {
     "h": "p-value",
     "b": "Assume H₀ and compute probability of test statistic at least as extreme as observed under the alternative-tail choice. Small p means data surprising under H₀.",
     "f": "Reject H₀ if p ≤ α",
     "k": "p-value is NOT P(H₀ true | data)."
    },
    {
     "h": "Decision pathway",
     "b": "Define parameter → hypotheses → assumptions → z/t/χ²/F/test statistic → reference distribution → p → conclusion in real words.",
     "f": "Two-sided z: p=2[1−Φ(|z|)]",
     "k": "Never make conclusions without context."
    }
   ],
   "examples": [
    {
     "q": "p=.03, α=.05: test decision",
     "steps": [
      "Compare .03≤.05",
      "Reject H₀; evidence against null at 5%"
     ],
     "ans": "Reject H₀"
    },
    {
     "q": "p=.09, α=.05",
     "steps": [
      ".09>.05",
      "Fail to reject H₀; not evidence proving null"
     ],
     "ans": "Fail to reject H₀"
    }
   ],
   "mode": "Syllabus extension — detailed handout not provided"
  },
  {
   "id": "tests-applied",
   "title": "20 · Applied tests & sample size",
   "tag": "SYLLABUS PREVIEW",
   "minutes": 23,
   "source": [
    "Course Overview.pdf"
   ],
   "summary": "Course Overview Unit 4: means, variance, two means, proportions, matched pairs and determining sample size. Introductory rules; verify against later lecturer notes.",
   "concepts": [
    {
     "h": "One-sample mean tests",
     "b": "Known σ → z; unknown σ and normal model → t. Test statistic measures difference from H₀ in SE units.",
     "f": "z=(X̄−μ₀)/(σ/√n); t=(X̄−μ₀)/(S/√n)",
     "k": "Two-sided p doubles one tail."
    },
    {
     "h": "Two independent means",
     "b": "Known σs z; unknown equal variances pooled t; unequal Welch t. One-sided or two-sided alternative changes rejection area.",
     "f": "H₀: μ₁−μ₂=0",
     "k": "Independent ≠ paired."
    },
    {
     "h": "Proportion tests",
     "b": "One proportion H₀:p=p₀: null SE uses p₀ rather than p̂. Two-proportion null equal may use pooled success rate for SE.",
     "f": "z=(p̂−p₀)/√[p₀(1−p₀)/n]",
     "k": "For CI, estimated SE commonly uses p̂; testing differs."
    },
    {
     "h": "Variance & paired tests",
     "b": "Variance σ₀² under normal uses chi-square (n−1)S²/σ₀². Compare variances via F. Paired t uses differences Dᵢ.",
     "f": "t=(D̄−μD,0)/(Sᴅ/√n)",
     "k": "Tail directions matter."
    },
    {
     "h": "Sample size for mean CI",
     "b": "Target margin E, known σ, confidence z: n≥(zσ/E)². Round UP to integer.",
     "f": "n=ceil((z₁₋α/₂ σ / E)²)",
     "k": "Higher confidence or smaller margin needs more samples."
    },
    {
     "h": "Sample size for proportion CI",
     "b": "Plan with guess p*; if none available p*=.5 is conservative for Wald margin.",
     "f": "n=ceil(z²p*(1−p*)/E²)",
     "k": "Large-population approximation; finite-population corrections may apply."
    }
   ],
   "examples": [
    {
     "q": "95% CI mean E=2, σ=10: minimum n",
     "steps": [
      "n≥(1.96×10/2)²=9.8²=96.04",
      "Always round up"
     ],
     "ans": "n=97"
    },
    {
     "q": "95% CI proportion E=.05, no preliminary estimate",
     "steps": [
      "p*=.5",
      "n≥1.96²×.25/.05²=384.16",
      "Round up"
     ],
     "ans": "n=385"
    }
   ],
   "mode": "Syllabus extension — detailed handout not provided"
  },
  {
   "id": "tables",
   "title": "21 · Read statistical tables correctly",
   "tag": "REFERENCE",
   "minutes": 15,
   "source": [
    "StatisticalTables-Normal,t,Chi-square,F.pdf",
    "StatisticalTables-StandardNormalT (1).pdf"
   ],
   "summary": "Uploads වල standard normal CDF, t, chi-square සහ F table තියෙනවා. Left-tail/right-tail notation වෙනස් වෙන නිසා table label කියවීම වැදගත්.",
   "concepts": [
    {
     "h": "z table",
     "b": "Cumulative normal Φ(z)=P(Z≤z). For negative z use symmetry Φ(−z)=1−Φ(z).",
     "f": "Φ(1.96)≈.9750; P(Z>1.96)=.0250",
     "k": "For z=1.23 use row 1.2 and column .03."
    },
    {
     "h": "t table",
     "b": "Two-sided 95% t critical needs df=n−1 and upper tail .025, or two-tail .05. df∞ gives z≈1.96.",
     "f": "df=9 ⇒ t≈2.262",
     "k": "Check table header: one tail / two tails."
    },
    {
     "h": "Chi-square table",
     "b": "Chi-square is skewed: need lower and upper quantiles, not ± symmetric. Table likely labels upper-tail probabilities.",
     "f": "If upper tail .025, CDF .975",
     "k": "Write df first, then probability meaning."
    },
    {
     "h": "F table",
     "b": "Two dfs: numerator df₁ and denominator df₂; tables often list A=upper-tail area, not CDF. Use reciprocal property for opposite tail.",
     "f": "F(0.975;ν₁,ν₂) = upper-tail .025",
     "k": "Swap degrees if you invert F."
    },
    {
     "h": "Critical value mental list",
     "b": "Normal central CIs: 90%=1.645, 95%=1.96, 98%=2.326, 99%=2.576. t/χ²/F critical depend on df.",
     "f": "CDF z.975 =1.96",
     "k": "Tables matter more than memorizing long values."
    }
   ],
   "examples": [
    {
     "q": "Standard normal P(Z>1.23)",
     "steps": [
      "Use CDF Φ(1.23)≈.8907",
      "Right tail=1−.8907"
     ],
     "ans": "0.1093"
    },
    {
     "q": "t 95% CI n=11: which df and tail?",
     "steps": [
      "df=10",
      "two-sided .05 ⇒ one tail .025"
     ],
     "ans": "df10, upper tail .025"
    }
   ],
   "mode": "Original table reference"
  },
  {
   "id": "revision",
   "title": "22 · Exam decision tree & common mistakes",
   "tag": "REVISION",
   "minutes": 13,
   "source": [],
   "summary": "Question එකක් දැක්කාම formula තෝරන decision flow, common traps, final 1-day revision checklist.",
   "concepts": [
    {
     "h": "Identify parameter",
     "b": "Question asks mean μ? proportion p? variance σ²? difference μ₁−μ₂? ratio σ₁²/σ₂²? Then method.",
     "f": "Mean / proportion / variance / ratio",
     "k": "Parameter එක mark කලොත් formula තෝරන එක ලේසියි."
    },
    {
     "h": "Recognize study design",
     "b": "One group, two independent groups, paired? Read words before/after, matched, separate samples.",
     "f": "Paired ⇒ form Dᵢ first",
     "k": "Treating paired as independent loses credit."
    },
    {
     "h": "Pick correct reference distribution",
     "b": "Mean known σ → z; mean unknown σ → t; variance → χ²; ratio variances → F; proportion large sample → z.",
     "f": "Known vs unknown and equal vs unequal dictate formula",
     "k": "Remember df explicitly."
    },
    {
     "h": "Check conditions",
     "b": "Normality, independence, large-sample approximation, parameter constraints, interval sign, positive variance and F.",
     "f": "p∈[0,1], σ²>0",
     "k": "A formula is not universal across designs."
    },
    {
     "h": "Show 5 steps for marks",
     "b": "Given → Model/assumptions → Statistic + critical value → Substitute + calculate → Context conclusion.",
     "f": "Write units in answer where applicable",
     "k": "Always state interpretation, not only numbers."
    },
    {
     "h": "Top traps",
     "b": "n vs n−1, α vs α/2, SD vs variance, paired vs independent, pooled vs Welch, rate vs scale for exponential, chi-square table tails.",
     "f": "Never use X̄ with units of variance.",
     "k": "Practice classification before speed calculations."
    }
   ],
   "examples": [
    {
     "q": "Unknown σ, 2 independent groups with unequal variances: choose method",
     "steps": [
      "Independent groups",
      "σ unknown, unequal ⇒ Welch t",
      "df approximate"
     ],
     "ans": "Welch two-sample t CI"
    },
    {
     "q": "Same 20 students pre/post: choose method",
     "steps": [
      "Paired observations",
      "Compute 20 differences",
      "Use t with df 19"
     ],
     "ans": "Paired t CI"
    }
   ],
   "mode": "Revision synthesis"
  }
 ],
 "quiz": [
  {
   "lesson": "math-language",
   "q": "Which expression equals Σᵢ₌₁³i?",
   "opts": [
    "1+2+3",
    "1×2×3",
    "3²",
    "3!"
   ],
   "correct": 0,
   "explain": "Sigma here adds 1,2 and 3."
  },
  {
   "lesson": "math-language",
   "q": "If σ²=25, σ is",
   "opts": [
    "625",
    "5",
    "12.5",
    "−5"
   ],
   "correct": 1,
   "explain": "Standard deviation is positive square root of variance."
  },
  {
   "lesson": "functions",
   "q": "Derivative of x³?",
   "opts": [
    "3x²",
    "x⁴/4",
    "3x",
    "x²"
   ],
   "correct": 0,
   "explain": "Power rule nx^(n−1)."
  },
  {
   "lesson": "functions",
   "q": "A local maximum often has",
   "opts": [
    "f′=0 and f″<0",
    "f′>0 and f″>0",
    "f′=1 only",
    "f″=0 always"
   ],
   "correct": 0,
   "explain": "Second derivative negative indicates downward curvature."
  },
  {
   "lesson": "integration",
   "q": "∫4x³dx equals",
   "opts": [
    "4x⁴+C",
    "x⁴+C",
    "12x²+C",
    "x³+C"
   ],
   "correct": 1,
   "explain": "Exponent rises to 4 then divide coefficient 4."
  },
  {
   "lesson": "integration",
   "q": "∫₀¹2x dx equals",
   "opts": [
    "0",
    "2",
    "1",
    ".5"
   ],
   "correct": 2,
   "explain": "[x²]₀¹=1."
  },
  {
   "lesson": "probability",
   "q": "Independent events A, B satisfy",
   "opts": [
    "P(A∩B)=P(A)P(B)",
    "P(A∩B)=0",
    "P(A|B)=0",
    "P(A)+P(B)=1"
   ],
   "correct": 0,
   "explain": "Independence gives product."
  },
  {
   "lesson": "probability",
   "q": "If E[X]=3 and E[X²]=13, Var(X)=",
   "opts": [
    "13",
    "4",
    "10",
    "9"
   ],
   "correct": 1,
   "explain": "13−3²=4."
  },
  {
   "lesson": "inference",
   "q": "From sample to population is mainly",
   "opts": [
    "Deductive inference",
    "Inductive inference",
    "Pure algebra",
    "Census"
   ],
   "correct": 1,
   "explain": "Generalization from examples is inductive."
  },
  {
   "lesson": "inference",
   "q": "An iid sample means",
   "opts": [
    "Dependent, different distributions",
    "Independent, same distribution",
    "Same values",
    "Equal sample means"
   ],
   "correct": 1,
   "explain": "iid: independent identically distributed."
  },
  {
   "lesson": "moments",
   "q": "Which is NOT a statistic when μ unknown?",
   "opts": [
    "X̄",
    "X̄+2",
    "X̄−μ",
    "sample maximum"
   ],
   "correct": 2,
   "explain": "Statistics cannot contain unknown parameter."
  },
  {
   "lesson": "moments",
   "q": "Unbiased sample variance divisor is",
   "opts": [
    "n",
    "n+1",
    "n−1",
    "n²"
   ],
   "correct": 2,
   "explain": "Bessel correction."
  },
  {
   "lesson": "mom",
   "q": "MOM estimator for Bernoulli p is",
   "opts": [
    "sample mean",
    "sample variance",
    "sample maximum",
    "1/sample mean"
   ],
   "correct": 0,
   "explain": "E[X]=p."
  },
  {
   "lesson": "mom",
   "q": "Exp(rate λ), sample mean=5. MOM λ̂=",
   "opts": [
    "5",
    ".2",
    "1",
    "25"
   ],
   "correct": 1,
   "explain": "λ̂=1/X̄."
  },
  {
   "lesson": "mle",
   "q": "MLE maximizes",
   "opts": [
    "the sample size",
    "likelihood for fixed data",
    "confidence level",
    "variance always"
   ],
   "correct": 1,
   "explain": "Observe data, optimize parameter."
  },
  {
   "lesson": "mle",
   "q": "3 successes out of 5 Bernoulli MLE of p",
   "opts": [
    ".2",
    ".4",
    ".6",
    ".8"
   ],
   "correct": 2,
   "explain": "p̂=k/n."
  },
  {
   "lesson": "ci-pivots",
   "q": "A 95% two-sided CI has α/2 equal to",
   "opts": [
    ".05",
    ".95",
    ".025",
    ".5"
   ],
   "correct": 2,
   "explain": "α=.05 split equally."
  },
  {
   "lesson": "ci-pivots",
   "q": "If n quadruples, σ/√n becomes",
   "opts": [
    "double",
    "one fourth",
    "half",
    "same"
   ],
   "correct": 2,
   "explain": "√(4n)=2√n."
  },
  {
   "lesson": "distributions",
   "q": "Normal sample mean with unknown σ uses",
   "opts": [
    "t",
    "F",
    "χ² only",
    "uniform"
   ],
   "correct": 0,
   "explain": "Student t with estimated s."
  },
  {
   "lesson": "distributions",
   "q": "Ratio of two independent scaled χ² variables is",
   "opts": [
    "t",
    "F",
    "normal",
    "Bernoulli"
   ],
   "correct": 1,
   "explain": "F ratio construction."
  },
  {
   "lesson": "one-mean",
   "q": "95% z critical approximately",
   "opts": [
    "1.282",
    "1.645",
    "1.96",
    "2.576"
   ],
   "correct": 2,
   "explain": "Two-sided 95%."
  },
  {
   "lesson": "one-mean",
   "q": "One-sample t sample n=20 uses df",
   "opts": [
    "20",
    "19",
    "18",
    "21"
   ],
   "correct": 1,
   "explain": "n−1."
  },
  {
   "lesson": "one-proportion",
   "q": "45 successes of 300 gives p̂",
   "opts": [
    ".15",
    ".45",
    ".30",
    ".85"
   ],
   "correct": 0,
   "explain": "45/300."
  },
  {
   "lesson": "one-proportion",
   "q": "Approximate p̂ SE is",
   "opts": [
    "√(p̂(1−p̂)/n)",
    "p̂/n",
    "p̂n",
    "1/√p̂"
   ],
   "correct": 0,
   "explain": "Plug-in binomial standard error."
  },
  {
   "lesson": "two-proportion",
   "q": "Independent proportions: CI SE uses",
   "opts": [
    "separately estimated p̂₁ and p̂₂",
    "always pooled p",
    "only n₁",
    "paired differences"
   ],
   "correct": 0,
   "explain": "Use unpooled estimates for the standard Wald CI."
  },
  {
   "lesson": "two-means-pooled",
   "q": "Pooled two-sample t df is",
   "opts": [
    "n₁+n₂",
    "n₁+n₂−2",
    "n₁−1",
    "n₁+n₂−1"
   ],
   "correct": 1,
   "explain": "Each group estimates a mean."
  },
  {
   "lesson": "two-means-welch",
   "q": "Unknown unequal variances suggest",
   "opts": [
    "z with known σ",
    "pooled t",
    "Welch t",
    "paired t"
   ],
   "correct": 2,
   "explain": "Unpooled standard error and approximate df."
  },
  {
   "lesson": "two-means-known",
   "q": "Known σ₁² and σ₂² means critical distribution normally",
   "opts": [
    "z",
    "t always",
    "χ²",
    "F"
   ],
   "correct": 0,
   "explain": "Use z in normal framework."
  },
  {
   "lesson": "paired",
   "q": "Before/after same students requires",
   "opts": [
    "two independent means",
    "paired differences",
    "F ratio",
    "pooled proportions"
   ],
   "correct": 1,
   "explain": "Measurements on same people are dependent within pairs."
  },
  {
   "lesson": "paired",
   "q": "12 paired differences use t df",
   "opts": [
    "24",
    "12",
    "11",
    "10"
   ],
   "correct": 2,
   "explain": "df=#pairs−1."
  },
  {
   "lesson": "variance",
   "q": "Unknown μ variance CI pivot df",
   "opts": [
    "n",
    "n−1",
    "2n",
    "1"
   ],
   "correct": 1,
   "explain": "χ² with sample mean estimated."
  },
  {
   "lesson": "variance",
   "q": "Variance interval endpoints are",
   "opts": [
    "always symmetric around S²",
    "possibly asymmetric",
    "often negative",
    "always identical"
   ],
   "correct": 1,
   "explain": "χ² distribution is skewed."
  },
  {
   "lesson": "variance-ratio",
   "q": "F distribution requires",
   "opts": [
    "no df",
    "one df",
    "two df",
    "three df"
   ],
   "correct": 2,
   "explain": "Numerator and denominator dfs."
  },
  {
   "lesson": "tests",
   "q": "Type I error is",
   "opts": [
    "reject true H₀",
    "fail reject false H₀",
    "accept true H₀",
    "null probability"
   ],
   "correct": 0,
   "explain": "By definition Type I = false rejection."
  },
  {
   "lesson": "tests",
   "q": "Power equals",
   "opts": [
    "α+β",
    "1−β",
    "1−α",
    "β"
   ],
   "correct": 1,
   "explain": "Power = probability reject false null."
  },
  {
   "lesson": "tests-applied",
   "q": "Mean CI with z=1.96, σ=10, E=2 needs at least",
   "opts": [
    "96",
    "97",
    "100",
    "385"
   ],
   "correct": 1,
   "explain": "ceil[(1.96×10/2)²]=97."
  },
  {
   "lesson": "tables",
   "q": "Φ(1.96) is approximately",
   "opts": [
    ".025",
    ".95",
    ".975",
    ".995"
   ],
   "correct": 2,
   "explain": "Left-tail CDF .975."
  },
  {
   "lesson": "revision",
   "q": "Choosing two mean method starts with",
   "opts": [
    "calculator brand",
    "population design/known variances",
    "last digit",
    "z table only"
   ],
   "correct": 1,
   "explain": "Identify independent/paired and variance assumptions."
  }
 ],
 "formulas": [
  [
   "Mean",
   "Known σ",
   "X̄ ± z*σ/√n",
   "z"
  ],
  [
   "Mean",
   "Unknown σ",
   "X̄ ± t* S/√n  | df=n−1",
   "t"
  ],
  [
   "Proportion",
   "One p",
   "p̂ ± z*√[p̂(1−p̂)/n]",
   "z"
  ],
  [
   "Proportions",
   "Difference",
   "p̂₁−p̂₂ ± z*√[p̂₁q̂₁/n₁+p̂₂q̂₂/n₂]",
   "z"
  ],
  [
   "Two means",
   "Unknown equal σ²",
   "D ± t*Sₚ√(1/n₁+1/n₂); df=n₁+n₂−2",
   "pooled t"
  ],
  [
   "Two means",
   "Unknown unequal σ²",
   "D ± t*√(S₁²/n₁+S₂²/n₂); Welch df",
   "Welch t"
  ],
  [
   "Two means",
   "Known σ₁²,σ₂²",
   "D ± z*√(σ₁²/n₁+σ₂²/n₂)",
   "z"
  ],
  [
   "Paired data",
   "Mean difference",
   "D̄ ± t*Sᴅ/√n; df=n−1",
   "paired t"
  ],
  [
   "Variance",
   "Unknown μ",
   "[(n−1)S²/χ²upper,(n−1)S²/χ²lower]",
   "χ²"
  ],
  [
   "Variance",
   "Known μ",
   "[Σ(x−μ)²/χ²upper,Σ(x−μ)²/χ²lower]; df=n",
   "χ²"
  ],
  [
   "Variance ratio",
   "Two σ²",
   "[(S₁²/S₂²)/Fupper,(S₁²/S₂²)/Flower]",
   "F"
  ],
  [
   "MOM",
   "General",
   "Solve E[Xʳ]=ΣXᵢʳ/n for parameters",
   "moments"
  ],
  [
   "MLE",
   "General",
   "L(θ)=∏f(xᵢ;θ); maximize ℓ=Σln f",
   "calculus"
  ],
  [
   "Integration",
   "Indefinite",
   "∫xⁿdx=xⁿ⁺¹/(n+1)+C, n≠−1",
   "integral"
  ]
 ]
};
