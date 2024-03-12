import {
  Blockquote,
  Code,
  Heading,
  Kbd,
  Link,
  Text,
} from "@/components/ui/typography";

export default function Home() {
  return (
    <div className="flow max-w-4xl mx-auto">
      <div>
        <Heading>
          The <em>principles</em> of the typographic craft are difficult to
          master
        </Heading>
        <Text variant="lead" className="font-semibold">
          The principles of the <Link href="/">typographic craft</Link> are
          difficult to master
        </Text>
      </div>
      <Text>
        The goal of <Link href="/">typography</Link> is to relate font size,
        line height, and line width in a proportional way that maximizes beauty
        and makes reading easier and more pleasant.{" "}
        <strong>
          The question is: What proportion(s) will give us the best results?
        </strong>{" "}
        The golden ratio <Code>console.log(GOLDEN_RATIO)</Code> is often
        observed in nature where beauty and utility intersect; perhaps we can
        use this <em>“divine”</em> proportion to enhance these attributes in our
        typography.
      </Text>
      <div>
        <Heading as="h2" className="text-3xl">
          What <em>else</em> can we expect?
        </Heading>
        <Blockquote>
          Perfect typography is certainly the most elusive of all arts.
          Sculpture in stone alone comes near it in obstinacy.
        </Blockquote>
      </div>
      <div>
        <Text>
          Press <Kbd>⌘ C</Kbd> to show/hide the Theme Panel, or press{" "}
          <Kbd>⌘ D</Kbd> to toggle dark mode.
        </Text>
        <Text variant="muted">Some restrictions may apply</Text>
      </div>
      <div>
        <Heading as="h2" className="text-3xl">
          Heading
        </Heading>
        <div>
          <Heading>Heading 1</Heading>
          <Heading as="h2">Heading 2</Heading>
          <Heading as="h3">Heading 3</Heading>
          <Heading as="h4">Heading 4</Heading>
          <Heading as="h5">Heading 5</Heading>
          <Heading as="h6">Heading 6</Heading>
        </div>
      </div>
      <div>
        <Heading as="h2" className="text-3xl">
          Text
        </Heading>
        <div>
          <Text>The quick brown fox jumps over the lazy dog.</Text>
          <Text variant="large">
            The quick brown fox jumps over the lazy dog.
          </Text>
          <Text variant="lead">
            The quick brown fox jumps over the lazy dog.
          </Text>
          <Text variant="muted">
            The quick brown fox jumps over the lazy dog.
          </Text>
          <Text variant="small">
            The quick brown fox jumps over the lazy dog.
          </Text>
        </div>
      </div>
      <div>
        <Heading as="h2" className="text-3xl">
          Blockquote
        </Heading>
        <div>
          <Blockquote>
            Perfect typography is certainly the most elusive of all arts.
            Sculpture in stone alone comes near it in obstinacy.
          </Blockquote>
          <Blockquote variant="subtle">
            Perfect typography is certainly the most elusive of all arts.
            Sculpture in stone alone comes near it in obstinacy.
          </Blockquote>
        </div>
      </div>
      <div>
        <Heading as="h2" className="text-3xl">
          Code
        </Heading>
        <div className="*:block">
          <Code variant="solid">console.log(&quot;Hello world&quot;)</Code>
          <Code>console.log(&quot;Hello world&quot;)</Code>
          <Code variant="ghost">console.log(&quot;Hello world&quot;)</Code>
        </div>
      </div>
      <div>
        <Heading as="h2" className="text-3xl">
          Link
        </Heading>
        <div className="*:block">
          <Link href="/">Learn more</Link>
          <Link href="/" variant="subtle">
            Learn more
          </Link>
        </div>
      </div>
      <div>
        <Heading as="h2" className="text-3xl">
          Kbd
        </Heading>
        <div className="*:block">
          <Kbd>⌘ C</Kbd>
          <Kbd>⌘ C</Kbd>
          <Kbd>⌘ C</Kbd>
        </div>
      </div>
    </div>
  );
}
