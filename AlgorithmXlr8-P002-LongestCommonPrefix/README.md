<p align="center"><img src="https://algorithmxlr8.io/logo-mark.png" width="56" alt="AlgorithmXlr8.io logo" /></p>
<h3 align="center">AlgorithmXlr8.io</h3>
<p align="center"><sub>Solved and synced automatically from <a href="https://algorithmxlr8.io">AlgorithmXlr8.io</a></sub></p>

---

# Longest Common Prefix

**Difficulty:** `Easy`

## Problem

Given an array of strings strs, find the longest common prefix string shared by all of them.

If there is no common prefix at all (for example, among dog, racecar, and car), the answer is an empty string.

Read n on the first line of standard input, then n strings, one per line. Print the longest common prefix to standard output (an empty line if there is none).

## Examples

### Example 1

**Input**
```
3
flower
flow
flight
```
**Output**
```
fl
```

**Explanation:** All three strings start with fl, but diverge right after (o vs o vs i), so fl is the longest shared prefix.

### Example 2

**Input**
```
3
interspecies
interstellar
interstate
```
**Output**
```
inters
```

**Explanation:** All three share inters before diverging (p vs t vs t).

### Example 3

**Input**
```
1
single
```
**Output**
```
single
```

**Explanation:** With only one string, that entire string is trivially its own common prefix.

---

Solved on [AlgorithmXlr8.io](https://algorithmxlr8.io/solve-dsa/longest-common-prefix).